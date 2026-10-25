<script setup>
import { RouterLink } from 'vue-router';
import AppButton from '../components/common/AppButton.vue';

// 4 Feature items in floating bar matching Figma Frame 54
const features = [
  {
    title: 'أنظمة التكييف والتهوية الميكانيكية',
    icon: 'cogs',
  },
  {
    title: 'مكافحة الحريق والإنذار المبكر',
    icon: 'shield',
  },
  {
    title: 'شبكات الكهرباء والطاقة والإنارة',
    icon: 'target',
  },
  {
    title: 'كاميرات المراقبة والتحكم بالدخول',
    icon: 'cctv',
  },
];

// 4 Steps toward the top matching Figma Desktop - 5
const steps = [
  {
    title: 'التخطيط والدراسة',
    desc: 'مراجعة مخططات المشروع ودراسة التكاليف والجدوى الفنية لاختيار أفضل الحلول الاقتصادية ووضع جدول زمني للمشروع.',
    icon: 'bar-chart',
  },
  {
    title: 'التصميم والنمذجة',
    desc: 'إعداد كافة المخططات الهندسية ونمذجتها بواسطة طواقم هندسية محترفة لتفادي أي تعارض مسبق والتنسيق الكامل لأنظمة MEP.',
    icon: 'trending-up',
  },
  {
    title: 'التوريد والتركيب',
    desc: 'فحص واختبار كافة الخطوط والمنافذ وتركيبها وضبطها بالتوافق مع خطط الصيانة المستدامة والمعايير الفنية والأنظمة العالمية.',
    icon: 'palette',
  },
  {
    title: 'الاختبار والتشغيل',
    desc: 'التأكد من خلو المنظومة من أي تعارض وتنسيق الأعمال هندسياً ومطابقتها لمخططات As-Built وتسليم تقارير التشغيل المعتمدة.',
    icon: 'globe',
  },
];

// 6 Featured Projects matching Figma Frame 126
const featuredProjects = [
  {
    id: 1,
    title: 'مشروع فيلا سكنية خاصة',
    category: 'فيلا خاصة',
    location: 'الرياض',
    desc: 'تصميم وتنفيذ أنظمة التكييف والإنارة الذكية وشبكات المياه والصرف الصحي وفق أعلى المعايير.',
    image: '/assets/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'مجمع مدارس تعليمي متكامل',
    category: 'منشآت تعليمية',
    location: 'الرياض',
    desc: 'شبكات متطورة للإنذار ومكافحة الحريق وأنظمة تهوية وتكييف ميكانيكي متوافقة مع الكود السعودي.',
    image: '/assets/contact-page-bg.jpg',
  },
  {
    id: 3,
    title: 'استراحة ومنتجع سياحي فاخر',
    category: 'منتجعات واستراحات',
    location: 'الرياض',
    desc: 'أنظمة طاقة وتوزيع كهروميكانيكية متكاملة لبيئة سياحية وترفيهية راقية ومستدامة.',
    image: '/assets/contact-banner-bg.jpg',
  },
  {
    id: 4,
    title: 'مستودعات وهناجر لوجستية',
    category: 'مستودعات لوجستية',
    location: 'الرياض',
    desc: 'شبكات إطفاء متطورة ورشاشات مائية تلقائية وأنظمة إنارة صناعية عالية الكفاءة.',
    image: '/assets/hero-bg.jpg',
  },
  {
    id: 5,
    title: 'مركز تجاري ومكاتب إدارية',
    category: 'مباني إدارية وتجارية',
    location: 'الرياض',
    desc: 'لوحات التوزيع الرئيسية MDB وأنظمة التكييف المركزي وتنسيق MEP بنمذجة BIM.',
    image: '/assets/contact-page-bg.jpg',
  },
  {
    id: 6,
    title: 'معرض تجاري وصالة عرض',
    category: 'صالات عرض تجارية',
    location: 'الرياض',
    desc: 'تنسيق كامل بين أنظمة الإنارة المعمارية والتكييف المخفي وشبكات الأمان والسلامة.',
    image: '/assets/contact-banner-bg.jpg',
  },
];

// Stats Data matching Desktop - 11
const statsData = [
  { value: '25,000+', label: 'غرفة فندقية' },
  { value: '6,000+', label: 'نقطة توزيع سكنية' },
  { value: '4,000+', label: 'متر مربع مساحة مباني' },
  { value: '220+', label: 'فيلا ووحدة سكنية' },
  { value: '90%', label: 'نسبة رضا وثقة العملاء' },
  { value: '20+', label: 'سنة خبرة وتطوير' },
  { value: '200+', label: 'مشروع تجاري وإداري' },
  { value: '1,200+', label: 'مخطط هندسي معتمد' },
];

// Why Us Items matching Figma Frame 60
const whyUsItems = [
  {
    number: '01',
    title: 'خبرة عريقة متوارثة منذ 1989',
    desc: 'أكثر من ثلاثة عقود من العمل المستمر في كبرى مشاريع البنية التحتية والسكك والصحة في الخليج.',
  },
  {
    number: '02',
    title: 'كادر هندسي معتمد ومؤهل',
    desc: 'فريق من خيرة الكفاءات الهندسية والاستشارية المعتمدة لضمان جودة التصاميم والتنفيذ.',
  },
  {
    number: '03',
    title: 'تقنيات وتنسيق متطور بنظام BIM',
    desc: 'فريق عمل BIM لتكامل أعمال الميكانيكا، الكهرباء، السباكة ومكافحة الحريق لمنع أي تعارض ميداني.',
  },
  {
    number: '04',
    title: 'ضمانات وجودة تسليم معتمدة',
    desc: 'التزام صارم بالجداول الزمنية والتسليم بمخططات As-Built وضمانات ما بعد التشغيل.',
  },
];

