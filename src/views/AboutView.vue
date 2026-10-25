<script setup>
import { onMounted, onUnmounted } from 'vue';
import AppButton from '../components/common/AppButton.vue';

const pillars = [
  {
    icon: 'compass',
    title: 'رؤيتنا',
    desc: 'أن نكون الخيار الأول والنموذج الرائد في تقديم الحلول والأنظمة الكهروميكانيكية المتكاملة، مساهمين بفعالية في تحقيق مستهدفات رؤية المملكة 2030.',
    color: '#D6214E',
  },
  {
    icon: 'target',
    title: 'رسالتنا',
    desc: 'تحويل التحديات الهندسية إلى حلول تنفيذية متطورة ومستدامة، عبر خدمات متكاملة تبدأ من الفكرة والتصميم حتى التشغيل والتسليم بأعلى معايير السلامة والجودة.',
    color: '#1A3E6F',
  },
  {
    icon: 'award',
    title: 'قيمنا',
    desc: 'الإتقان الهندسي، الشفافية، الالتزام المطلق بسلامة الأرواح والمنشآت، والحرص على بناء شراكات استراتيجية طويلة الأمد مع عملائنا.',
    color: '#D6214E',
  },
];

const capabilities = [
  {
    num: '01',
    title: 'كوادر هندسية معتمدة',
    desc: 'فريق عمل متكامل من المهندسين والفنيين ذوي الكفاءة العالية والخبرة الميدانية الواسعة.',
  },
  {
    num: '02',
    title: 'معايير سلامة وجودة دولية',
    desc: 'تطبيق صارم لاشتراطات كود البناء السعودي ومعايير السلامة المهنية المعتمدة عالمياً.',
  },
  {
    num: '03',
    title: 'أحدث تقنيات النمذجة BIM',
    desc: 'استخدام أحدث برمجيات التصميم والنمذجة ثلاثية الأبعاد لكشف التعارضات وتسريع وتيرة الإنجاز.',
  },
  {
    num: '04',
    title: 'التزام دقيق بالمواعيد',
    desc: 'إدارة هندسية محترفة للمشاريع تضمن تسليم كافة المراحل وفق الجدول الزمني المعتمد بدون تأخير.',
  },
];

const stats = [
  { value: '+15', label: 'عاماً من الخبرة التراكمية' },
  { value: '+120', label: 'مشروعاً منجزاً بنجاح' },
  { value: '100%', label: 'التزام بمعايير الجودة والسلامة' },
  { value: '+50', label: 'كادراً هندسياً وفنياً متخصصاً' },
];

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.backgroundColor = '#091627';
    document.body.style.backgroundColor = '#091627';
  }
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.backgroundColor = '';
    document.body.style.backgroundColor = '';
  }
});
</script>

