<script setup>
import { ref, computed } from 'vue';
import AppButton from '../components/common/AppButton.vue';

const activeFilter = ref('all');
const activeProjectCategory = ref('all');

const services = [
  {
    id: 'electrical',
    number: '01',
    pillTitle: 'الخدمات الكهربائية',
    title: 'الخدمات الكهربائية',
    titleColor: '#142F53',
    accentColor: '#D6214E',
    watermarkColor: 'rgba(214, 33, 78, 0.2)',
    lineColor: '#E391A6',
    dotColor: '#FF315F',
    quote: 'تصميم وتركيب يضيء مشروعك بدقة',
    desc: 'أنظمة كهربائية متكاملة تشمل التمديدات والإنارة ولوحات التوزيع وأنظمة التيار الخفيف والأمان وفق أعلى المعايير الهندسية.',
    tools: ['CCTV', 'Fire Alarm', 'Generators', 'Grounding', 'Lighting'],
    btnText: 'اطلب خدمة كهربائية',
    btnVariant: 'primary',
    deliverablesCount: '05',
    minHeight: '790px',
    deliverables: [
      { id: '01', text: 'أنظمة الإنارة الداخلية والخارجية والذكية' },
      { id: '02', text: 'لوحات التوزيع الرئيسية والفرعية (MDB & DB)' },
      { id: '03', text: 'شبكات التيار الخفيف والمراقبة والإنذار (CCTV & Fire Alarm)' },
      { id: '04', text: 'أنظمة المولدات والتأريض والحماية من الصواعق' },
      { id: '05', text: 'فحص واختبار التمديدات وضمان السلامة الكهربائية' },
    ],
  },
  {
    id: 'engineering-consulting',
    number: '02',
    pillTitle: 'استشارات هندسية',
    title: 'استشارات هندسية',
    titleColor: '#D6214E',
    accentColor: '#1A3E6F',
    watermarkColor: 'rgba(26, 62, 111, 0.2)',
    lineColor: '#B8C3D2',
    dotColor: '#82E2D0',
    quote: 'قبل أن تبدأ التنفيذ، ابدأ بالخطة الصحيحة',
    desc: 'استشارات فنية وهندسية متخصصة لدراسة المخططات وتدقيق الكميات ومراجعة المواصفات لضمان الجدوى والجودة وتقليل الهدر.',
    tools: ['Commissioning', 'Construction', 'Design', 'Planning'],
    btnText: 'اطلب استشارة هندسية',
    btnVariant: 'dark',
    deliverablesCount: '05',
    minHeight: '790px',
    deliverables: [
      { id: '01', text: 'دراسة وتدقيق المخططات الهندسية ومراجعة المواصفات' },
      { id: '02', text: 'مطابقة التصاميم مع كود البناء السعودي ومعايير السلامة' },
      { id: '03', text: 'إعداد جداول الكميات (BOQ) ودراسات التكلفة التقديرية' },
      { id: '04', text: 'إدارة وتنسيق المشاريع الهندسية والإشراف الفني الميداني' },
      { id: '05', text: 'تقييم كفاءة الطاقة والحلول الهندسية البديلة' },
    ],
  },
  {
    id: 'mechanical',
    number: '03',
    pillTitle: 'الخدمات الميكانيكية',
    title: 'الخدمات الميكانيكية',
    titleColor: '#142F53',
    accentColor: '#D6214E',
    watermarkColor: 'rgba(214, 33, 78, 0.2)',
    lineColor: '#E391A6',
    dotColor: '#EAF44A',
    quote: 'أنظمة تتنفس كفاءة داخل أي منشأة',
    desc: 'حلول ميكانيكية متطورة تشمل أنظمة التكييف والتهوية ومكافحة الحريق والسباكة وتجهيز غرف المضخات والخزانات.',
    tools: ['Boiler Rooms', 'Pump Rooms', 'Plumbing', 'Fire Fighting', 'HVAC'],
    btnText: 'اطلب خدمة ميكانيكية',
    btnVariant: 'primary',
    deliverablesCount: '05',
    minHeight: '847px',
    deliverables: [
      { id: '01', text: 'أنظمة التكييف المركزي والتهوية الميكانيكية (HVAC)' },
      { id: '02', text: 'شبكات مكافحة الحريق والرش الآلي وأنظمة الإنقاذ' },
      { id: '03', text: 'شبكات التغذية بالمياه والصرف الصحي ومضخات الرفع' },
      { id: '04', text: 'تجهيز غرف المضخات المركزية وغرف الغلايات' },
      { id: '05', text: 'عزل الصوت والاهتزاز واختبارات ضغط الشبكات' },
    ],
  },
  {
    id: 'design-build',
    number: '04',
    pillTitle: 'التصميم والتنفيذ',
    title: 'التصميم والتنفيذ',
    titleColor: '#D6214E',
    accentColor: '#1A3E6F',
    watermarkColor: 'rgba(26, 62, 111, 0.2)',
    lineColor: '#B8C3D2',
    dotColor: '#FFFFFF',
    quote: 'جهة واحدة من التخطيط حتى التشغيل',
    desc: 'تنفيذ هندسي متكامل لكافة أعمال الإلكتروميكانيك MEP من المخططات الأولية حتى التشغيل والتسليم النهائي تحت إدارة موحدة.',
    tools: ['Commissioning', 'Design & Build', 'MEP'],
    btnText: 'اطلب تصميماً وتنفيذاً',
    btnVariant: 'dark',
    deliverablesCount: '05',
    minHeight: '790px',
    deliverables: [
      { id: '01', text: 'تصميم وتنفيذ متكامل لكافة تخصصات MEP' },
      { id: '02', text: 'تنسيق شامل بين الأنظمة الكهربائية والميكانيكية والمدنية' },
      { id: '03', text: 'إدارة سلاسل الإمداد وتوريد المواد المعتمدة عالمياً' },
      { id: '04', text: 'إشراف هندسي صارم على الجودة والجدول الزمني' },
      { id: '05', text: 'اختبارات التشغيل والتسليم النهائي مع وثائق الضمان' },
    ],
  },
  {
    id: 'bim',
    number: '05',
    pillTitle: 'تقنية BIM',
    title: 'تقنية نمذجة معلومات البناء (BIM)',
    titleColor: '#142F53',
    accentColor: '#D6214E',
    watermarkColor: 'rgba(214, 33, 78, 0.2)',
    lineColor: '#E391A6',
    dotColor: '#FF315F',
    quote: 'نمذجة تكشف المشكلات قبل وصولها للموقع',
    desc: 'بناء نماذج رقمية ثلاثية الأبعاد تكشف التعارضات بين التخصصات وتوفر مخططات تنفيذية دقيقة تقلل التكلفة وزمن الإنجاز.',
    tools: ['BIM', 'FDS', 'Revit'],
    btnText: 'اطلب نمذجة BIM',
    btnVariant: 'primary',
    deliverablesCount: '05',
    minHeight: '847px',
    deliverables: [
      { id: '01', text: 'نمذجة أنظمة MEP ثلاثية الأبعاد بدقة LOD عالية' },
      { id: '02', text: 'كشف وحل التعارضات الهندسية (Clash Detection)' },
      { id: '03', text: 'استخراج المخططات التنفيذية الدقيقة (Shop Drawings)' },
      { id: '04', text: 'حصر الكميات الدقيقة وربط الجداول الزمنية 4D/5D' },
      { id: '05', text: 'إعداد نماذج As-Built الرقمية لإدارة المرافق والتسليم' },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: 'مجمع تجاري وإداري متكامل',
    category: 'mep',
    categoryLabel: 'أنظمة MEP متكاملة',
    location: 'الرياض',
    desc: 'تنفيذ شامل لشبكات التكييف المركزي، مكافحة الحريق، إنارة الواجهات، وغرف المضخات المركزية.',
    image: '/assets/contact-page-bg.jpg',
  },
  {
    id: 2,
    title: 'برج الأعمال الإداري الحديث',
    category: 'electrical',
    categoryLabel: 'الخدمات الكهربائية',
    location: 'الرياض',
    desc: 'تركيب لوحات التوزيع MDB، شبكات المراقبة والتحكم الذكي، والمولدات الاحتياطية.',
    image: '/assets/hero-bg.jpg',
  },
  {
    id: 3,
    title: 'المركز الطبي التخصصي',
    category: 'mechanical',
    categoryLabel: 'الخدمات الميكانيكية',
    location: 'الرياض',
    desc: 'أنظمة تهوية وتكييف طبي نقي HVAC، شبكات الإنذار المبكر ومكافحة الحريق.',
    image: '/assets/contact-banner-bg.jpg',
  },
  {
    id: 4,
    title: 'مستودعات الإمداد والخدمات اللوجستية',
    category: 'mep',
    categoryLabel: 'أنظمة MEP متكاملة',
    location: 'الدمام',
    desc: 'شبكات الرش الآلي المعتمدة عالمياً وفق معايير NFPA وتمديدات الإنارة الصناعية.',
    image: '/assets/contact-page-bg.jpg',
  },
  {
    id: 5,
    title: 'المشروع الفندقي والضيافة',
    category: 'mechanical',
    categoryLabel: 'الخدمات الميكانيكية',
    location: 'جدة',
    desc: 'غرف المضخات المركزية، شبكات التغذية والصرف، وتكييف الأجنحة والمرافق العامة.',
    image: '/assets/hero-bg.jpg',
  },
  {
    id: 6,
    title: 'منشأة التصنيع والتقنية',
    category: 'electrical',
    categoryLabel: 'الخدمات الكهربائية',
    location: 'الرياض',
    desc: 'محطات التحويل، شبكات التأريض والحماية من الصواعق، وتمديدات التيار الخفيف.',
    image: '/assets/contact-banner-bg.jpg',
  },
];

const filteredProjects = computed(() => {
  if (activeProjectCategory.value === 'all') return projects;
  return projects.filter(p => p.category === activeProjectCategory.value);
});

const scrollToService = (id) => {
  activeFilter.value = id;
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="services-view">
    <!-- Hero Section Matching Figma Frame 107 & Capability Chips -->
    <section class="services-hero">
      <div class="services-hero__bg">
        <img src="/assets/hero-bg.jpg" alt="خلفية خدمات سهم القمة" class="services-hero__bg-img" />
        <div class="services-hero__overlay"></div>
      </div>

      <div class="container services-hero__container">
        <div class="services-hero__content">
          <h1 class="services-hero__title">
            <span class="services-hero__title-line"><span class="highlight-red">خدمات</span> متكاملة</span>
            <span class="services-hero__title-line">لنجاح أعمالك</span>
          </h1>
          <p class="services-hero__desc">
            خدماتنا تغطي كل ما تحتاجه شركتك من التحليل حتى الانتشار الرقمي </p>
        </div>
      </div>
    </section>

    <!-- Services Detailed List Matching Figma Node 303:649 -->
    <section class="services-list-section">
      <div v-for="s in services" :id="s.id" :key="s.id" class="service-item" :style="{ minHeight: s.minHeight }">
        <!-- Giant background watermark with exact 20% alpha matching Figma -->
        <div class="service-item__giant-num" :style="{ color: s.watermarkColor }" aria-hidden="true">
          {{ s.number }}
        </div>
        <div class="service-item__glow" :style="{ backgroundColor: s.accentColor }" aria-hidden="true"></div>

        <div class="container">
          <!-- Top Divider Bar with Big Number, Line, and Watermark -->
          <div class="service-item__top-bar">
            <!-- Number and Line on the right (RTL: number on far right, line stretching to left) -->
            <span class="service-item__top-num" :style="{ color: s.accentColor }">
              {{ s.number }}
            </span>
            <div class="service-item__top-line" :style="{ backgroundColor: s.lineColor }"></div>
          </div>

          <div class="service-item__grid">
            <!-- Right Column in RTL: Description, Tools & Action Button -->
            <div class="service-item__info">
              <h2 class="service-item__title" :style="{ color: s.titleColor }">
                {{ s.title }}
              </h2>

              <div class="service-item__quote-wrap" :style="{ borderRightColor: s.accentColor }">
                <p class="service-item__quote" :style="{ color: s.accentColor }">
                  {{ s.quote }}
                </p>
              </div>

              <p class="service-item__desc">{{ s.desc }}</p>

              <!-- Tools used -->
              <div class="service-item__tools-wrap">
                <h4 class="service-item__tools-title">الأدوات المستخدمة</h4>
                <div class="service-item__tools-list">
                  <span v-for="tool in s.tools" :key="tool" class="tool-chip" :style="{ borderColor: s.accentColor }">
                    {{ tool }}
                  </span>
                </div>
              </div>

              <!-- Action Button -->
              <div class="service-item__action">
                <AppButton :to="{ path: '/contact', query: { service: s.id } }" :variant="s.btnVariant"
                  class="service-item__btn" :style="{ backgroundColor: s.accentColor + ' !important' }">
                  {{ s.btnText }}
                </AppButton>
              </div>
            </div>

            <!-- Left Column in RTL: Deliverables (ماذا نقدم) -->
            <div class="service-item__deliverables">
              <div class="deliverables-header">
                <span class="deliverables-header__title">ماذا نقدم</span>
                <span class="deliverables-header__line" :style="{ backgroundColor: s.lineColor }"></span>
                <span class="deliverables-header__count">{{ s.deliverablesCount }}</span>
              </div>

              <div class="deliverables-grid">
                <div v-for="(deliv, idx) in s.deliverables" :key="deliv.id" class="deliverable-chip"
                  :class="{ 'deliverable-chip--full': s.deliverables.length === 5 && idx === 4 }"
                  :style="{ borderColor: s.accentColor }">
                  <span class="deliverable-chip__text">{{ deliv.text }}</span>
                  <span class="deliverable-chip__num" :style="{ color: s.accentColor }">
                    {{ deliv.id }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section Matching Figma Desktop - 16 -->
    <section class="projects-section" id="projects" data-name="Desktop - 16">
      <div class="container">
        <div class="projects-header">
          <div class="projects-header__badge">أعمالنا ومشاريعنا</div>
          <h2 class="projects-header__title">
            <span class="highlight-red">نماذج</span> من أعمالنا الرائدة
          </h2>
          <p class="projects-header__desc">
            سجل حافل بالمشاريع الكهروميكانيكية المتكاملة التي نفذناها بدقة والتزام بأعلى معايير السلامة والجودة في
            المملكة
          </p>

          <!-- Category filter buttons -->
          <div class="projects-filters">
            <button class="projects-filter-btn"
              :class="{ 'projects-filter-btn--active': activeProjectCategory === 'all' }"
              @click="activeProjectCategory = 'all'">
              كافة المشاريع
            </button>
            <button class="projects-filter-btn"
              :class="{ 'projects-filter-btn--active': activeProjectCategory === 'mep' }"
              @click="activeProjectCategory = 'mep'">
              أنظمة متكاملة MEP
            </button>
            <button class="projects-filter-btn"
              :class="{ 'projects-filter-btn--active': activeProjectCategory === 'electrical' }"
              @click="activeProjectCategory = 'electrical'">
              الخدمات الكهربائية
            </button>
            <button class="projects-filter-btn"
              :class="{ 'projects-filter-btn--active': activeProjectCategory === 'mechanical' }"
              @click="activeProjectCategory = 'mechanical'">
              الخدمات الميكانيكية
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <article v-for="project in filteredProjects" :key="project.id" class="project-card">
            <div class="project-card__image-wrap">
              <img :src="project.image" :alt="project.title" class="project-card__img" loading="lazy" />
              <div class="project-card__overlay"></div>
              <span class="project-card__tag">{{ project.categoryLabel }}</span>
              <span class="project-card__location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {{ project.location }}
              </span>
            </div>
            <div class="project-card__content">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__desc">{{ project.desc }}</p>
              <div class="project-card__footer">
                <RouterLink to="/contact" class="project-card__link">
                  <span>طلب مشروع مماثل</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </article>
        </div>

        <!-- CTA Banner -->
        <div class="projects-cta-box">
          <div class="projects-cta-box__content">
            <h3 class="projects-cta-box__title">هل تخطط لمشروع جديد أو ترغب في استشارة هندسية متخصصة؟</h3>
            <p class="projects-cta-box__desc">فريقنا الهندسي المتكامل جاهز لدراسة متطلبات مشروعك وتقديم أفضل الحلول
              الفنية والتنفيذية.</p>
          </div>
          <AppButton to="/contact" variant="primary" size="lg" class="projects-cta-box__btn">
            تواصل معنا الآن
          </AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-view {
  position: relative;
  overflow-x: hidden;
  width: 100%;
}

.highlight-red {
  color: var(--color-primary);
}

/* Services Hero Matching Figma Frame 107 & Capability Chips */
.services-hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  max-height: 960px;
  display: flex;
  align-items: flex-end;
  padding-top: 130px;
  padding-bottom: 68px;
  overflow: hidden;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .services-hero {
    height: auto;
    min-height: 100vh;
    padding-bottom: 48px;
  }
}

.services-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.services-hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.services-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
      rgba(9, 22, 39, 0.72) 0%,
      rgba(9, 22, 39, 0.5) 40%,
      rgba(9, 22, 39, 0.88) 100%);
}

