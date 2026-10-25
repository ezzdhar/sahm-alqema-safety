<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '../common/AppButton.vue';

const route = useRoute();
const baseUrl = import.meta.env.BASE_URL;
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'من نحن', path: '/about' },
  { name: 'كيف نعمل', path: '/process' },
  { name: 'خدماتنا', path: '/services' },
  { name: 'تواصل معنا', path: '/contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Auto close mobile drawer on route change
watch(
  () => route.path,
  () => {
    closeMobileMenu();
  }
);

// Prevent body scroll when drawer is open
watch(mobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});

// Close drawer on window resize to desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Close on Escape key press
const handleKeydown = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <header
    class="app-header"
    :class="{
      'app-header--scrolled': isScrolled,
      'app-header--menu-open': mobileMenuOpen
    }"
  >
    <div class="container app-header__container">
      <div class="app-header__bar" data-name="Frame 49">
        <!-- Right: Logo (in RTL, first visual item on right) -->
        <RouterLink to="/" class="app-header__logo" @click="closeMobileMenu">
          <img
            :src="`${baseUrl}assets/logo.png`"
            alt="مؤسسة سهم القمة لتطوير وإدارة الأعمال"
            class="app-header__logo-img"
          />
        </RouterLink>

        <!-- Center: Desktop Navigation Links -->
        <nav class="app-header__nav" aria-label="القائمة الرئيسية">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="app-header__nav-link"
            :class="{ 'app-header__nav-link--active': route.path === link.path }"
          >
            {{ link.name }}
            <span v-if="route.path === link.path" class="app-header__active-underline"></span>
          </RouterLink>
        </nav>

        <!-- Left: CTA Button & Mobile Toggle -->
        <div class="app-header__actions">
          <AppButton to="/contact" variant="primary" size="md" class="app-header__cta-btn">
            احجز الآن
          </AppButton>

          <!-- Mobile Burger Toggle Button -->
          <button
            type="button"
            class="app-header__mobile-toggle"
            :class="{ 'app-header__mobile-toggle--open': mobileMenuOpen }"
            :aria-expanded="mobileMenuOpen"
            aria-label="تبديل القائمة"
            aria-controls="mobile-menu-drawer"
            @click="toggleMobileMenu"
          >
            <span class="hamburger-box" aria-hidden="true">
              <transition name="icon-fade" mode="out-in">
                <!-- Symmetrical centered 3-line hamburger icon -->
                <svg
                  v-if="!mobileMenuOpen"
                  key="menu"
                  class="hamburger-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>

                <!-- Symmetrical centered close (X) icon -->
                <svg
                  v-else
                  key="close"
                  class="hamburger-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </transition>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Overlay & Menu -->
    <transition name="mobile-drawer">
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu-drawer"
        class="app-header__mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="القائمة المتنقلة"
        @click.self="closeMobileMenu"
      >
        <div class="app-header__mobile-content">
          <nav class="app-header__mobile-nav" aria-label="روابط القائمة الرئيسية">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="app-header__mobile-link"
              :class="{ 'app-header__mobile-link--active': route.path === link.path }"
              @click="closeMobileMenu"
            >
              <span class="app-header__mobile-link-text">{{ link.name }}</span>
              <svg class="app-header__mobile-link-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M14 6 8 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </RouterLink>
          </nav>

          <div class="app-header__mobile-cta">
            <AppButton to="/contact" variant="primary" size="lg" block @click="closeMobileMenu">
              احجز الآن
            </AppButton>
          </div>

          <div class="app-header__mobile-footer">
            <div class="app-header__mobile-tagline">مؤسسة سهم القمة لتطوير وإدارة الأعمال</div>
            <div class="app-header__mobile-sub">حلول استشارية واستثمارية متكاملة</div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 50px 0 0;
  transition: padding var(--transition-normal);
  background: transparent;
  pointer-events: none;
}

@media (max-width: 767px) {
  .app-header {
    padding: 12px 0 0;
  }
}

.app-header--menu-open {
  pointer-events: auto;
}

.app-header .container {
  pointer-events: auto;
  position: relative;
  z-index: 1002;
}

.app-header--scrolled {
  padding: 50px 0 0;
}