// Partner Logos matching Figma Desktop - 11
const partners = [
  'EMAAR', 'ORASCOM', 'AL RAJHI', 'HILTON', 'VODAFONE',
  'TRAVCO', 'ECC', 'FORSAN', 'NAKHEEL', 'MANARAT',
  'MAKANI', 'SAUDIBIO', 'RIMAYA', 'SLEEPNICE', 'SICAST'
];

// Contact points matching Figma Desktop - 7 & Contact section
const contactCards = [
  {
    icon: 'building',
    title: 'زورونا',
    subtitle: 'يسعدنا استقبالكم في مقرنا بالرياض',
    detail: 'المملكة العربية السعودية، الرياض 11415، التخصصي، ص.ب 3078',
  },
  {
    icon: 'phone',
    title: 'اتصلوا بنا',
    subtitle: 'فريقنا متاح للرد على استفساراتكم',
    detail: '+966 56 890 9193',
    link: 'tel:+966568909193',
  },
  {
    icon: 'mail',
    title: 'راسلونا',
    subtitle: 'أرسلوا لنا وسنرد خلال 24 ساعة',
    detail: 'mahmoud@k-fawziat.net',
    link: 'mailto:mahmoud@k-fawziat.net',
  },
];

// 5 Interactive Service Hexagons Matching Figma Desktop - 9 (Node 14:1119)
const serviceHexagonsTop = [
  {
    id: 'drafting',
    fullTitle: 'التصميم والنمذجة وإعداد المخططات الهندسية',
    lines: ['التصميم والنمذجة', 'الهندسية'],
    img: `${import.meta.env.BASE_URL}assets/hex-drafting.png`,
    link: '/services#engineering-consulting',
    floatDelay: '0s',
  },
  {
    id: 'mechanical',
    fullTitle: 'الأنظمة الميكانيكية والتكييف والتهوية ومكافحة الحريق',
    lines: ['الأنظمة الميكانيكية', 'وغرف المعدات'],
    img: `${import.meta.env.BASE_URL}assets/hex-mechanical.png`,
    link: '/services#mechanical',
    floatDelay: '-2.2s',
  },
  {
    id: 'electrical',
    fullTitle: 'شبكات الكهرباء والطاقة والإنارة والتحكم',
    lines: ['التمديدات والشبكات', 'الكهربائية'],
    img: `${import.meta.env.BASE_URL}assets/hex-electrical.png`,
    link: '/services#electrical',
    floatDelay: '-4.4s',
  },
];

