<script setup>
const baseUrl = import.meta.env.BASE_URL;

const quickLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'من نحن', path: '/about' },
  { name: 'آلية العمل', path: '/process' },
  { name: 'خدماتنا', path: '/services' },
  { name: 'تواصل معنا', path: '/contact' },
];

const serviceLinks = [
  { name: 'تصميم ومراجعة المخططات والتراخيص', path: '/services#design-permits' },
  { name: 'حلول استشارية واستثمارية MEP', path: '/services#consulting' },
  { name: 'إدارة وتنسيق مهام MEP', path: '/services#mep-tasks' },
  { name: 'التسويق بالفيديو والجرافيك ديزاين', path: '/services#video-design' },
  { name: 'إدارة السوشيال ميديا', path: '/services#social-media' },
];
</script>

<template>
  <footer class="app-footer" data-name="Desktop - 7">
    <div class="container app-footer__container">
      <div class="app-footer__grid" data-name="Frame 90">
        <!-- Brand Column -->
        <div class="app-footer__brand">
          <RouterLink to="/" class="app-footer__logo" aria-label="الرئيسية">
            <img :src="`${baseUrl}assets/logo.png`" alt="مؤسسة سهم القمة" class="app-footer__logo-img" />
          </RouterLink>
          <p class="app-footer__desc">
            حلول استشارية واستثمارية متكاملة في قلب المجال الـ MEP.
          </p>
          <div class="app-footer__socials">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="app-footer__social-btn"
              aria-label="تيك توك">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="app-footer__social-btn"
              aria-label="انستغرام">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="app-footer__social-btn"
              aria-label="فيسبوك">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links: Quick links -->
        <div class="app-footer__col app-footer__col--quick" data-name="Frame 87">
          <h4 class="app-footer__title">روابط سريعة</h4>
          <ul class="app-footer__list app-footer__list--quick" data-name="Frame 91">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="app-footer__link">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Links: Services -->
        <div class="app-footer__col app-footer__col--services" data-name="Frame 88">
          <h4 class="app-footer__title">خدماتنا</h4>
          <ul class="app-footer__list app-footer__list--services" data-name="Frame 92">
            <li v-for="link in serviceLinks" :key="link.name">
              <RouterLink :to="link.path" class="app-footer__link app-footer__link--service">{{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="app-footer__col app-footer__col--contact" data-name="Frame 89">
          <h4 class="app-footer__title">تواصل معنا</h4>
          <div class="app-footer__contact-info" data-name="Frame 93">
            <p class="app-footer__contact-item">الرياض، المملكة العربية السعودية</p>
            <p class="app-footer__contact-item">
              <a href="mailto:mahmoud@k-fawziat.net" class="app-footer__link">mahmoud@k-fawziat.net</a>
            </p>
            <p class="app-footer__contact-item app-footer__contact-item--phone">
              <a href="tel:+966568909193" class="app-footer__link" dir="ltr">+966 56 890 9193</a>
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright matching Figma Desktop - 7 Frame 83 -->
      <div class="app-footer__bottom" data-name="Frame 83">
        <p class="app-footer__copyright" data-name="2026 © مؤسسة سهم القمة. جميع الحقوق محفوظة.">
          © 2026 مؤسسة سهم القمة. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--color-navy-dark);
  color: var(--color-text-white);
  padding: 86px 0 0;
  border-top: none;
  border: none;
  width: 100%;
  overflow-x: clip;
}

.app-footer__container {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

@media (min-width: 1296px) {
  .app-footer__container {
    padding: 0;
  }
}

.app-footer__grid {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
}

@media (min-width: 640px) {
  .app-footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (min-width: 1024px) {
  .app-footer__grid {
    grid-template-columns: 1.3fr auto 1.3fr 1.1fr;
    gap: 36px;
    align-items: start;
  }
}

@media (min-width: 1280px) {
  .app-footer__grid {
    grid-template-columns: 1.3fr 115px 1.3fr 1.1fr;
    gap: 48px;
  }
}

/* Brand */
.app-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 16px;
}

.app-footer__logo-img {
  height: 56px;
  width: 168px;
  max-width: 180px;
  object-fit: contain;
}

.app-footer__desc {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #E0E0E0;
  max-width: 320px;
  text-align: right;
  margin: 0;
}

.app-footer__socials {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  padding: 0;
}

.app-footer__social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  transition: all var(--transition-fast);
}

.app-footer__social-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(214, 33, 78, 0.4);
}

/* Columns */
.app-footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
  min-width: 0;
}

.app-footer__col--quick {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
}

@media (min-width: 1024px) {
  .app-footer__col--quick {
    width: 115px;
  }
}

.app-footer__col--services {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
  margin-inline-start: 0;
}

@media (min-width: 1280px) {
  .app-footer__col--services {
    margin-inline-start: 111.2px;
  }
}

.app-footer__col--contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
}

.app-footer__title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: #D6214E;
  position: relative;
  display: inline-block;
  text-align: right;
}

.app-footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  text-align: right;
}

.app-footer__list--services {
  gap: 8px;
}

.app-footer__list--quick {
  gap: 20px;
}

.app-footer__link {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #E0E0E0;
  transition: all var(--transition-fast);
  display: inline-block;
  text-align: right;
}

.app-footer__link:hover {
  color: var(--color-primary);
  transform: translateX(-4px);
}

.app-footer__contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;
}

.app-footer__contact-item {
  font-size: 18px;
  font-weight: 500;
  color: #E0E0E0;
  line-height: 26px;
  margin: 0;
  text-align: right;
}

.app-footer__contact-item--phone {
  text-align: right;
}

.app-footer__contact-item--phone .app-footer__link {
  display: inline-block;
  direction: ltr;
  unicode-bidi: isolate;
  text-align: right;
  font-size: 18px;
  line-height: 27px;
}

/* Bottom */
.app-footer__bottom {
  margin-top: 88px;
  padding: 0 0 28px;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.app-footer__copyright {
  font-family: var(--font-inter);
  font-size: 12px;
  line-height: 20px;
  color: #F0F0F0;
  text-align: center;
  margin: 0 auto;
  display: block;
}

@media (min-width: 1280px) {
  .app-footer__copyright {
    transform: translateX(495.5px);
  }
}

@media (max-width: 767px) {
  .app-footer {
    padding: 56px 0 0;
  }

  .app-footer__container {
    padding: 0 16px;
  }

  .app-footer__desc,
  .app-footer__link,
  .app-footer__contact-item {
    font-size: 16px;
    line-height: 24px;
  }

  .app-footer__bottom {
    margin-top: 48px;
    padding: 0 0 24px;
  }
}
</style>
