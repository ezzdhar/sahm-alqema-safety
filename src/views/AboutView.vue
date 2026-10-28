<script setup>
import AppButton from '../components/common/AppButton.vue';

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <div class="about-page" data-name="Desktop - 15">
    <!-- Desktop - 1: Hero Section -->
    <section class="about-hero" data-name="Desktop - 1">
      <div class="about-hero__overlay" aria-hidden="true"></div>
      <div class="container about-hero__container">
        <div class="about-hero__content" data-name="Frame 106">
          <h1 class="about-hero__title" data-name="مؤسسة سهم القمة">
            مؤسسة سهم القمة
          </h1>
          <p
            class="about-hero__subtitle"
            data-name="شريكك الهندسي في أنظمة الأمن والسلامة والميكانيكا والكهرباء والسباكة، بخبرة مجموعة الفسطاط منذ 1989."
          >
            شريكك الهندسي في أنظمة الأمن والسلامة والميكانيكا والكهرباء والسباكة، بخبرة مجموعة الفسطاط منذ 1989.
          </p>
        </div>
      </div>
    </section>

    <!-- Desktop - 10: About Section -->
    <section class="about-section" data-name="Desktop - 10">
      <div class="container about-section__container">
        <div class="about-section__grid" data-name="Frame 115">
          <!-- Text Content Block (Container) - Right side in RTL -->
          <div class="about-section__content" data-name="Container">
            <div class="about-section__heading-wrap">
              <h2 class="about-section__title" data-name="Heading 2">
                <span class="about-section__title-prefix" data-name="من نحن:">من نحن:</span>
                <span class="about-section__title-brand" data-name="مؤسسة سهم القمة">مؤسسة سهم القمة</span>
              </h2>
              <!-- Pink/Red underline bar (Background in Figma) -->
              <div class="about-section__accent-bar" data-name="Background" aria-hidden="true"></div>
            </div>

            <p class="about-section__desc" data-name="Paragraph">
              مؤسسة سهم القمة لأنظمة الأمن والسلامة هي الفرع السعودي لمجموعة الفسطاط، المزوّد الاستشاري الثابت منذ عام 1989 لخدمات الميكانيكا والكهرباء والسباكة بموثوقية ودقة. بحضور راسخ في الشرق الأوسط وحضور قوي في مصر، وبفرعنا في المملكة العربية السعودية، نحن شريك يُعتمد عليه في احتياجات البنية التحتية لمشروعك.
            </p>

            <div class="about-section__actions" data-name="Frame 52">
              <AppButton
                to="/contact"
                variant="primary"
                size="lg"
                class="about-section__btn about-section__btn--primary"
                data-name="Button"
              >
                احجز الآن
              </AppButton>
              <AppButton
                to="/services"
                variant="outline-dark"
                size="lg"
                class="about-section__btn about-section__btn--secondary"
                data-name="Button"
              >
                خدماتنا
              </AppButton>
            </div>
          </div>

          <!-- Media / Image Block - Left side in RTL (Frame 114) -->
          <div class="about-section__media" data-name="Frame 114">
            <!-- Decorative Offset Red Frame (Rectangle 5) -->
            <div class="about-section__frame-border" data-name="Rectangle 5" aria-hidden="true"></div>

            <!-- Front Image Frame (Frame 113) -->
            <div class="about-section__image-container" data-name="Frame 113">
              <img
                :src="`${baseUrl}assets/villa.jpg`"
                alt="مقر ومشاريع مؤسسة سهم القمة"
                class="about-section__img"
                loading="lazy"
                data-name="villa 1"
              />
              <div class="about-section__img-overlay" aria-hidden="true"></div>
            </div>

            <!-- Floating Experience Card (Frame 51) -->
            <div class="about-section__badge" data-name="Frame 51">
              <div class="about-section__badge-content" data-name="Frame 150">
                <span class="about-section__badge-title" data-name="خبرة هندسية منذ">خبرة هندسية منذ</span>
                <span class="about-section__badge-year" data-name="1989">1989</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Desktop - 15 Root Container */
