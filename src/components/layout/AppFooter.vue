<script setup>
const baseUrl = import.meta.env.BASE_URL;

const quickLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'خدماتنا', path: '/services' },
  { name: 'كيف نعمل', path: '/process' },
  { name: 'من نحن', path: '/about' },
  { name: 'تواصل معنا', path: '/contact' },
];

const serviceLinks = [
  { name: 'الخدمات الكهربائية', path: '/services' },
  { name: 'الخدمات الميكانيكية', path: '/services' },
  { name: 'استشارات هندسية', path: '/services' },
  { name: 'تقنية BIM', path: '/services' },
  { name: 'التصميم والتنفيذ', path: '/services' },
];
</script>

<template>
  <footer id="app-footer" class="app-footer" data-name="Desktop - 7">
    <div class="container app-footer__container">
      <div class="app-footer__grid" data-name="Frame 90">
        <!-- Brand Column -->
        <div class="app-footer__brand">
          <RouterLink to="/" class="app-footer__logo" aria-label="الرئيسية">
            <img :src="`${baseUrl}assets/logo.png`" alt="مؤسسة سهم القمة" class="app-footer__logo-img" />
          </RouterLink>
          <p class="app-footer__desc">
            حلول متكاملة لحلول<br />
            أعمالك، من الفكرة إلى<br />
            الانتشار
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
              <a href="mailto:mahmoud@etc-foustat.net" class="app-footer__link" dir="ltr">Mahmoud@Etc-Foustat.Net</a>
            </p>
            <p class="app-footer__contact-item app-footer__contact-item--phone">
              <a href="tel:+966568909193" class="app-footer__link" dir="ltr">+966 56 890 9193</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--color-navy-dark);
  color: var(--color-text-white);
  padding: 42px 0 34px;
  width: 100%;
  overflow-x: clip;
}

.app-footer__container {
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 931px) {
  .app-footer__container {
    padding: 0 24px;
  }
}

.app-footer__grid {
  width: 100%;
  display: grid;
  grid-template-columns: 134px 120px 160px 160px;
  justify-content: space-between;
  align-items: start;
}

/* Brand */
.app-footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 13px;
}

.app-footer__logo-img {
  width: 110px;
  height: auto;
  object-fit: contain;
}

.app-footer__desc {
  max-width: 134px;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  color: #E0E0E0;
  text-align: right;
  margin: 0;
}

.app-footer__socials {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
  padding: 0;
}

.app-footer__social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: #FFFFFF;
  transition: all var(--transition-fast);
}

.app-footer__social-btn svg {
  width: 17px;
  height: 17px;
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
  gap: 4px;
  text-align: right;
  min-width: 0;
}

.app-footer__col--quick {
  width: 120px;
  transform: translateX(-30px);
}

.app-footer__title {
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  margin: 0;
  color: #D6214E;
  text-align: right;
}

.app-footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin: 0;
  text-align: right;
}

.app-footer__link {
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
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
  gap: 17px;
  text-align: right;
}

.app-footer__contact-item {
  max-width: 160px;
  font-size: 13px;
  font-weight: 500;
  color: #E0E0E0;
  line-height: 19px;
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
  font-size: 13px;
  line-height: 19px;
}

@media (max-width: 767px) {
  .app-footer {
    padding: 40px 0;
  }

  .app-footer__container {
    padding: 0 24px;
  }

  .app-footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }

  .app-footer__col--quick {
    width: auto;
    transform: none;
  }
}
</style>