<template>
  <div class="about-view" data-name="Desktop - 15">
    <!-- Ambient Section Glow matching Figma -->
    <div class="about-glow section-glow" data-name="Section glow" aria-hidden="true"></div>

    <!-- Hero Header -->
    <section class="about-hero" data-name="Frame 146">
      <div class="container about-hero__container">
        <div class="about-hero__badge">عن المؤسسة</div>
        <h1 class="about-hero__title" data-name="Manifesto heading">
          مؤسسة <span class="highlight-red">سهم القمة</span>
        </h1>
        <p class="about-hero__desc" data-name="Manifesto heading">
          رواد الحلول الهندسية المتكاملة والمقاولات الكهروميكانيكية (MEP) في المملكة العربية السعودية
        </p>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="about-story">
      <div class="container">
        <div class="about-story__card">
          <div class="about-story__image-wrap">
            <img
              src="/assets/contact-page-bg.jpg"
              alt="مبنى مؤسسة سهم القمة"
              class="about-story__img"
              loading="lazy"
            />
            <div class="about-story__image-overlay"></div>
            <div class="about-story__floating-badge">
              <span class="about-story__badge-title">الإتقان الهندسي</span>
              <span class="about-story__badge-sub">هدفنا في كل مشروع</span>
            </div>
          </div>

          <div class="about-story__text-wrap">
            <span class="about-story__subtitle">من نحن</span>
            <h2 class="about-story__title">
              نبني الثقة عبر <span class="highlight-red">حلول كهروميكانيكية</span> دقيقة ومستدامة
            </h2>
            <p class="about-story__paragraph">
              تأسست مؤسسة سهم القمة لتكون الشريك الاستراتيجي الرائد في قطاع المقاولات والهندسة الكهروميكانيكية (MEP) في المملكة العربية السعودية. ننطلق بخبرات هندسية متراكمة وفريق عمل مؤهل يجمع بين التخطيط الهندسي المتقن والتنفيذ الميداني الصارم وفق أعلى معايير الجودة العالمية وكود البناء السعودي.
            </p>
            <p class="about-story__paragraph">
              نقدم خدمات متكاملة تشمل التكييف المركزي، الإنارة والشبكات الكهربائية، مكافحة الحريق، غرف المضخات، ونمذجة معلومات البناء BIM، مع التركيز على كفاءة الطاقة واستدامة المنشآت.
            </p>

            <div class="about-story__action">
              <AppButton
                to="/contact"
                variant="primary"
                size="lg"
                class="about-story__btn"
                data-name="Button"
              >
                <span class="about-hero__btn-text" data-name="Book Now">ابدأ رحلتك معنا</span>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="about-stats">
      <div class="container">
        <div class="about-stats__grid">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="about-stat-item"
          >
            <span class="about-stat-item__value">{{ item.value }}</span>
            <span class="about-stat-item__label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission & Values (Pillars) -->
    <section class="about-pillars">
      <div class="container">
        <div class="about-section-header">
          <h2 class="about-section-title">
            ركائزنا <span class="highlight-red">الاستراتيجية</span>
          </h2>
          <p class="about-section-desc">
            المبادئ التي تقود كل قرار هندسي وميداني نتخذه في كل مشروع نتشرف بتنفيذه
          </p>
        </div>

        <div class="about-pillars__grid">
          <div
            v-for="(p, i) in pillars"
            :key="i"
            class="about-pillar-card"
          >
            <div class="about-pillar-card__icon" :style="{ backgroundColor: p.color }">
              <svg v-if="p.icon === 'compass'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <svg v-else-if="p.icon === 'target'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 class="about-pillar-card__title">{{ p.title }}</h3>
            <p class="about-pillar-card__desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Engineering Capabilities -->
    <section class="about-capabilities">
      <div class="container">
        <div class="about-section-header">
          <h2 class="about-section-title">
            لماذا يختار العملاء <span class="highlight-red">سهم القمة</span>؟
          </h2>
          <p class="about-section-desc">
            معايير احترافية تصنع الفارق في كل مرحلة من مراحل المشروع
          </p>
        </div>

        <div class="about-capabilities__grid">
          <div
            v-for="cap in capabilities"
            :key="cap.num"
            class="about-capability-card"
          >
            <span class="about-capability-card__num">{{ cap.num }}</span>
            <h3 class="about-capability-card__title">{{ cap.title }}</h3>
            <p class="about-capability-card__desc">{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="about-cta">
      <div class="container">
        <div class="about-cta__card">
          <h2 class="about-cta__title">هل لديك استفسار أو ترغب في مناقشة مشروعك؟</h2>
          <p class="about-cta__desc">فريقنا الهندسي المتخصص يرحب بالتواصل معك لتقديم أفضل الحلول والاستشارات الفنية المعتمدة.</p>
          <AppButton to="/contact" variant="primary" size="lg" class="about-cta__btn">
            تواصل معنا الآن
          </AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.highlight-red {
  color: var(--color-primary);
}

.about-view {
  background-color: #091627;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #FFFFFF;
  padding-bottom: 80px;
}

.about-glow {
  position: absolute;
  pointer-events: none;
  z-index: 0;
}

.section-glow {
  top: 90px;
  left: -180px;
  width: 520px;
  height: 520px;
  border-radius: 260px;
  background-color: #1A3E6F;
  opacity: 0.3;
  filter: blur(100px);
}

/* Hero Header */
.about-hero {
  position: relative;
  z-index: 1;
  padding-top: 170px;
  padding-bottom: 60px;
  text-align: center;
}

.about-hero__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
}