.about-page {
  background-color: #FFFFFF;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  direction: rtl;
}

/* ==========================================================================
   Desktop - 1: Hero Section
   ========================================================================== */
.about-hero {
  position: relative;
  width: 100%;
  min-height: 644px;
  height: 644px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(26, 32, 49, 0.7) 100%), url('/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Top padding ensures content is vertically centered accounting for 50px fixed header */
  padding: 130px 24px 60px;
  box-sizing: border-box;
}

.about-hero__container {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Frame 106 */
.about-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  width: 100%;
  max-width: 884px;
}

/* مؤسسة سهم القمة */
.about-hero__title {
  font-family: 'Tajawal', var(--font-family, sans-serif);
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 82px;
  text-align: center;
  color: #F4F4F4;
  margin: 0;
  letter-spacing: -0.5px;
}

/* شريكك الهندسي في أنظمة الأمن والسلامة... */
.about-hero__subtitle {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  color: #DEDEDE;
  margin: 0;
  max-width: 884px;
}

/* ==========================================================================
   Desktop - 10: About Section
   ========================================================================== */
.about-section {
  position: relative;
  width: 100%;
  min-height: 724px;
  background-color: #F6F0EC;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  box-sizing: border-box;
}

.about-section__container {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

/* Frame 115 (1248px x 390px, gap: 27px) */
.about-section__grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  width: 100%;
}

/* Container (Text Column) - width: 583px */
.about-section__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 20px;
  width: 100%;
  max-width: 583px;
  flex: 0 0 583px;
  box-sizing: border-box;
}

.about-section__heading-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
}

/* Heading 2 */
.about-section__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  margin: 0;
  text-align: right;
}

/* من نحن: */
.about-section__title-prefix {
  color: #102543;
}

/* مؤسسة سهم القمة */
.about-section__title-brand {
  color: #D6214E;
}

/* Red accent bar under title (Background: width 294px, height 4px, background #D81B4D) */
.about-section__accent-bar {
  width: 294px;
  height: 4px;
  background-color: #D81B4D;
  border-radius: 4px;
}

/* Paragraph Text */
.about-section__desc {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #434343;
  margin: 0;
  text-align: right;
  max-width: 583px;
}

/* Frame 52 (Buttons) */
.about-section__actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 10px;
}

/* Button 1: Primary Red */
.about-section__btn--primary {
  width: 216px !important;
  height: 56px !important;
  background-color: #D6214E !important;
  border-radius: 10px !important;
  color: #FFFFFF !important;
  font-family: 'Cairo', var(--font-cairo, sans-serif) !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  box-shadow: 0 4px 14px rgba(214, 33, 78, 0.25) !important;
}

.about-section__btn--primary:hover {
  background-color: #BF1B44 !important;
  transform: translateY(-2px);
}

/* Button 2: Dark Outline */
.about-section__btn--secondary {
  width: 169px !important;
  height: 56px !important;
  border: 1.5px solid #091627 !important;
  border-radius: 10px !important;
  background-color: transparent !important;
  color: #091627 !important;
  font-family: 'Cairo', var(--font-cairo, sans-serif) !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px !important;
}

.about-section__btn--secondary:hover {
  background-color: rgba(9, 22, 39, 0.05) !important;
  transform: translateY(-2px);
}

/* ==========================================================================
   Frame 114: Media / Image Column (width: 638px, height: 390px)
   ========================================================================== */
.about-section__media {
  position: relative;
  width: 638px;
  height: 390px;
  flex: 0 0 638px;
  box-sizing: border-box;
}

/* Rectangle 5: Red Border Frame (offset by 24px, 23px) */
.about-section__frame-border {
  position: absolute;
  width: 614px;
  height: 367px;
  left: 24px;
  top: 23px;
  border: 3px solid #D6214E;
  border-radius: 10px;
  box-sizing: border-box;
  pointer-events: none;
  z-index: 1;
}