const serviceHexagonsBottom = [
  {
    id: 'supervision',
    fullTitle: 'الإشراف الهندسي الميداني وإدارة ومتابعة المشاريع',
    lines: ['الإشراف الهندسي', 'وإدارة المشاريع'],
    img: `${import.meta.env.BASE_URL}assets/hex-supervision.png`,
    link: '/services#engineering-consulting',
    floatDelay: '-1.2s',
  },
  {
    id: 'structural-mep',
    fullTitle: 'التنسيق الإنشائي والكهروميكانيكي المتكامل بنظام BIM',
    lines: ['التنسيق الإنشائي', 'والكهروميكانيكي MEP'],
    img: `${import.meta.env.BASE_URL}assets/hex-structural.png`,
    link: '/services#design-build',
    floatDelay: '-3.4s',
  },
];
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-section__bg">
        <img src="/assets/hero-bg.jpg" alt="خلفية مدينة الرياض" class="hero-section__bg-img" />
        <div class="hero-section__overlay"></div>
      </div>

      <div class="container hero-section__container">
        <div class="hero-section__content">
          <h1 class="hero-section__title">
            <span class="hero-title-block">حيث تلتقي</span>
            <span class="hero-title-block"><span class="highlight-red">الأمان</span> بالإتقان الهندسي</span>
          </h1>
          <p class="hero-section__subtitle">
            استشارات وتصميم وتنفيذ لأنظمة الميكانيكا والكهرباء والسباكة ومكافحة الحريق والأمن بخبرة تمتد لأكثر من ثلاثة عقود في تنفيذ أكبر مشاريع البنية التحتية والمنشآت العامة والخاصة في المملكة.
          </p>
          <div class="hero-section__actions">
            <RouterLink to="/contact" custom v-slot="{ navigate }">
              <button @click="navigate" class="hero-btn hero-btn--primary">
                احجز الآن
              </button>
            </RouterLink>
            <RouterLink to="/services" custom v-slot="{ navigate }">
              <button @click="navigate" class="hero-btn hero-btn--outline">
                خدماتنا
              </button>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Floating Feature Bar -->
      <div class="hero-features">
        <div class="container">
          <div class="hero-features__bar">
            <div
              v-for="(item, index) in features"
              :key="index"
              class="hero-features__item"
            >
              <div class="hero-features__icon-wrap">
                <svg v-if="item.icon === 'target'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <svg v-else-if="item.icon === 'shield'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <svg v-else-if="item.icon === 'cogs'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <p class="hero-features__text">{{ item.title }}</p>
              <div v-if="index < features.length - 1" class="hero-features__divider" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview Section (Hexagons) -->
    <section class="services-overview">
      <div class="container services-overview__container">
        <div class="services-overview__header">
          <h2 class="section-title">
            <span class="highlight-red">خدمات</span> متكاملة لنجاح وتأمين مشروعك
          </h2>
          <p class="section-subtitle">
            خمس ركائز هندسية تغطي مشروعك الإنشائي من الفكرة المبدئية والتصميم حتى الاختبار والتسليم التشغيلي.
          </p>
        </div>

        <div class="services-overview__visual" aria-label="خدمات سهم القمة المتكاملة">
          <div class="services-hex-cluster">
            <!-- Top Row (3 Hexagons in RTL) -->
            <div class="services-hex-row services-hex-row--top">
              <div
                v-for="hex in serviceHexagonsTop"
                :key="hex.id"
                class="services-hex-wrapper"
                :style="{ animationDelay: hex.floatDelay }"
              >
                <RouterLink
                  :to="hex.link"
                  class="services-hex-card"
                  :aria-label="hex.fullTitle"
                >
                  <img
                    :src="hex.img"
                    :alt="hex.fullTitle"
                    class="services-hex-card__img"
                    loading="lazy"
                  />
                  <div class="services-hex-card__overlay" aria-hidden="true">
                    <span class="services-hex-card__text">
                      <span
                        v-for="(line, lineIdx) in hex.lines"
                        :key="lineIdx"
                        class="services-hex-card__text-line"
                      >
                        {{ line }}
                      </span>
                    </span>
                  </div>
                </RouterLink>
              </div>
            </div>

            <!-- Bottom Row (2 Hexagons in RTL) -->
            <div class="services-hex-row services-hex-row--bottom">
              <div
                v-for="hex in serviceHexagonsBottom"
                :key="hex.id"
                class="services-hex-wrapper"
                :style="{ animationDelay: hex.floatDelay }"
              >
                <RouterLink
                  :to="hex.link"
                  class="services-hex-card"
                  :aria-label="hex.fullTitle"
                >
                  <img
                    :src="hex.img"
                    :alt="hex.fullTitle"
                    class="services-hex-card__img"
                    loading="lazy"
                  />
                  <div class="services-hex-card__overlay" aria-hidden="true">
                    <span class="services-hex-card__text">
                      <span
                        v-for="(line, lineIdx) in hex.lines"
                        :key="lineIdx"
                        class="services-hex-card__text-line"
                      >
                        {{ line }}
                      </span>
                    </span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section Matching Figma Frame 126 -->
    <section class="home-projects-section">
      <div class="container">
        <div class="home-projects-header">
          <div>
            <span class="home-projects-badge">أعمالنا ومشاريعنا</span>
            <h2 class="home-projects-title">
              <span class="highlight-red">نماذج</span> من أعمالنا الرائدة
            </h2>
            <p class="home-projects-subtitle">مخططات أعمال متنوعة تضم كبرى المدارس والمستشفيات والاستراحات السياحية في السعودية ودبي</p>
          </div>
          <RouterLink to="/services#projects" class="home-projects-all-link">
            <span>مشاهدة كافة المشاريع</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </RouterLink>
        </div>

        <div class="home-projects-grid">
          <article
            v-for="project in featuredProjects"
            :key="project.id"
            class="home-project-card"
          >
            <div class="home-project-card__img-wrap">
              <img :src="project.image" :alt="project.title" class="home-project-card__img" loading="lazy" />
              <div class="home-project-card__overlay"></div>
              <span class="home-project-card__tag">{{ project.category }}</span>
              <span class="home-project-card__loc">{{ project.location }}</span>
            </div>
            <div class="home-project-card__body">
              <h3 class="home-project-card__title">{{ project.title }}</h3>
              <p class="home-project-card__desc">{{ project.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 4 Steps Section (Desktop - 5) -->
    <section class="steps-section">
      <div class="container steps-section__container">
        <!-- Right Column: Info & Action -->
        <div class="steps-section__intro">
          <h2 class="steps-section__title">
            <span class="highlight-red">أربع</span> خطوات نحو الإتقان
          </h2>
          <p class="steps-section__desc">
            حلول استشارية واستثمارية متكاملة في قلب المجال الـ MEP
          </p>
          <div class="steps-section__action">
            <RouterLink to="/process" custom v-slot="{ navigate }">
              <button @click="navigate" class="steps-btn">
                احجز استشارتك الآن
              </button>
            </RouterLink>
          </div>
        </div>

        <!-- Left Column: 4 Cards -->
        <div class="steps-section__cards">
          <div
            v-for="(step, idx) in steps"
            :key="idx"
            class="step-card"
          >
            <div class="step-card__icon">
              <svg v-if="idx === 0" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <svg v-else-if="idx === 1" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <svg v-else-if="idx === 2" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </svg>
              <svg v-else width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story Teaser (Desktop - 10 About Section) -->
    <section class="home-about-teaser">
      <div class="container">
        <div class="home-about-card">
          <div class="home-about-card__text">
            <h2 class="home-about-card__title">
              مؤسسة سهم القمة
            </h2>
            <p class="home-about-card__desc">
              مؤسسة سهم القمة لأنظمة الأمن والسلامة هي إحدى رواد الاستشارات والتنفيذ الهندسي لأنظمة MEP ومكافحة الحريق في المملكة، على مدار أكثر من 20 عاماً تميزنا بتقديم خدمات كهروميكانيكية استثنائية وإشراف ميداني دقيق يضمن سلامة المنشآت وكفاءة تشغيلها.
            </p>
            <div class="home-about-subsections">
              <div class="home-about-subsection">
                <h3 class="home-about-sub-title">رؤيتنا الهندسية</h3>
                <p class="home-about-sub-desc">أن نكون منارة التميز الهندسي الأولى في تقديم الاستشارات والخدمات الهندسية المتكاملة لكافة أعمال الـ MEP في المملكة.</p>
              </div>
              <div class="home-about-subsection">
                <h3 class="home-about-sub-title">رسالتنا</h3>
                <p class="home-about-sub-desc">تمكين شركائنا بحلول هندسية موثوقة تحد من المخاطر وتقلل التكاليف التشغيلية مع مراعاة بيئات السلامة والأمان.</p>
              </div>
            </div>
            <div class="home-about-card__action">
              <RouterLink to="/about" class="home-about-card__btn">
                <span>اكتشف المزيد عنا</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </RouterLink>
            </div>
          </div>
          <div class="home-about-card__media">
            <img src="/assets/contact-page-bg.jpg" alt="مقر مؤسسة سهم القمة" class="home-about-card__img" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section Matching Figma Desktop - 11 -->
    <section class="home-stats-section">
      <div class="container">
        <div class="home-stats-header">
          <h2 class="home-stats-title">أرقام تتحدث عن خبرتنا</h2>
          <p class="home-stats-subtitle">
            أكثر من ثلاثة عقود من العمل المستمر في كبرى مشاريع البنية التحتية والسكك والخدمات الصحية والمشاريع السكنية والتجارية.
          </p>
        </div>
        <div class="home-stats-grid">
          <div v-for="(stat, sIdx) in statsData" :key="sIdx" class="home-stat-card">
            <span class="home-stat-val">{{ stat.value }}</span>
            <span class="home-stat-lbl">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section Matching Figma Frame 60 -->
    <section class="home-why-section">
      <div class="container">
        <div class="home-why-header">
          <h2 class="home-why-title">لماذا نحن في قطاع الاستشارات والسلامة</h2>
          <h3 class="home-why-subhead">شريكك الهندسي نحو تحقيق تطلعاتك وحفظ استثماراتك</h3>
          <p class="home-why-desc">
            نقدم حلولاً هندسية تلبي وتتخطى تطلعاتكم، ونضمن التوافق التام مع كود البناء السعودي ومعايير السلامة المهنية.
          </p>
        </div>
        <div class="home-why-grid">
          <div v-for="item in whyUsItems" :key="item.number" class="home-why-card">
            <span class="home-why-num">{{ item.number }}</span>
            <h4 class="home-why-card-title">{{ item.title }}</h4>
            <p class="home-why-card-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Logos Strip Matching Figma Desktop - 11 -->
    <section class="partners-section" data-name="Frame 160">
      <div class="container">
        <div class="partners-header">
          <h2 class="partners-title">عملاء يثقون بنا</h2>
          <p class="partners-subtitle">نعتز بالتعاون مع أسماء رائدة في القطاعات العقارية والتجارية والصناعية والخدمية</p>
        </div>
        <div class="partners-strip">
          <div
            v-for="(partner, pIdx) in partners"
            :key="pIdx"
            class="partner-badge"
          >
            {{ partner }}
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Banner & Info Section Matching Figma -->
    <section class="home-contact-section">
      <div class="home-contact-section__hero">
        <img src="/assets/contact-banner-bg.jpg" alt="خلفية تواصل معنا" class="home-contact-section__hero-bg" />
        <div class="home-contact-section__hero-overlay"></div>
        <div class="container home-contact-section__hero-content">
          <h2 class="home-contact-section__title">تواصل معنا</h2>
          <p class="home-contact-section__subtitle">
            أخبرنا بمتطلبات مشروعك وسيتواصل معك خبراؤنا في أقرب فرصة
          </p>
        </div>
      </div>

      <!-- 3 Contact Columns directly below banner -->
      <div class="home-contact-section__info-section">
        <div class="container">
          <div class="home-contact-section__cards">
            <div
              v-for="(card, index) in contactCards"
              :key="index"
              class="contact-box"
            >
              <div class="contact-box__icon">
                <svg v-if="card.icon === 'building'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"></path>
                </svg>
                <svg v-else-if="card.icon === 'phone'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <svg v-else width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 class="contact-box__title">{{ card.title }}</h3>
              <p class="contact-box__desc">{{ card.subtitle }}</p>
              <div class="contact-box__detail-wrap">
                <a v-if="card.link" :href="card.link" class="contact-box__detail contact-box__link" dir="ltr">
                  {{ card.detail }}
                </a>
                <p v-else class="contact-box__detail">
                  {{ card.detail }}
                </p>
                <div class="contact-box__line" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.highlight-red {
  color: var(--color-primary);
}

.highlight-navy {
  color: #1A3E6F;
  font-weight: 800;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 860px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  padding-bottom: 120px;
  z-index: 2;
  overflow: visible;
  background: linear-gradient(
    to left,
    rgba(9, 22, 39, 0.72) 0%,
    rgba(9, 22, 39, 0.45) 50%,
    rgba(9, 22, 39, 0.6) 100%
  );
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding-top: 120px;
    padding-bottom: 90px;
    overflow: visible;
  }
}

.hero-section__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-section__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: hero-background-drift 18s ease-in-out infinite alternate;
  transform-origin: center;
}