.about-hero__badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 30px;
  background: rgba(214, 33, 78, 0.12);
  color: #D6214E;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid rgba(214, 33, 78, 0.3);
}

.about-hero__title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.25;
  color: #FFFFFF;
  margin: 0;
}

.about-hero__desc {
  font-size: clamp(17px, 2.5vw, 22px);
  font-weight: 600;
  line-height: 1.6;
  color: #C8D5E1;
  margin: 0;
  max-width: 760px;
}

/* Company Story Card */
.about-story {
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
}

.about-story__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

@media (min-width: 1024px) {
  .about-story__card {
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    gap: 56px;
    padding: 56px;
  }
}

.about-story__image-wrap {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  height: 380px;
}

@media (min-width: 1024px) {
  .about-story__image-wrap {
    height: 480px;
  }
}

.about-story__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-story__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 22, 39, 0.1) 0%, rgba(9, 22, 39, 0.6) 100%);
}

.about-story__floating-badge {
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: rgba(9, 22, 39, 0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(214, 33, 78, 0.4);
  padding: 14px 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-story__badge-title {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
}

.about-story__badge-sub {
  color: #D6214E;
  font-size: 13px;
  font-weight: 600;
}

.about-story__text-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-story__subtitle {
  color: #D6214E;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.about-story__title {
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 800;
  line-height: 1.35;
  color: #FFFFFF;
  margin: 0;
}

.about-story__paragraph {
  font-size: 16px;
  line-height: 1.8;
  color: #B5C4D3;
  margin: 0;
}

.about-story__action {
  margin-top: 12px;
}

/* Stats Section */
.about-stats {
  position: relative;
  z-index: 1;
  margin-bottom: 90px;
}

.about-stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background: linear-gradient(135deg, rgba(20, 47, 83, 0.4) 0%, rgba(9, 22, 39, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px;
}

@media (min-width: 900px) {
  .about-stats__grid {
    grid-template-columns: repeat(4, 1fr);
    padding: 48px;
  }
}

.about-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.about-stat-item__value {
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 800;
  color: #D6214E;
  line-height: 1;
  font-family: var(--font-inter);
}

.about-stat-item__label {
  font-size: 14px;
  color: #C8D5E1;
  font-weight: 600;
}

/* Pillars Section */
.about-pillars {
  position: relative;
  z-index: 1;
  margin-bottom: 90px;
}

.about-section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about-section-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.about-section-desc {
  font-size: 16px;
  color: #A0B0C0;
  line-height: 1.6;
  margin: 0;
}

.about-pillars__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

@media (min-width: 768px) {
  .about-pillars__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.about-pillar-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all var(--transition-normal);
}

.about-pillar-card:hover {
  transform: translateY(-6px);
  border-color: rgba(214, 33, 78, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.about-pillar-card__icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}

.about-pillar-card__title {
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.about-pillar-card__desc {
  font-size: 15px;
  line-height: 1.7;
  color: #A0B0C0;
  margin: 0;
}

/* Capabilities Section */
.about-capabilities {
  position: relative;
  z-index: 1;
  margin-bottom: 90px;
}

.about-capabilities__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.about-capability-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--transition-fast);
}

.about-capability-card:hover {
  border-color: rgba(214, 33, 78, 0.4);
  transform: translateY(-4px);
}

.about-capability-card__num {
  font-size: 20px;
  font-weight: 800;
  color: #D6214E;
  font-family: var(--font-inter);
}

.about-capability-card__title {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.about-capability-card__desc {
  font-size: 14px;
  color: #A0B0C0;
  line-height: 1.6;
  margin: 0;
}

/* CTA Card */
.about-cta__card {
  background: linear-gradient(135deg, rgba(20, 47, 83, 0.7) 0%, rgba(9, 22, 39, 0.95) 100%);
  border: 1px solid rgba(214, 33, 78, 0.35);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.about-cta__title {
  font-size: clamp(24px, 3.5vw, 34px);
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.about-cta__desc {
  font-size: 16px;
  color: #C8D5E1;
  max-width: 640px;
  margin: 0;
}

.about-cta__btn {
  margin-top: 10px;
}
</style>