.services-hero__container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-start; */
  text-align: center;
  width: 100%;
  max-width: 1248px;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
}

.services-hero__content {
  /* max-width: 636px; */
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}

.services-hero__title {
  font-size: 44px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 24px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

@media (min-width: 768px) {
  .services-hero__title {
    font-size: 58px;
    line-height: 1.18;
  }
}

@media (min-width: 1024px) {
  .services-hero__title {
    font-size: 72px;
    line-height: 82px;
  }
}

.services-hero__title-line {
  display: block;
}

.highlight-red {
  color: #D6214E;
}

.services-hero__desc {
  font-size: 18px;
  color: #C7C7C7;
  font-weight: 700;
  line-height: 1.6;
  /* max-width: 636px; */
}

@media (min-width: 768px) {
  .services-hero__desc {
    font-size: 22px;
    line-height: 1.6;
  }
}

@media (min-width: 1024px) {
  .services-hero__desc {
    font-size: 28px;
    line-height: 42px;
  }
}

/* 5 Services Floating Glass Pills Matching Figma Frame 97 */
.services-pills {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1248px;
  max-width: 100%;
  gap: 12px;
  flex-wrap: nowrap;
  margin-top: 24px;
  margin-bottom: 8px;
  background: transparent;
  border: none;
  padding: 0;
  box-shadow: none;
}

@media (max-width: 1247px) {
  .services-hero__container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .services-pills {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
}

@media (max-width: 767px) {
  .services-hero {
    min-height: auto;
    padding-top: 120px;
    padding-bottom: 36px;
  }

  .services-hero__container {
    min-height: auto;
    gap: 20px;
  }

  .services-pills {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 10px;
    overflow-x: visible;
    flex-wrap: nowrap;
    margin-top: 24px;
    padding-bottom: 0;
  }

  .services-pill {
    width: 100%;
    justify-content: flex-start;
    padding: 12px 18px;
    border-radius: 14px;
    box-sizing: border-box;
  }

  .services-pill__title {
    font-size: 13px;
    white-space: normal;
    text-align: right;
  }
}

.services-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 35px;
  background: rgba(5, 10, 18, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 26.5px;
  box-shadow: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  direction: rtl;
  user-select: none;
  flex-shrink: 0;
}

.services-pill:hover {
  background: rgba(22, 38, 62, 0.92);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
  box-shadow: none;
}

.services-pill--active {
  background: rgba(26, 45, 75, 0.95);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: none;
}

.services-pill__dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  flex-shrink: 0;
  box-shadow: none;
}

.services-pill__num {
  font-family: var(--font-inter);
  font-size: 10px;
  font-weight: 700;
  color: #9EABBA;
  line-height: 1;
}

.services-pill__title {
  font-size: 12px;
  font-weight: 700;
  color: #FFFFFF;
  white-space: nowrap;
  line-height: 1.2;
}

/* Detailed List matching Figma Node 303:649 & 303:650 */
.services-list-section {
  padding: 0;
  background-color: #FEFAF2;
  position: relative;
  overflow: hidden;
}

.services-list-section .container {
  max-width: 1248px;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 1247px) {
  .services-list-section .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.service-item {
  position: relative;
  width: 100%;
  padding: 40px 0 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

@media (max-width: 767px) {
  .service-item {
    padding: 36px 0 50px;
    min-height: auto !important;
  }
}

/* Top Divider Bar */
.service-item__top-bar {
  display: flex;
  align-items: center;
  gap: 39px;
  position: relative;
  margin-bottom: 24px;
  direction: rtl;
  width: 100%;
}

@media (max-width: 767px) {
  .service-item__top-bar {
    gap: 16px;
    margin-bottom: 20px;
  }
}

.service-item__top-num {
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  font-family: var(--font-family);
  flex-shrink: 0;
  user-select: none;
}

@media (max-width: 767px) {
  .service-item__top-num {
    font-size: 56px;
    line-height: 1;
  }
}

@media (min-width: 768px) {
  .service-item__top-num {
    font-size: 110px;
    line-height: 1.2;
  }
}

@media (min-width: 1200px) {
  .service-item__top-num {
    font-size: 120px;
    line-height: 180px;
  }
}

.service-item__top-line {
  flex: 1;
  height: 1.5px;
  border-radius: 1px;
}

@media (min-width: 1200px) {
  .service-item__top-line {
    margin-left: 151px;
  }
}

/* Giant background watermark & glow at the very left of the screen */
.service-item__giant-num {
  position: absolute;
  top: 174px;
  left: -74px;
  font-size: 250px;
  font-weight: 700;
  line-height: 300px;
  letter-spacing: -0.05em;
  opacity: 1;
  user-select: none;
  pointer-events: none;
  font-family: var(--font-family);
  z-index: 0;
}

@media (max-width: 767px) {
  .service-item__giant-num {
    font-size: 110px;
    line-height: 130px;
    left: -20px;
    top: 10px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .service-item__giant-num {
    font-size: 200px;
    line-height: 240px;
    left: -55px;
    top: 50px;
  }
}

.service-item__glow {
  position: absolute;
  top: 150px;
  left: 200px;
  width: 156px;
  height: 156px;
  border-radius: 50%;
  filter: blur(200px);
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;
}

/* 2-Column Grid Side-by-Side */
.service-item__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  direction: rtl;
}

@media (min-width: 768px) {
  .service-item__grid {
    grid-template-columns: 1.15fr 1fr;
    gap: 36px;
    align-items: start;
  }
}

@media (min-width: 1200px) {
  .service-item__grid {
    grid-template-columns: 658px 486px;
    justify-content: space-between;
    gap: 104px;
  }
}

/* Right Column (Info) */
.service-item__info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  text-align: right;
  width: 100%;
}

.service-item__title {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}

@media (min-width: 768px) {
  .service-item__title {
    font-size: 44px;
  }
}

@media (min-width: 1200px) {
  .service-item__title {
    font-size: 56px;
    line-height: 1.5;
  }
}

.service-item__quote-wrap {
  border-right: 2px solid;
  padding: 10px 14px 10px 0;
  margin: 0;
}

.service-item__quote {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

@media (min-width: 768px) {
  .service-item__quote {
    font-size: 24px;
  }
}

@media (min-width: 1200px) {
  .service-item__quote {
    font-size: 28px;
    line-height: 42px;
  }
}

.service-item__desc {
  font-size: 16px;
  color: #757575;
  line-height: 1.7;
  font-weight: 500;
  max-width: 455px;
  margin: 0;
}

@media (min-width: 768px) {
  .service-item__desc {
    font-size: 18px;
    line-height: 27px;
  }
}

/* Tools */
.service-item__tools-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.service-item__tools-title {
  font-size: 18px;
  font-weight: 700;
  color: #616161;
  margin: 0;
}

.service-item__tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  direction: ltr;
  justify-content: flex-end;
  width: 100%;
}

.tool-chip {
  padding: 12px 16px;
  background-color: #FFF8F2;
  border: 1px solid;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #393C40;
  font-family: var(--font-family);
  text-align: left;
  transition: all var(--transition-fast);
}

.tool-chip:hover {
  transform: translateY(-2px);
}

.service-item__action {
  margin-top: 0;
  width: 100%;
}

.service-item__btn {
  width: 335px !important;
  max-width: 100%;
  height: 56px !important;
  border-radius: 10px !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  box-shadow: none !important;
}

@media (max-width: 767px) {
  .service-item__btn {
    width: 100% !important;
    max-width: 100% !important;
  }
}

/* Left Column (Deliverables - ماذا نقدم) */
.service-item__deliverables {
  display: flex;
  flex-direction: column;
  gap: 54px;
  width: 100%;
}

@media (min-width: 1200px) {
  .service-item__deliverables {
    width: 486px;
    margin-top: 22px;
  }
}

.deliverables-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  direction: rtl;
  width: 100%;
  margin-bottom: 0;
}

.deliverables-header__title {
  font-size: 18px;
  font-weight: 700;
  color: #696969;
  white-space: nowrap;
  font-family: var(--font-family);
}

.deliverables-header__line {
  flex: 1;
  height: 1px;
  border-radius: 1px;
}

.deliverables-header__count {
  font-size: 20px;
  font-weight: 700;
  color: #696969;
  font-family: var(--font-family);
}

.deliverables-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
}