.hero-section__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to left,
    rgba(9, 22, 39, 0.72) 0%,
    rgba(9, 22, 39, 0.45) 50%,
    rgba(9, 22, 39, 0.6) 100%
  );
}

.hero-section__container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  padding: 0 24px;
  margin: 0 auto;
  gap: 32px;
}

.hero-section__content {
  width: 100%;
  max-width: 900px;
  color: #FFFFFF;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
}

.hero-section__title {
  font-family: var(--font-cairo);
  font-size: 58px;
  font-weight: 900;
  line-height: 1.25;
  margin-bottom: 0;
  letter-spacing: -0.5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

@media (max-width: 768px) {
  .hero-section__content {
    gap: 20px;
    width: 100%;
    max-width: 100%;
  }

  .hero-section__title {
    font-size: clamp(32px, 8.5vw, 44px);
    line-height: 1.25;
    margin-bottom: 14px;
  }
}

.hero-title-block {
  display: block;
  text-align: center;
  width: 100%;
}

.hero-section__subtitle {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  color: #DEDEDE; /* Foundation /Grey/Light :active */
  margin-bottom: 0;
  max-width: 840px;
  text-align: center;
}

@media (max-width: 768px) {
  .hero-section__subtitle {
    font-size: clamp(15px, 4.2vw, 18px);
    line-height: 1.6;
  }
}

.hero-section__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-section__actions {
    gap: 12px;
    width: 100%;
  }

  .hero-btn {
    flex: 1 1 auto;
    min-width: 135px;
    padding: 12px 20px !important;
    text-align: center;
    justify-content: center;
  }
}