.app-header__container {
  display: flex;
  justify-content: center;
  max-width: 1248px;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 1247px) {
  .app-header__container {
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Single Pill Header Bar Matching Figma Frame 49 */
.app-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: none;
  border-radius: 40px;
  padding: 10px 24px;
  box-shadow: none;
  transition: all var(--transition-normal);
}

@media (max-width: 767px) {
  .app-header__bar {
    padding: 8px 16px;
    gap: 16px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
  }
}

@media (min-width: 1024px) {
  .app-header__bar {
    gap: 32px;
  }
}

.app-header--scrolled .app-header__bar {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: none;
  padding: 10px 24px;
}

@media (max-width: 767px) {
  .app-header--scrolled .app-header__bar {
    padding: 8px 16px;
  }
}

.app-header--menu-open .app-header__bar {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: none;
}

/* Logo */
.app-header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.app-header__logo-img {
  width: auto;
  height: 57px;
  max-height: 57px;
  object-fit: contain;
  transition: all var(--transition-fast);
}

@media (max-width: 767px) {
  .app-header__logo-img {
    width: 145px;
    height: 48px;
  }
}

/* Nav Links (Desktop) Matching Figma Frame 36 */
.app-header__nav {
  display: none;
  align-items: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .app-header__nav {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .app-header__nav {
    gap: 54px;
  }
}

.app-header__nav-link {
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #C7C7C7;
  text-decoration: none;
  padding: 0 0 2px;
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.app-header__nav-link:hover {
  color: #FFFFFF;
}

.app-header__nav-link--active {
  color: #FBE9ED;
  font-weight: 700;
  border-bottom: 1.5px solid #FBE9ED;
}

.app-header__active-underline {
  display: none;
}

/* Actions */
.app-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.app-header__cta-btn {
  width: 145px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px !important;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #E8ECF1 !important;
  box-shadow: none !important;
  padding: 0;
}

/* Mobile Burger Toggle Button */
.app-header__mobile-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all var(--transition-fast);
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
}

.app-header__mobile-toggle:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.38);
}

.app-header__mobile-toggle:active {
  transform: scale(0.92);
}

.app-header__mobile-toggle--open {
  background: rgba(214, 33, 78, 0.25);
  border-color: rgba(214, 33, 78, 0.7);
  box-shadow: 0 0 12px rgba(214, 33, 78, 0.35);
}

.hamburger-box {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  line-height: 0;
}

.hamburger-icon {
  width: 20px;
  height: 20px;
  display: block;
  overflow: visible;
}

/* Smooth Icon Transition (Burger <-> Close) */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.75);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.75);
}

/* Mobile Drawer */
.app-header__mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: linear-gradient(180deg, rgba(7, 18, 33, 0.98) 0%, rgba(10, 24, 43, 0.99) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 1001;
  pointer-events: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  padding: 88px 20px 32px;
}

.app-header__mobile-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100dvh - 120px);
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
}

.app-header__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.app-header__mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 600;
  color: #E8ECF1;
  padding: 14px 18px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.app-header__mobile-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
  color: #FFFFFF;
}

.app-header__mobile-link--active {
  background: rgba(214, 33, 78, 0.15);
  border-color: rgba(214, 33, 78, 0.4);
  color: #FFFFFF;
  font-weight: 700;
}

.app-header__mobile-link-arrow {
  color: var(--color-text-light);
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.app-header__mobile-link:hover .app-header__mobile-link-arrow,
.app-header__mobile-link--active .app-header__mobile-link-arrow {
  color: var(--color-primary);
  transform: translateX(-4px);
}

.app-header__mobile-cta {
  margin-top: 24px;
}

.app-header__mobile-footer {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.app-header__mobile-tagline {
  font-size: 13px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.app-header__mobile-sub {
  font-size: 12px;
  color: var(--color-text-light);
}

/* Mobile Drawer Transitions */
.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Responsive Breakpoints */
@media (max-width: 767px) {
  .app-header {
    padding: 12px 0 0;
  }

  .app-header--scrolled {
    padding: 0;
  }

  .app-header .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .app-header--scrolled .container {
    padding-left: 12px;
    padding-right: 12px;
  }

  .app-header__bar {
    padding: 6px 14px 6px 14px;
    gap: 12px;
  }

  .app-header--scrolled .app-header__bar {
    padding: 8px 14px;
    border-radius: 0 0 20px 20px;
    border-top: none;
  }

  .app-header__logo-img {
    height: 36px;
    width: auto;
  }

  .app-header__cta-btn {
    display: none;
  }

  .app-header__mobile-toggle {
    display: inline-flex;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .app-header__bar {
    padding: 8px 16px;
    gap: 14px;
  }

  .app-header__nav {
    gap: 14px;
  }

  .app-header__nav-link {
    font-size: 13.5px;
    padding: 6px 2px;
  }

  .app-header__cta-btn {
    padding: 8px 14px;
    font-size: 13px;
  }

  .app-header__logo-img {
    height: 38px;
  }
}
</style>