@media (min-width: 640px) {
  .deliverables-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 16px;
  }
}

@media (min-width: 1200px) {
  .deliverables-grid {
    width: 486px;
    grid-template-columns: repeat(2, 230px);
    gap: 20px 26px;
  }
}

.deliverable-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 52px;
  padding: 14px 24px;
  background-color: #FFF8F2;
  border: 1px solid;
  border-radius: 20px;
  direction: rtl;
  transition: all var(--transition-fast);
  width: 100%;
}

.deliverable-chip--full {
  grid-column: 1 / -1;
  width: 100%;
}

.deliverable-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.deliverable-chip__text {
  font-size: 12px;
  font-weight: 700;
  color: #6D6F73;
  font-family: var(--font-family);
  line-height: 14.4px;
}

.deliverable-chip__num {
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font-inter);
  line-height: 12.1px;
  flex-shrink: 0;
}

/* Projects Showcase Section Matching Figma Desktop - 16 */
.projects-section {
  background-color: #091627;
  padding: 100px 0 120px;
  position: relative;
  overflow: hidden;
  color: #FFFFFF;
}

.projects-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.projects-header__badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 30px;
  background: rgba(214, 33, 78, 0.12);
  color: #D6214E;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid rgba(214, 33, 78, 0.3);
}