.hero-btn {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FBE9ED; /* Foundation /Red/Light */
  box-shadow: none !important;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.hero-btn--primary {
  height: 56px;
  padding: 0 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: #FFFFFF !important; /* Brand/White */
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  border: none;
  border-radius: 12px;
}

.hero-btn--primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
}

.hero-btn--outline {
  width: 169px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  border: 1.5px solid #FBE9ED !important; /* Foundation /Red/Light */
  border-radius: 12px !important;
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #FBE9ED !important; /* Foundation /Red/Light */
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  transition: all var(--transition-normal);
}

.hero-btn--outline:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: #FFFFFF !important;
  transform: translateY(-2px);
}

/* Floating Feature Bar on the boundary between Hero and Services */
.hero-features {
  position: absolute;
  bottom: -65px;
  top: auto;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  margin: 0;
  padding: 0 24px;
}

.hero-features__bar {
  background: rgba(14, 20, 27, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: none;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .hero-features__bar {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-features__bar {
    grid-template-columns: repeat(4, 1fr);
    height: 145px;
  }
}

.hero-features__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  padding-inline-end: 0px;
}

@media (min-width: 1024px) {
  .hero-features__item {
    padding: 0;
    padding-inline-end: 0px;
  }
}

.hero-features__icon-wrap {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-features__text {
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 24px;
  text-align: center;
  margin: 0;
}

.hero-features__divider {
  display: none;
}

@media (min-width: 1024px) {
  .hero-features__divider {
    display: block;
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 1px;
    background: rgba(255, 255, 255, 0.15);
  }
}

/* Services Overview (Hexagons - Desktop - 4 & Frame 126) */
.services-overview {
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: #F6F0EC;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

@media (max-width: 768px) {
  .services-overview {
    padding-top: 100px;
    padding-bottom: 60px;
    overflow: hidden;
  }
}

.services-overview__container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.services-overview__header {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.section-title {
  margin: 0 auto;
  font-size: 40px;
  font-weight: 800;
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  color: #102543;
  line-height: 60px;
}

.section-title span {
  font-weight: 800;
}

.section-subtitle {
  font-size: 14px;
  color: #4A4A4A;
  font-weight: 500;
  line-height: 20px;
}

.services-overview__visual {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;
}

/* Honeycomb Hexagon Cluster Layout */
.services-hex-cluster {
  --hex-w: 254px;
  --hex-h: calc(var(--hex-w) * 310 / 267);
  --hex-gap: calc(var(--hex-w) * 0.055);
  --hex-overlap: calc(var(--hex-h) * 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 904.3px;
  margin: 0 auto;
  position: relative;
  padding: 0;
}

.services-hex-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--hex-gap);
  width: 100%;
}

.services-hex-row--top {
  position: relative;
  z-index: 1;
}

.services-hex-row--bottom {
  position: relative;
  margin-top: calc(-1 * var(--hex-overlap));
  z-index: 2;
  width: 760px;
  max-width: 760px;
}

.services-hex-row--bottom > div:nth-of-type(1) > .services-hex-card {
  margin: 0;
}

/* Individual Hexagon Wrapper & Float Animation */
.services-hex-wrapper {
  flex: 0 0 var(--hex-w);
  width: var(--hex-w);
  height: var(--hex-h);
  animation: hex-float 6.5s ease-in-out infinite;
  will-change: transform;
  position: relative;
}

.services-hex-wrapper:hover,
.services-hex-wrapper:focus-within {
  animation-play-state: paused;
  z-index: 10;
}

/* Hexagon Card Link */
.services-hex-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
  outline: none;
  filter: drop-shadow(0 14px 28px rgba(9, 22, 39, 0.1));
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease;
}

.services-hex-card:hover,
.services-hex-card:focus-visible {
  transform: translateY(-8px) scale(1.05);
  filter: drop-shadow(0 22px 42px rgba(9, 22, 39, 0.25));
  z-index: 15;
}

.services-hex-card:focus-visible {
  outline: 2px solid var(--color-red-primary);
  outline-offset: 4px;
}

/* Hexagon Image */
.services-hex-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: filter 0.35s ease, transform 0.35s ease;
}

.services-hex-card:hover .services-hex-card__img,
.services-hex-card:focus-visible .services-hex-card__img {
  filter: brightness(0.85) contrast(1.02);
}

/* Overlay Mask Matching Figma Design */
.services-hex-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(180deg, rgba(16, 32, 56, 0.4) 0%, rgba(10, 22, 40, 0.65) 100%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.services-hex-card:hover .services-hex-card__overlay,
.services-hex-card:focus-visible .services-hex-card__overlay {
  opacity: 1;
}

/* Arabic Text Reveal Inside Hexagon */
.services-hex-card__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #FFFFFF;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: clamp(14px, 2vw, 20px);
  line-height: 1.45;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  transform: translateY(6px);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.services-hex-card:hover .services-hex-card__text,
.services-hex-card:focus-visible .services-hex-card__text {
  transform: translateY(0);
}

.services-hex-card__text-line {
  display: block;
  white-space: nowrap;
}

/* Organic Floating Animation */
@keyframes hex-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Responsive Scaling for Honeycomb Cluster */
@media (min-width: 1200px) {
  .services-hex-cluster {
    --hex-w: 260px;
  }
}

@media (max-width: 991px) {
  .services-hex-cluster {
    --hex-w: 210px;
  }
}

@media (max-width: 767px) {
  .services-hex-cluster {
    --hex-w: clamp(84px, 26vw, 120px);
  }

  .services-hex-card__text {
    font-size: clamp(9px, 2.2vw, 12px);
    line-height: 1.3;
  }
}

/* 4 Steps Section (Desktop - 5) */
.steps-section {
  background-color: #F6F0EC;
  color: #102543;
  padding: 90px 0;
  position: relative;
  overflow: hidden;
}

.steps-section__container {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 1024px) {
  .steps-section__container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.steps-section__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;
  align-items: flex-start;
  width: 100%;
  max-width: 340px;
  margin: 0;
}

.steps-section__title {
  font-family: var(--font-cairo);
  font-size: 42px;
  font-weight: 800;
  line-height: 1.3;
  color: #102543;
  margin: 0;
  text-align: right;
}

.steps-section__desc {
  font-family: var(--font-cairo);
  font-size: 16px;
  font-weight: 600;
  color: #595959;
  line-height: 1.6;
  text-align: right;
  margin: 0;
}

.steps-section__action {
  width: auto;
  margin-top: 8px;
  text-align: right;
}

.steps-btn {
  background: #D6214E !important;
  color: #FFFFFF !important;
  border-radius: 12px !important;
  border: none !important;
  padding: 14px 28px !important;
  font-family: var(--font-cairo);
  font-weight: 700;
  font-size: 15px;
  line-height: 1.4;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(214, 33, 78, 0.25) !important;
  transition: all var(--transition-normal);
  width: auto !important;
  margin: 0 !important;
}

.steps-btn:hover {
  background: #B8183E !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(214, 33, 78, 0.35) !important;
}

@media (max-width: 768px) {
  .steps-section {
    padding: 60px 0;
  }

  .steps-section__intro {
    align-items: flex-start;
    text-align: right;
    gap: 16px;
    max-width: 100%;
  }

  .steps-section__title {
    font-size: 32px;
    line-height: 1.3;
  }

  .steps-section__desc {
    font-size: 15px;
    line-height: 1.6;
  }
}

.steps-section__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  margin: 0;
}

@media (max-width: 900px) {
  .steps-section__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .steps-section__cards {
    grid-template-columns: 1fr;
  }
}

.step-card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: all var(--transition-normal);
  min-height: 250px;
  position: relative;
}