/* Frame 113: Image Container */
.about-section__image-container {
  position: absolute;
  width: 614px;
  height: 367px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* villa 1 */
.about-section__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-section__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

/* Frame 51: Floating Badge (239px x 139px, left: 399px, top: 309px inside Frame 114) */
.about-section__badge {
  position: absolute;
  width: 239px;
  height: 139px;
  left: 399px;
  top: 309px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Frame 150 */
.about-section__badge-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 157px;
  height: 100px;
  text-align: center;
}

/* خبرة هندسية منذ */
.about-section__badge-title {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #0C1C32;
  text-align: center;
  margin: 0;
}

/* 1989 */
.about-section__badge-year {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 60px;
  color: #D6214E;
  text-align: center;
  margin: 0;
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1280px) {
  .about-section__grid {
    gap: 24px;
  }

  .about-section__content {
    max-width: 520px;
    flex: 1 1 440px;
  }

  .about-section__media {
    width: 520px;
    height: 320px;
    flex: 0 0 520px;
  }

  .about-section__frame-border,
  .about-section__image-container {
    width: 496px;
    height: 297px;
  }

  .about-section__badge {
    left: 280px;
    top: 220px;
  }
}

@media (max-width: 1024px) {
  .about-hero {
    min-height: 520px;
    height: auto;
    padding: 140px 20px 60px;
  }

  .about-hero__title {
    font-size: clamp(40px, 6vw, 60px);
    line-height: 1.2;
  }

  .about-hero__subtitle {
    font-size: clamp(20px, 3vw, 24px);
    line-height: 1.5;
  }

  .about-section {
    min-height: auto;
    padding: 60px 0 90px;
  }

  .about-section__grid {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  .about-section__content {
    max-width: 638px;
    flex: none;
    align-items: flex-start;
  }

  .about-section__media {
    width: 100%;
    max-width: 614px;
    height: auto;
    aspect-ratio: 638 / 390;
    flex: none;
    margin-top: 10px;
  }

  .about-section__frame-border,
  .about-section__image-container {
    width: calc(100% - 24px);
    height: calc(100% - 23px);
  }

  .about-section__badge {
    left: auto;
    right: 16px;
    bottom: -24px;
    top: auto;
  }
}

@media (max-width: 680px) {
  .about-hero {
    min-height: 440px;
    padding: 120px 16px 50px;
  }

  .about-hero__content {
    gap: 20px;
  }

  .about-hero__title {
    font-size: 34px;
    line-height: 44px;
  }

  .about-hero__subtitle {
    font-size: 18px;
    line-height: 28px;
  }

  .about-section__container {
    padding: 0 16px;
  }

  .about-section__heading-wrap {
    gap: 10px;
  }

  .about-section__title {
    font-size: 28px;
    line-height: 40px;
    flex-wrap: wrap;
  }

  .about-section__accent-bar {
    width: 200px;
  }

  .about-section__desc {
    font-size: 16px;
    line-height: 26px;
  }

  .about-section__actions {
    flex-direction: column;
    width: 100%;
    gap: 14px;
  }

  .about-section__btn--primary,
  .about-section__btn--secondary {
    width: 100% !important;
  }

  /* Responsive image frame on small mobile screens */
  .about-section__media {
    min-height: 220px;
  }

  .about-section__badge {
    width: 170px;
    height: 94px;
    left: auto;
    right: 12px;
    bottom: -20px;
    top: auto;
    padding: 8px;
  }

  .about-section__badge-content {
    width: 100%;
    height: 100%;
    gap: 4px;
  }

  .about-section__badge-title {
    font-size: 15px;
    line-height: 22px;
  }

  .about-section__badge-year {
    font-size: 28px;
    line-height: 38px;
  }
}
</style>