.projects-header__title {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 800;
  color: #FFFFFF;
  margin: 0;
}

.projects-header__desc {
  font-size: 17px;
  color: #C8D5E1;
  line-height: 1.7;
  margin: 0;
}

.projects-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 16px;
}

.projects-filter-btn {
  padding: 10px 22px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #E0E6ED;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.projects-filter-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #FFFFFF;
}

.projects-filter-btn--active {
  background: #D6214E;
  border-color: #D6214E;
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(214, 33, 78, 0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  margin-bottom: 70px;
}

.project-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(214, 33, 78, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
}

.project-card__image-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-card__img {
  transform: scale(1.05);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 22, 39, 0.1) 0%, rgba(9, 22, 39, 0.8) 100%);
}

.project-card__tag {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(9, 22, 39, 0.85);
  backdrop-filter: blur(8px);
  color: #D6214E;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(214, 33, 78, 0.3);
}

.project-card__location {
  position: absolute;
  bottom: 12px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #E8ECF1;
  font-size: 13px;
  font-weight: 500;
  z-index: 2;
}

.project-card__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
}

.project-card__title {
  font-size: 19px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4;
}

.project-card__desc {
  font-size: 14px;
  color: #A0B0C0;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.project-card__footer {
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #D6214E;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.project-card__link:hover {
  gap: 12px;
  color: #FF4772;
}

.projects-cta-box {
  background: linear-gradient(135deg, rgba(20, 47, 83, 0.6) 0%, rgba(9, 22, 39, 0.95) 100%);
  border: 1px solid rgba(214, 33, 78, 0.3);
  border-radius: 20px;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  text-align: center;
}

@media (min-width: 900px) {
  .projects-cta-box {
    flex-direction: row;
    text-align: right;
  }
}

.projects-cta-box__title {
  font-size: 22px;
  font-weight: 800;
  color: #FFFFFF;
  margin: 0 0 8px;
}

.projects-cta-box__desc {
  font-size: 15px;
  color: #C8D5E1;
  margin: 0;
}

.projects-cta-box__btn {
  flex-shrink: 0;
}
</style>