.steps-section__cards > .step-card:nth-child(1) {
  margin-top: 0;
}
.steps-section__cards > .step-card:nth-child(2) {
  margin-top: 25px;
}
.steps-section__cards > .step-card:nth-child(3) {
  margin-top: 50px;
}
.steps-section__cards > .step-card:nth-child(4) {
  margin-top: 75px;
}

@media (max-width: 900px) {
  .steps-section__cards > .step-card:nth-child(1),
  .steps-section__cards > .step-card:nth-child(2),
  .steps-section__cards > .step-card:nth-child(3),
  .steps-section__cards > .step-card:nth-child(4) {
    margin-top: 0;
  }
}

.step-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: rgba(214, 33, 78, 0.2);
}

.step-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(214, 33, 78, 0.1);
  color: #D6214E;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.step-card__icon svg {
  margin: 0 auto;
}

.step-card__title {
  font-family: var(--font-cairo);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #102543;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.step-card__desc {
  font-family: var(--font-cairo);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: #595959;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Home Projects Preview Matching Figma Desktop - 8 & Frame 126 */
.home-projects-section {
  padding: 80px 0;
  background-color: #FFFFFF;
  color: #102543;
  position: relative;
}

.home-projects-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .home-projects-header {
    flex-direction: row;
    align-items: flex-end;
  }
}

.home-projects-badge {
  display: inline-block;
  padding: 5px 16px;
  border-radius: 20px;
  background: rgba(214, 33, 78, 0.12);
  color: #D6214E;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
  border: 1px solid rgba(214, 33, 78, 0.3);
}

.home-projects-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  color: #102543;
  margin: 0;
}

.home-projects-subtitle {
  font-size: 16px;
  color: #595959;
  margin-top: 8px;
  line-height: 1.6;
}

.home-projects-all-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #D6214E;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.home-projects-all-link:hover {
  gap: 12px;
  color: #FF4772;
}

.home-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
}

@media (min-width: 1024px) {
  .home-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.home-project-card {
  background: #FFFFFF;
  border: 3px solid #D6214E; /* Foundation /Red/Normal */
  border-radius: 10px;
  width: 100%;
  max-width: 614px;
  height: 367px;
  overflow: hidden;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
}

.home-project-card:hover {
  transform: translateY(-6px);
  border-color: #D6214E;
  box-shadow: 0 16px 36px rgba(214, 33, 78, 0.15);
}

.home-project-card__img-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.home-project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.home-project-card:hover .home-project-card__img {
  transform: scale(1.05);
}

.home-project-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 22, 39, 0.05) 0%, rgba(9, 22, 39, 0.65) 100%);
}

.home-project-card__tag {
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

.home-project-card__loc {
  position: absolute;
  bottom: 12px;
  right: 14px;
  color: #E8ECF1;
  font-size: 13px;
  font-weight: 500;
  z-index: 2;
}

.home-project-card__body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.home-project-card__title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #1A3E6F; /* Foundation /Blue/Normal */
  margin: 0;
}

.home-project-card__desc {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 16px;
  color: #595959; /* Foundation /Grey/Dark :hover */
  line-height: 1.6;
  margin: 0;
}

/* Home About Teaser Matching Desktop - 10 (Frame 115) */
.home-about-teaser {
  padding: 80px 96px;
  background-color: #FDFBFA;
  position: relative;
}

@media (max-width: 768px) {
  .home-about-teaser {
    padding: 60px 20px;
  }
}

.home-about-card {
  width: 100%;
  max-width: 1248px;
  background: transparent;
  border: none;
  border-radius: 0px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 27px;
  align-items: center;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .home-about-card {
    grid-template-columns: 1.2fr 1fr;
    gap: 27px;
  }
}

.home-about-card__text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 0px;
}

.home-about-card__title {
  width: 583px;
  max-width: 583px;
  font-size: 40px;
  font-weight: 800;
  color: #D6214E;
  line-height: 60px;
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  margin: 0;
}

.home-about-card__desc {
  width: 583px;
  max-width: 583px;
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.8;
  color: #434343;
  margin: 0;
}

.home-about-subsections {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 6px 0px 0px;
  margin: 0;
}

.home-about-subsection {
  border: none;
  padding: 0px;
}

.home-about-sub-title {
  width: 583px;
  max-width: 583px;
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 22px;
  font-weight: 800;
  line-height: 32px;
  color: #1A3E6F;
  margin: 0 0 4px;
}

.home-about-sub-desc {
  width: 583px;
  max-width: 583px;
  font-size: 16px;
  color: #595959;
  line-height: 1.6;
  margin: 0;
}

.home-about-card__action {
  margin-top: 8px;
}

.home-about-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #D6214E;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 28px;
  border-radius: 12px;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.home-about-card__btn:hover {
  background: #B8183E;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(214, 33, 78, 0.35);
}

.home-about-card__media {
  border-radius: 12px;
  overflow: hidden;
  height: 380px;
  display: flex;
  justify-content: center;
}

.home-about-card__img {
  width: 100%;
  max-width: 480px;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Stats Section Matching Figma Desktop - 11 */
.home-stats-section {
  background-color: #17202B;
  padding: 80px 96px;
  color: #FFFFFF;
}

.home-stats-section .container {
  width: 1248px;
  max-width: 1248px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.home-stats-header {
  text-align: center;
  margin-bottom: 20px;
}

.home-stats-title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 60px;
  margin: 0;
}

.home-stats-subtitle {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 18px;
  color: #EFEFEF;
  font-weight: 600;
  max-width: 820px;
  margin: 0 auto;
  line-height: 60px;
}

.home-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 260px);
  gap: 20px;
  row-gap: 20px;
  justify-content: center;
  width: 1248px;
  max-width: 1248px;
  margin: 0 auto;
}

@media (max-width: 1100px) {
  .home-stats-grid {
    grid-template-columns: repeat(2, 260px);
  }
}

.home-stat-card {
  width: 260px;
  height: 118px;
  background: transparent;
  border: 1px solid #CDBCB2;
  border-radius: 18px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  text-align: center;
  transition: all var(--transition-normal);
}

.home-stat-card:hover {
  border-color: #D6214E;
  background: rgba(214, 33, 78, 0.1);
  transform: translateY(-4px);
}

.home-stat-val {
  width: 226px;
  display: inline-block;
  text-align: center;
  font-family: "Cairo", Tajawal, system-ui, sans-serif;
  font-size: 30px;
  line-height: 45px;
  font-weight: 900;
  color: #D6214E;
}

.home-stat-lbl {
  font-family: "Cairo", Tajawal, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.4;
}

.home-stats-grid > .home-stat-card:nth-child(4) .home-stat-val,
.home-stats-grid > .home-stat-card:nth-child(5) .home-stat-val,
.home-stats-grid > .home-stat-card:nth-child(8) .home-stat-val {
  color: #F4F4F4;
  font-weight: 700;
}

/* Why Us Section Matching Figma Frame 60 */
.home-why-section {
  background-color: #F6F0EC;
  padding: 90px 0;
}

.home-why-header {
  width: 100%;
  max-width: 820px;
  margin: 0 auto 48px;
  text-align: center;
}

.home-why-title {
  font-family: var(--font-cairo);
  font-size: 36px;
  font-weight: 800;
  color: #102543;
  margin: 0 0 10px;
}

.home-why-subhead {
  font-family: var(--font-cairo);
  font-size: 18px;
  font-weight: 700;
  color: #D6214E;
  margin: 0 0 12px;
}

.home-why-desc {
  font-family: var(--font-cairo);
  font-size: 15px;
  color: #595959;
  margin: 0 auto;
  line-height: 1.7;
}

.home-why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 1024px) {
  .home-why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .home-why-grid {
    grid-template-columns: 1fr;
  }
}

.home-why-card {
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 16px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all var(--transition-normal);
}

.home-why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  border-color: rgba(214, 33, 78, 0.2);
}

.home-why-num {
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
  color: #D6214E;
  font-family: var(--font-cairo);
  margin: 0;
  display: block;
}

.home-why-card-title {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.4;
  color: #1A3E6F;
  font-family: var(--font-cairo);
  margin: 0;
}

.home-why-card-desc {
  font-size: 14px;
  font-weight: 500;
  color: #595959;
  line-height: 1.6;
  margin: 0;
}

/* Partners Logos Strip Matching Figma Desktop - 11 Frame 160 */
.partners-section {
  padding: 80px 0;
  background-color: #17202B;
  border: none;
}

.partners-section .container {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

.partners-header {
  text-align: center;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.partners-title {
  color: #FFFFFF;
  font-family: var(--font-cairo);
  font-size: 38px;
  line-height: 1.3;
  font-weight: 800;
  margin: 0;
}

.partners-subtitle {
  color: #EFEFEF;
  font-family: var(--font-cairo);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  max-width: 780px;
  margin: 0 auto;
}

.partners-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.partner-badge {
  height: 64px;
  min-width: 130px;
  padding: 0 24px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #D2DCE6;
  font-family: var(--font-inter);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.partner-badge:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(214, 33, 78, 0.5);
  color: #FFFFFF;
  transform: translateY(-2px);
}

/* Home Contact Section Matching Figma */
.home-contact-section {
  position: relative;
  background-color: #FFFFFF;
  overflow: hidden;
}

.home-contact-section__hero {
  position: relative;
  height: 550px;
  min-height: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: url('/assets/contact-banner-bg.jpg') center / cover no-repeat;
}

@media (max-width: 768px) {
  .home-contact-section__hero {
    height: auto;
    min-height: 320px;
    padding: 60px 16px;
  }
}

.home-contact-section__hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-contact-section__hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 22, 39, 0.28);
}

.home-contact-section__hero-content {
  position: relative;
  z-index: 1;
  color: #FFFFFF;
  padding: 0;
  margin: 251px auto 0;
  max-width: 628px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.home-contact-section__title {
  font-size: 72px;
  font-weight: 800;
  line-height: 108px;
  color: var(--color-primary);
  margin-bottom: 0;
  text-shadow: none;
}

@media (max-width: 768px) {
  .home-contact-section__title {
    font-size: clamp(34px, 9vw, 48px);
    line-height: 1.3;
  }
}

.home-contact-section__subtitle {
  font-size: 22px;
  font-weight: 800;
  line-height: 33px;
  color: #FBE9ED; /* Foundation /Red/Light */
  margin: 0;
  text-shadow: none;
}

@media (max-width: 768px) {
  .home-contact-section__subtitle {
    font-size: clamp(14px, 4vw, 17px);
    line-height: 1.5;
  }
}

/* 3 Contact Columns directly below banner */
.home-contact-section__info-section {
  background-color: #FFFFFF;
  padding: 70px 0 80px;
}

.home-contact-section__cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .home-contact-section__cards {
    gap: 0;
  }
}

.contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 10px 28px;
  height: 302px;
  width: 400px;
  max-width: 400px;
}

.home-contact-section__cards > .contact-box:nth-child(2) {
  width: 422px;
  max-width: 422px;
}

@media (min-width: 768px) {
  .contact-box {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-left: none;
  }
  .contact-box:first-child {
    border-right: none;
  }
}

@media (max-width: 767px) {
  .contact-box {
    border-bottom: 1px solid #E8ECF1;
    padding-bottom: 30px;
    height: auto;
  }
  .contact-box:last-child {
    border-bottom: none;
  }
}

.contact-box__icon svg {
  width: 58px;
  height: 58px;
  color: var(--color-primary);
}

.home-contact-section__cards > .contact-box:nth-child(2) .contact-box__icon {
  margin-inline-start: 79.5px;
  align-self: flex-start;
}

.contact-box__title {
  font-size: 27px;
  font-weight: 700;
  color: #242A32;
  line-height: 33.8px;
}

.contact-box__desc {
  font-size: 16px;
  font-weight: 500;
  color: #616161;
  line-height: 27.2px;
  min-height: 44px;
}

.contact-box__detail-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

.contact-box__detail {
  font-size: 17px;
  font-weight: 500;
  color: var(--color-primary);
  line-height: 24.7px;
}

.contact-box__link {
  text-decoration: underline;
  transition: opacity var(--transition-fast);
}

.contact-box__link:hover {
  opacity: 0.8;
}

.home-contact-section__cards > .contact-box:nth-child(2) .contact-box__link {
  width: 422px;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-top: -8.1px;
}

.home-contact-section__cards > .contact-box:nth-child(3) .contact-box__link {
  margin-inline-start: 30px;
}

.contact-box__line {
  width: 40px;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 2px;
}

.home-contact-section__cards > .contact-box:nth-child(2) .contact-box__line {
  margin-inline-start: 192px;
  align-self: flex-start;
}
</style>
