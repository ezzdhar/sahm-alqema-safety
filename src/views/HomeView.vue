<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import AppButton from '../components/common/AppButton.vue';

// 4 Feature items in floating bar matching Figma Frame 54
const features = [
  {
    title: 'مكافحة الحريق والإنذار\nالمبكر',
    icon: 'fire',
  },
  {
    title: 'كاميرات المراقبة\nوالتحكم بالدخول',
    icon: 'lock',
  },
  {
    title: 'أنظمة التكييف\nوالتهوية الميكانيكية',
    icon: 'hvac',
  },
  {
    title: 'شبكات الكهرباء\nوالطاقة والإنارة',
    icon: 'bolt',
  },
];

// 4 Steps toward the top matching Figma Desktop - 5
const steps = [
  {
    title: 'التخطيط والدراسة',
    desc: 'مراجعة متطلبات المشروع وموقعه بدقة ووضع الحلول الهندسية المناسبة وجدول التنفيذ الزمني.',
    icon: 'bar-chart',
  },
  {
    title: 'التصميم والنمذجة',
    desc: 'تصميم شبكات MEP ونمذجتها بتقنية BIM المتطورة لتلافي أي تعارض وتنسيق الأعمال هندسياً.',
    icon: 'trending-up',
  },
  {
    title: 'التوريد والتركيب',
    desc: 'توريد أجود المعدات المعتمدة وتركيبها بواسطة طواقم هندسية مدربة بأعلى اشتراطات السلامة.',
    icon: 'palette',
  },
  {
    title: 'الاختبار والتشغيل',
    desc: 'فحص واختبار كافة الخطوط والأنظمة واعتمادها وتسليمها جاهزة مع خطط الصيانة المستدامة.',
    icon: 'globe',
  },
];

// Projects Filters & 9 Featured Projects matching Figma Node 25:200
const activeProjectCountry = ref('all');

const projectCountryFilters = [
  { id: 'all', label: 'كافة المشاريع' },
  { id: 'saudi', label: 'المملكة العربية السعودية' },
  { id: 'egypt', label: 'جمهورية مصر العربية' },
  { id: 'uae', label: 'دولة الإمارات' },
];

const featuredProjects = [
  {
    id: 1,
    title: 'مدارس منارات الرياض',
    client: 'معارف للتعليم · الرياض وجدة والخبر',
    desc: 'توريد وتركيب واختبار وتشغيل البنية التحتيةوأنظمة مكافحة الحريق والإنذار المبكر لثلاثة مجمعات تعليمية كبرى.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-manarat-riyadh.png',
  },
  {
    id: 2,
    title: 'كليات عناية الطبية',
    client: 'عناية الطبية · مدينة الرياض',
    desc: 'تنفيذ البنية التحتية المتطورة وأنظمة إطفاء وأنظمة الإنارة لثلاثة مبانٍ جامعية طبية متخصصة ومختبرات مركزية.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-enaya-colleges.png',
  },
  {
    id: 3,
    title: 'مدارس الفرسان العالمية',
    client: 'الفرسان · الرياض',
    desc: 'البنية التحتية وأنظمة إطفاء الحريق وإنذاره للمدرسة.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-forsan-school.png',
  },
  {
    id: 4,
    title: 'مدارس مايان والعليا',
    client: 'الراجحي للاستثمار · الرياض',
    desc: 'البنية التحتية وأنظمة إطفاء الحريق وإنذاره لمدرستين.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-haitan-malqa.png',
  },
  {
    id: 5,
    title: 'مكاني بلازا',
    client: 'مطيب الكردي · الرياض',
    desc: 'توريد وتركيب وتشغيل البنية التحتية وأنظمة الإنذار ومكافحة الحريق.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-makani-plaza.png',
  },
  {
    id: 6,
    title: 'مستشفى أثير',
    client: 'مجمع البر الخيري · المملكة العربية السعودية',
    desc: 'تصميم وتنفيذ أنظمة MEP، ونماذج Revit إنشائية ومعمارية وMEP، ومحاكاة الحريق FDS.',
    country: 'السعودية',
    countryCode: 'saudi',
    image: '/assets/projects/project-alber-hospital.png',
  },
  {
    id: 7,
    title: 'البنك الأهلي المصري',
    client: 'البنك الأهلي المصري · القاهرة',
    desc: 'مكافحة الحريق والتكييف والسباكة والتيار الخفيف والقوى وكاميرات المراقبة.',
    country: 'مصر',
    countryCode: 'egypt',
    image: '/assets/projects/project-nbe.png',
  },
  {
    id: 8,
    title: 'فودافون',
    client: 'فودافون · القاهرة والإسكندرية',
    desc: 'البنية التحتية والسباكة الداخلية ومكافحة الحريق والتكييف وغرفة مضخات خزان المياه الرئيسي.',
    country: 'مصر',
    countryCode: 'egypt',
    image: '/assets/projects/project-vodafone.png',
  },
  {
    id: 9,
    title: 'كليوباترا مول الشيخ زايد',
    client: 'مجموعة كليوباترا · الشيخ زايد',
    desc: 'مكافحة الحريق والمضخات وشبكة تصريف مياه الأمطار.',
    country: 'مصر',
    countryCode: 'egypt',
    image: '/assets/projects/project-cleopatra-mall.png',
  },
];

const filteredProjects = computed(() => {
  if (activeProjectCountry.value === 'all') {
    return featuredProjects;
  }
  return featuredProjects.filter((p) => p.countryCode === activeProjectCountry.value);
});

// Stats Data matching Desktop - 11
const statsData = [
  { value: '25,000+', label: 'غرفة فندقية' },
  { value: '6,000+', label: 'فيلا وقصر' },
  { value: '4,000+', label: 'شقة ووحدة سكنية' },
  { value: '220+', label: 'مشروع تجاري وإداري' },
  { value: '90%', label: 'نسبة ولاء وعودة العملاء' },
  { value: '20+', label: 'محطة غلايات كبرى' },
  { value: '200+', label: 'محطة وغرفة مضخات' },
  { value: '1,200+', label: 'مخطط هندسي معتمد' },
];

// Why Us Items matching Figma Frame 60
const whyUsItems = [
  {
    number: '01',
    title: 'خبرة عريقة متوارثة منذ 1989',
    desc: 'أكثر من ثلاثة عقود من العمل المستمر في كبرى مشاريع البنية التحتية والفندقة والصحة في الخليج ومصر، بسمعة راسخة قوامها الثقة والجودة.',
  },
  {
    number: '02',
    title: 'منظومة هندسية شاملة تحت سقف واحد',
    desc: 'تتكامل أعمال الميكانيكا، الكهرباء، السباكة، الحريق، والتحكم الذكي وتصميمات BIM عبر فريق عمل موحد لتجنب تضارب المقاولين.',
  },
  {
    number: '03',
    title: 'مسؤولية تنفيذية وتسليم مفتاح',
    desc: 'فريق عمل BIM لتكامل أعمال الميكانيكا، الكهرباء، السباكة ومكافحة الحريق لمنع أي تعارض ميداني.',
  },
  {
    number: '04',
    title: 'علاقات استراتيجية متجددة',
    desc: ' 9 من كل 10 عملاء يختارون سهم القمة لمشاريعهم اللاحقة، نظير التزامنا الصارم بالمواصفات وخدمات ما بعد البيع والدعم المستمر.',
  },
];

const differentiators = whyUsItems.map((item, index) => ({
  ...item,
  id: item.number,
  reverse: index % 2 === 1,
  ellipseId: index + 1,
  img: `/assets/num-0${index + 1}.png`,
}));

// Partner Logos matching Figma Frame 160 & Node 50:134
const partnerLogos = [
  { name: 'Nakheel', src: '/assets/partners/nakheel.png' },
  { name: 'MV Pharmacy', src: '/assets/partners/mv.png' },
  { name: 'منارات الرياض', src: '/assets/partners/manarat.png' },
  { name: 'EMAAR', src: '/assets/partners/emaar.png' },
  { name: 'Better Home', src: '/assets/partners/betterhome.png' },
  { name: 'Ceramica Cleopatra', src: '/assets/partners/cleopatra.png' },
  { name: 'ECC', src: '/assets/partners/ecc.png' },
  { name: 'مدارس الفرسان', src: '/assets/partners/forsan.png' },
  { name: 'باجة Baja', src: '/assets/partners/baja.png' },
  { name: 'Balbaa Group', src: '/assets/partners/balbaa.png' },
  { name: 'Hilton', src: '/assets/partners/hilton.png' },
  { name: 'مكاني بلازا Makani', src: '/assets/partners/makani.png' },
  { name: 'Orascom', src: '/assets/partners/orascom.png' },
  { name: 'Al Rajhi', src: '/assets/partners/rajhi.png' },
  { name: 'الرماية Rimaya', src: '/assets/partners/rimaya.png' },
  { name: 'Saudi Bio', src: '/assets/partners/saudibio.png' },
  { name: 'Sicast', src: '/assets/partners/sicast.png' },
  { name: 'Sleep Nice', src: '/assets/partners/sleepnice.png' },
  { name: 'Travco', src: '/assets/partners/travco.png' },
  { name: 'Vodafone', src: '/assets/partners/vodafone.png' },
];

// Contact points matching Figma Desktop - 7 & Contact section
const contactCards = [
  {
    icon: 'building',
    title: 'زورونا',
    subtitle: 'يسعدنا استقبالكم في مكتبنا خلال ساعات العمل',
    details: [
      'المملكة العربية السعودية ,الرياض, 7455 الحسين بن علي 3272',
      'مصر,القاهرة, نزهة الجديدة, شيراتون, عبد الحميد بدوي',
    ],
  },
  {
    icon: 'phone',
    title: 'اتصلوا بنا',
    subtitle: 'فريقنا متاح من الأحد إلى الخميس خلال ساعات العمل',
    details: [
      '+966 59 591 0235',
      '+966 56 890 9193',
      '+20 111 977 8112',
      '+20 100 950 7330',
    ],
  },
  {
    icon: 'mail',
    title: 'راسلونا',
    subtitle: 'أرسلوا لنا وسنعاود الرد خلال يوم عمل واحد',
    details: [
      'mahmoud@etc-foustat.net',
      'ahmed@etc-foustat.net',
    ],
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
            <span class="hero-title-block">حيث تلتقي <span class="highlight-red">الأمان</span></span>
            <span class="hero-title-block">بالإتقان الهندسي</span>
          </h1>
          <p class="hero-section__subtitle">
            استشارات وتصميم وتنفيذ لأنظمة الميكانيكا والكهرباء والسباكة ومكافحة الحريق والأمن، بخبرة هندسية تمتد منذ عام
            1989 وحضور قوي في السعودية ومصر والإمارات.
          </p>
          <div class="hero-section__actions">
            <RouterLink to="/contact" custom v-slot="{ navigate }">
              <button @click="navigate" class="hero-btn hero-btn--primary">
                استكشف الفرص
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
            <div v-for="(item, index) in features" :key="index" class="hero-features__item">
              <div class="hero-features__icon-wrap">
                <!-- Fire Icon -->
                <svg v-if="item.icon === 'fire'" width="33" height="42" viewBox="0 0 33 42" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M31.5984 18.9796C30.6884 16.9315 29.3655 15.0931 27.7125 13.5796L26.3484 12.3281C26.3021 12.2867 26.2464 12.2574 26.1861 12.2427C26.1258 12.2279 26.0628 12.2282 26.0026 12.2434C25.9425 12.2587 25.887 12.2885 25.841 12.3302C25.7951 12.372 25.7601 12.4243 25.7391 12.4828L25.1297 14.2312C24.75 15.3281 24.0516 16.4484 23.0625 17.5499C22.9969 17.6203 22.9219 17.639 22.8703 17.6437C22.8188 17.6484 22.7391 17.639 22.6687 17.5734C22.6031 17.5171 22.5703 17.4328 22.575 17.3484C22.7484 14.5265 21.9047 11.3437 20.0578 7.87963C18.5297 5.00151 16.4062 2.75619 13.7531 1.19057L11.8172 0.0515069C11.5641 -0.0984931 11.2406 0.0983817 11.2547 0.393694L11.3578 2.64369C11.4281 4.18119 11.25 5.54057 10.8281 6.67026C10.3125 8.05307 9.57187 9.33744 8.625 10.4906C7.96606 11.292 7.21919 12.0168 6.39844 12.6515C4.42174 14.171 2.81444 16.1181 1.69687 18.3468C0.582065 20.595 0.00136013 23.0702 0 25.5796C0 27.7921 0.435937 29.9343 1.29844 31.9546C2.13125 33.8998 3.33309 35.6651 4.8375 37.1531C6.35625 38.6531 8.11875 39.8343 10.0828 40.6546C12.1172 41.5078 14.2734 41.939 16.5 41.939C18.7266 41.939 20.8828 41.5078 22.9172 40.6593C24.8764 39.8438 26.658 38.6545 28.1625 37.1578C29.6812 35.6578 30.8719 33.9046 31.7016 31.9593C32.5628 29.9445 33.0046 27.7754 33 25.5843C33 23.2968 32.5312 21.0749 31.5984 18.9796ZM25.9219 34.8843C23.4047 37.3781 20.0625 38.7468 16.5 38.7468C12.9375 38.7468 9.59531 37.3781 7.07812 34.8843C4.57031 32.3953 3.1875 29.0953 3.1875 25.5843C3.1875 23.5453 3.64688 21.5906 4.55156 19.7718C5.43281 17.9953 6.74531 16.4062 8.33906 15.1828C9.35549 14.4055 10.2774 13.512 11.0859 12.5203C12.2578 11.0906 13.1766 9.49682 13.8141 7.78588C14.0756 7.08012 14.2656 6.3499 14.3812 5.60619C15.5109 6.64682 16.4578 7.90307 17.25 9.37494C18.8156 12.3093 19.5375 14.9203 19.3969 17.1421C19.3633 17.6654 19.4487 18.1895 19.6468 18.675C19.8449 19.1606 20.1505 19.5948 20.5406 19.9453C20.8787 20.2506 21.274 20.4858 21.7038 20.6371C22.1335 20.7884 22.5889 20.8527 23.0437 20.8265C23.9672 20.7796 24.8156 20.3718 25.4344 19.6828C26.0578 18.9843 26.5969 18.2718 27.0469 17.5453C27.7031 18.3843 28.2516 19.2984 28.6875 20.2828C29.4328 21.9609 29.8125 23.7468 29.8125 25.5843C29.8125 29.0953 28.4297 32.3999 25.9219 34.8843Z"
                    fill="#D6214E" />
                </svg>

                <!-- Lock Icon -->
                <svg v-else-if="item.icon === 'lock'" width="48" height="48" viewBox="0 0 48 48" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_8_1007)">
                    <mask id="stroke0_8_1007" fill="white">
                      <path
                        d="M13.5 13.5V18H28.5V13.5C28.5 9.35625 25.1437 6 21 6C16.8563 6 13.5 9.35625 13.5 13.5ZM7.5 18V13.5C7.5 6.04688 13.5469 0 21 0C28.4531 0 34.5 6.04688 34.5 13.5V18H36C39.3094 18 42 20.6906 42 24V42C42 45.3094 39.3094 48 36 48H6C2.69063 48 0 45.3094 0 42V24C0 20.6906 2.69063 18 6 18H7.5Z" />
                    </mask>
                    <path
                      d="M13.5 13.5V18H28.5V13.5C28.5 9.35625 25.1438 6 21 6C16.8562 6 13.5 9.35625 13.5 13.5ZM7.5 18V13.5C7.5 6.04688 13.5469 0 21 0C28.4531 0 34.5 6.04688 34.5 13.5V18H36C39.3094 18 42 20.6906 42 24V42C42 45.3094 39.3094 48 36 48H6C2.69063 48 0 45.3094 0 42V24C0 20.6906 2.69063 18 6 18H7.5Z"
                      stroke-width="8" stroke="#D6214E" mask="url(#stroke0_8_1007)" />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_1007">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <!-- HVAC Icon -->
                <svg v-else-if="item.icon === 'hvac'" width="48" height="48" viewBox="0 0 48 48" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.04 33.5279C35.5067 31.0596 36.74 28.0462 36.74 24.4879C36.74 20.9296 35.5067 17.9162 33.04 15.4479C30.5733 12.9796 27.56 11.7462 24 11.7479C20.44 11.7496 17.4267 12.9829 14.96 15.4479C12.4933 17.9179 11.26 20.9312 11.26 24.4879C11.26 28.0446 12.4933 31.0579 14.96 33.5279C17.4283 35.9946 20.4417 37.2279 24 37.2279C27.5583 37.2279 30.5717 35.9946 33.04 33.5279ZM20.0425 33.9529C18.706 33.3585 19.2817 31.7004 20.7444 31.7004H27.2571C28.7181 31.7004 29.2924 33.3567 27.9575 33.9504C26.7208 34.5004 25.4017 34.7754 24 34.7754C22.5983 34.7754 21.2792 34.5004 20.0425 33.9504M16.3749 29.7754C15.6403 29.7754 14.953 29.3775 14.6631 28.7025C14.5182 28.3652 14.388 28.0228 14.2725 27.6754C14.2672 27.6593 14.2619 27.6433 14.2566 27.6272C13.8862 26.4956 14.8276 25.4504 16.0183 25.4504H31.9817C33.1724 25.4504 34.1138 26.4958 33.7412 27.6266C33.7358 27.6429 33.7304 27.6592 33.725 27.6754C33.6032 28.0418 33.4611 28.4026 33.2989 28.7578C33.0037 29.4042 32.3333 29.7754 31.6227 29.7754H16.3749ZM16.0183 23.5254C14.8276 23.5254 13.8862 22.4802 14.2566 21.3486C14.2619 21.3326 14.2672 21.3165 14.2725 21.3004C14.3947 20.933 14.5374 20.5712 14.7006 20.215C14.9961 19.5702 15.6656 19.2004 16.3749 19.2004H31.6251C32.3597 19.2004 33.0472 19.5983 33.3363 20.2736C33.4807 20.6108 33.6103 20.9531 33.725 21.3004C33.7303 21.3165 33.7356 21.3326 33.7409 21.3486C34.1113 22.4802 33.1699 23.5254 31.9792 23.5254H16.0183ZM20.7429 17.2754C19.2819 17.2754 18.7076 15.6191 20.0425 15.0254C21.2792 14.4754 22.5983 14.2004 24 14.2004C25.4017 14.2004 26.7208 14.4754 27.9575 15.0254C29.2924 15.6191 28.7181 17.2754 27.2571 17.2754H20.7429ZM6 44.4879C4.89543 44.4879 4 43.5925 4 42.4879V6.48792C4 5.38335 4.89543 4.48792 6 4.48792H42C43.1046 4.48792 44 5.38335 44 6.48792V42.4879C44 43.5925 43.1046 44.4879 42 44.4879H6ZM6.5 39.9879C6.5 41.0925 7.39543 41.9879 8.5 41.9879H39.5C40.6046 41.9879 41.5 41.0925 41.5 39.9879V8.98792C41.5 7.88335 40.6046 6.98792 39.5 6.98792H8.5C7.39543 6.98792 6.5 7.88335 6.5 8.98792V39.9879Z"
                    fill="#D6214E" />
                </svg>

                <!-- Electrical / Bolt Icon -->
                <svg v-else width="36" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L4.5 13.5H11.5L10.5 22L19.5 10.5H12.5L13 2Z" stroke="#D6214E" stroke-width="1.8"
                    stroke-linecap="round" stroke-linejoin="round" />
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
              <div v-for="hex in serviceHexagonsTop" :key="hex.id" class="services-hex-wrapper"
                :style="{ animationDelay: hex.floatDelay }">
                <RouterLink :to="hex.link" class="services-hex-card" :aria-label="hex.fullTitle">
                  <img :src="hex.img" :alt="hex.fullTitle" class="services-hex-card__img" loading="lazy" />
                  <div class="services-hex-card__overlay" aria-hidden="true">
                    <span class="services-hex-card__text">
                      <span v-for="(line, lineIdx) in hex.lines" :key="lineIdx" class="services-hex-card__text-line">
                        {{ line }}
                      </span>
                    </span>
                  </div>
                </RouterLink>
              </div>
            </div>

            <!-- Bottom Row (2 Hexagons in RTL) -->
            <div class="services-hex-row services-hex-row--bottom">
              <div v-for="hex in serviceHexagonsBottom" :key="hex.id" class="services-hex-wrapper"
                :style="{ animationDelay: hex.floatDelay }">
                <RouterLink :to="hex.link" class="services-hex-card" :aria-label="hex.fullTitle">
                  <img :src="hex.img" :alt="hex.fullTitle" class="services-hex-card__img" loading="lazy" />
                  <div class="services-hex-card__overlay" aria-hidden="true">
                    <span class="services-hex-card__text">
                      <span v-for="(line, lineIdx) in hex.lines" :key="lineIdx" class="services-hex-card__text-line">
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

    <!-- 4 Steps Section (Desktop - 5 Matching Figma Node 14-1138) -->
    <section class="steps-section" data-name="Desktop - 5">
      <!-- Watermark logo in background -->
      <div class="steps-section__watermark" aria-hidden="true"></div>

      <div class="container steps-section__container">
        <!-- Frame 84: Info & Action (Right side in RTL) -->
        <div class="steps-section__intro" data-name="Frame 84">
          <div class="steps-section__heading-wrap" data-name="Frame 127">
            <h2 class="steps-section__title" data-name="أربع خطوات نحو القمة">
              أربع خطوات نحو القمة
            </h2>
            <div class="steps-section__accent-bar" data-name="Background" aria-hidden="true"></div>
          </div>

          <p class="steps-section__desc" data-name="Paragraph">
            رحلة هندسية دقيقة ننفذها باحترافية، بدءاً من دراسة المخططات حتى الفحص والتشغيل التجريبي لتسليم
            منظومة متكاملة تضمن راحة بالك. </p>

          <AppButton to="/contact" variant="primary" size="lg" class="steps-btn" data-name="Button">
            احجز الآن
          </AppButton>
        </div>

        <!-- Frame 110: 4 Stepping Cards (Left side in RTL) -->
        <div class="steps-section__cards" data-name="Frame 110">
          <div v-for="(step, idx) in steps" :key="idx" class="step-card" :class="`step-card--${idx + 1}`"
            :data-name="`Frame ${85 + idx}`">
            <div class="step-card__icon">
              <!-- Card 1: التخطيط والدراسة (search) -->
              <svg v-if="idx === 0" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#D6214E"
                stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <!-- Card 2: التصميم والنمذجة (cube) -->
              <svg v-else-if="idx === 1" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#D6214E"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <!-- Card 3: التوريد والتركيب (hvac) -->
              <svg v-else-if="idx === 2" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#D6214E"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 4v4" />
                <path d="M12 16v4" />
                <path d="M4 12h4" />
                <path d="M16 12h4" />
              </svg>
              <!-- Card 4: الاختبار والتشغيل (check circle) -->
              <svg v-else width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#D6214E" stroke-width="2.2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story Teaser (Desktop - 10 About Section Matching Figma Node 14-1294) -->
    <section class="home-about-teaser" data-name="Desktop - 10">
      <div class="container home-about-teaser__container">
        <div class="home-about-card" data-name="Frame 115">
          <!-- Text Content Block (Container) - Right side in RTL -->
          <div class="home-about-card__text" data-name="Container">
            <div class="home-about-heading-wrap">
              <h2 class="home-about-card__title" data-name="Heading 2">
                <span class="home-about-title-prefix" data-name="من نحن:">من نحن:</span>
                <span class="home-about-title-brand" data-name="مؤسسة سهم القمة">مؤسسة سهم القمة</span>
              </h2>
              <div class="home-about-accent-bar" data-name="Background" aria-hidden="true"></div>
            </div>

            <p class="home-about-card__desc" data-name="Paragraph">
              مؤسسة سهم القمة لأنظمة الأمن والسلامة هي الذراع الاستشاري والتنفيذي لمجموعة الفسطاط، المزوّد الهندسي
              الثابت منذ 1989 لخدمات الميكانيكا والكهرباء والسباكة (MEP). ننطلق من الرياض بفريق عريق يغطي المشاريع
              السكنية والفندقية والطبية والتعليمية.
            </p>

            <div class="home-about-subsections" data-name="Container">
              <div class="home-about-subsection" data-name="Container">
                <h3 class="home-about-sub-title" data-name="Heading 3">رؤيتنا الهندسية</h3>
                <p class="home-about-sub-desc">
                  أن نكون منارة التميز الأولى في حلول السلامة والاستشارات الهندسية المتكاملة، مع تحقيق أعلى معدلات
                  الكفاءة الإنشائية ومطابقة المعايير الدولية.
                </p>
              </div>
              <div class="home-about-subsection" data-name="Container">
                <h3 class="home-about-sub-title" data-name="Heading 3">رسالتنا</h3>
                <p class="home-about-sub-desc">
                  تمكين شركائنا بحلول هندسية موثوقة تحد من المخاطر وتقلل التكاليف التشغيلية، مع بناء علاقات شراكة طويلة
                  الأجل أساسها المصداقية والجودة.
                </p>
              </div>
            </div>
          </div>

          <!-- Media Block (Frame 114) - Left side in RTL -->
          <div class="home-about-card__media" data-name="Frame 114">
            <!-- Decorative Offset Red Frame (Rectangle 5) -->
            <div class="home-about-card__frame-border" data-name="Rectangle 5" aria-hidden="true"></div>

            <!-- Front Image Frame (Frame 113) -->
            <div class="home-about-card__image-container" data-name="Frame 113">
              <img src="/assets/villa.jpg" alt="مقر ومشاريع مؤسسة سهم القمة" class="home-about-card__img" loading="lazy"
                data-name="villa 1" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section Matching Figma Desktop - 11 -->
    <section class="home-stats-section">
      <div class="container">
        <div class="home-stats-header">
          <h2 class="home-stats-title">أرقام تتحدث عن <span class="highlight-red">خبرتنا</span></h2>
          <p class="home-stats-subtitle">
            أكثر من ثلاثة عقود من التنفيذ في المباني السكنية والفندقية والصحية والتعليمية.
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
    <section class="differentiators-section">
      <div class="container differentiators-section__container">
        <div class="differentiators-section__header">
          <h2 class="differentiators-section__main-title"><span class="highlight-red">ما يميّزنا</span> في قطاع
            الانشاءات والسلامة</h2>
          <p class="differentiators-section__title">
            شريك هندسي يفهم تطلعاتك، يخطط باحترافية، وينفذ بدقة متناهية تحمي استثماراتك.
          </p>
        </div>

        <div class="differentiators-section__list">
          <div v-for="item in differentiators" :key="item.id" class="diff-row"
            :class="{ 'diff-row--reverse': item.reverse }">
            <!-- Content: On Right for normal row in RTL -->
            <div class="diff-row__content">
              <div class="diff-row__title-wrap">
                <h3 class="diff-row__title">{{ item.title }}</h3>
                <div class="diff-row__accent-line" aria-hidden="true"></div>
              </div>
              <p class="diff-row__desc">{{ item.desc }}</p>
            </div>

            <!-- 3D Textured Number Image: On Left for normal row in RTL -->
            <div class="diff-row__media">
              <div class="diff-row__ellipse" :class="`ellipse-${item.ellipseId}`" aria-hidden="true"></div>
              <img :src="item.img" :alt="item.id" class="diff-row__num-img" />
              <span class="diff-row__num-label">{{ item.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section Matching Figma Node 25:200 -->
    <section class="home-projects-section" id="projects">
      <div class="container">
        <div class="home-projects-header">
          <h2 class="home-projects-title">
            <span class="title-navy">نماذج من </span><span class="highlight-crimson">مشاريعنا</span><span
              class="title-navy"> الرائدة</span>
          </h2>
          <div class="home-projects-title-bar" aria-hidden="true"></div>
          <p class="home-projects-subtitle">
            محفظة أعمال متنوعة تضم كبرى المدارس والمستشفيات والمنتجعات السياحية في السعودية ومصر<br
              class="desktop-break" />والإمارات.
          </p>
        </div>

        <!-- Country Filters -->
        <div class="home-projects-filters" role="tablist" aria-label="تصفية المشاريع حسب الدولة">
          <button v-for="filter in projectCountryFilters" :key="filter.id" type="button" role="tab"
            :aria-selected="activeProjectCountry === filter.id" class="home-projects-filter-btn"
            :class="{ 'is-active': activeProjectCountry === filter.id }" @click="activeProjectCountry = filter.id">
            {{ filter.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div v-if="filteredProjects.length > 0" class="home-projects-grid">
          <article v-for="project in filteredProjects" :key="project.id" class="home-project-card">
            <div class="home-project-card__img-wrap">
              <img :src="project.image" :alt="project.title" class="home-project-card__img" loading="lazy" />
              <span class="home-project-card__badge">{{ project.country }}</span>
            </div>
            <div class="home-project-card__body">
              <h3 class="home-project-card__title">{{ project.title }}</h3>
              <div class="home-project-card__client">{{ project.client }}</div>
              <p class="home-project-card__desc">{{ project.desc }}</p>
            </div>
          </article>
        </div>

        <!-- Empty state if selected country has no projects yet -->
        <div v-else class="home-projects-empty">
          <p class="home-projects-empty__text">مشاريعنا في هذه الدولة قيد التحديث والإضافة قريباً.</p>
          <AppButton to="/contact" variant="outline" size="sm">تواصل معنا لمعرفة المزيد</AppButton>
        </div>

        <!-- Bottom CTA Button matching Figma Instance Button 53:970 -->
        <div class="home-projects-cta">
          <AppButton to="/services#projects" variant="primary" class="home-projects-cta-btn">
            عرض كل المشاريع
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Partners Logos Strip Matching Figma Frame 160 -->
    <section class="partners-section" data-name="Frame 160">
      <div class="container">
        <div class="partners-header">
          <h2 class="partners-title">عملاء <span class="highlight-red">يثقون بنا</span></h2>
          <p class="partners-subtitle">
            نعتز بالتعاون مع أسماء رائدة في القطاعات العقارية والتجارية والصناعية والخدمية
          </p>
        </div>
      </div>

      <!-- Partners Slider Marquee -->
      <div class="partners-strip partners-slider-wrapper" dir="ltr" aria-label="شركاء النجاح">
        <div class="partners-track">
          <!-- First set of logos -->
          <div v-for="(partner, pIdx) in partnerLogos" :key="'p1-' + pIdx" class="partner-card">
            <img :src="partner.src" :alt="partner.name" class="partner-card__img" loading="lazy" width="200"
              height="100" />
          </div>
          <!-- Duplicate set for seamless infinite loop -->
          <div v-for="(partner, pIdx) in partnerLogos" :key="'p2-' + pIdx" class="partner-card" aria-hidden="true">
            <img :src="partner.src" :alt="partner.name" class="partner-card__img" loading="lazy" width="200"
              height="100" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Banner & Info Section Matching Figma Node 29:399 -->
    <section class="home-contact-section" id="contact">
      <!-- Frame 142: Hero Banner -->
      <div class="home-contact-section__hero">
        <div class="container home-contact-section__hero-content">
          <h2 class="home-contact-section__title"><span class="highlight-red">تواصل</span> معنا</h2>
          <p class="home-contact-section__subtitle">
            أخبرنا بتفاصيل مشروعك وسنعود إليك بخطة واضحة تناسب أهدافك، خلال 24 ساعة
          </p>
          <AppButton to="/contact" variant="primary" class="home-contact-hero-btn">
            احجز الآن
          </AppButton>
        </div>
      </div>

      <!-- Frame 145: 3 Contact Columns directly below banner -->
      <div class="home-contact-section__info-section">
        <div class="container">
          <div class="home-contact-section__cards">
            <!-- Column 1: زورونا (Right in RTL) -->
            <div class="contact-box">
              <div class="contact-box__icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#D6214E" stroke-width="2.3"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15.5L16.4 4.2a2.3 2.3 0 0 1 3.2 0L32 15.5V31a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V15.5z" />
                  <path d="M13.5 33V23a4.5 4.5 0 0 1 9 0v10" />
                </svg>
              </div>
              <h3 class="contact-box__title">زورونا</h3>
              <p class="contact-box__desc">يسعدنا استقبالكم في مكتبنا خلال ساعات<br />العمل</p>
              <div class="contact-box__detail-wrap">
                <div class="contact-box__addresses">
                  <p class="contact-box__detail">المملكة العربية السعودية ,الرياض, 7455 الحسين بن<br />علي 3272</p>
                  <p class="contact-box__detail">مصر,القاهرة, نزهة الجديدة, شيراتون, عبد الحميد بدوي</p>
                </div>
                <div class="contact-box__line" aria-hidden="true"></div>
              </div>
            </div>

            <!-- Column 2: اتصلوا بنا (Middle) -->
            <div class="contact-box">
              <div class="contact-box__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D6214E" stroke-width="2.3"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
              </div>
              <h3 class="contact-box__title">اتصلوا بنا</h3>
              <p class="contact-box__desc">فريقنا متاح من الأحد إلى الخميس خلال<br />ساعات العمل</p>
              <div class="contact-box__detail-wrap">
                <div class="contact-box__phones">
                  <div class="contact-box__phones-row">
                    <a href="tel:+966595910235" class="contact-box__detail contact-box__link" dir="ltr">+966 59 591
                      0235</a>
                    <a href="tel:+966568909193" class="contact-box__detail contact-box__link" dir="ltr">+966 56 890
                      9193</a>
                  </div>
                  <div class="contact-box__phones-row">
                    <a href="tel:+201119778112" class="contact-box__detail contact-box__link" dir="ltr">+20 111 977
                      8112</a>
                    <a href="tel:+201009507330" class="contact-box__detail contact-box__link" dir="ltr">+20 100 950
                      7330</a>
                  </div>
                </div>
                <div class="contact-box__line" aria-hidden="true"></div>
              </div>
            </div>

            <!-- Column 3: راسلونا (Left in RTL) -->
            <div class="contact-box">
              <div class="contact-box__icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D6214E" stroke-width="2.3"
                  stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 class="contact-box__title">راسلونا</h3>
              <p class="contact-box__desc">أرسلوا لنا وسنعاود الرد خلال يوم عمل واحد</p>
              <div class="contact-box__detail-wrap">
                <div class="contact-box__emails">
                  <a href="mailto:mahmoud@etc-foustat.net" class="contact-box__detail contact-box__link" dir="ltr">
                    mahmoud@etc-foustat.net
                  </a>
                  <a href="mailto:ahmed@etc-foustat.net" class="contact-box__detail contact-box__link" dir="ltr">
                    ahmed@etc-foustat.net
                  </a>
                </div>
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
  background: linear-gradient(to left,
      rgba(9, 22, 39, 0.72) 0%,
      rgba(9, 22, 39, 0.45) 50%,
      rgba(9, 22, 39, 0.6) 100%);
}

@media (max-width: 1023px) {
  .hero-section {
    min-height: auto;
    padding-top: 130px;
    padding-bottom: 40px;
    overflow: visible;
  }
}

@media (max-width: 767px) {
  .hero-section {
    padding-top: 110px;
    padding-bottom: 32px;
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
  background: linear-gradient(to left,
      rgba(9, 22, 39, 0.72) 0%,
      rgba(9, 22, 39, 0.45) 50%,
      rgba(9, 22, 39, 0.6) 100%);
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
  color: #DEDEDE;
  /* Foundation /Grey/Light :active */
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
  color: #FBE9ED;
  /* Foundation /Red/Light */
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
  color: #FFFFFF !important;
  /* Brand/White */
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
  border: 1.5px solid #FBE9ED !important;
  /* Foundation /Red/Light */
  border-radius: 12px !important;
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #FBE9ED !important;
  /* Foundation /Red/Light */
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
  position: relative;
  bottom: auto;
  top: auto;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  margin: 36px 0 -90px;
  padding: 0;
}

@media (min-width: 1024px) {
  .hero-features {
    position: absolute;
    bottom: -65px;
    margin: 0;
  }
}

.hero-features__bar {
  background: rgba(14, 20, 27, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  box-shadow: none;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

@media (min-width: 480px) {
  .hero-features__bar {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
    gap: 12px;
  }
}

@media (min-width: 1024px) {
  .hero-features__bar {
    grid-template-columns: repeat(4, 1fr);
    height: 145px;
    border-radius: 28px;
    padding: 0;
    gap: 0;
  }
}

.hero-features__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 14px 16px;
}

@media (min-width: 1024px) {
  .hero-features__item {
    gap: 16px;
    padding: 0 20px;
  }
}

.hero-features__icon-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-features__text {
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 24px;
  text-align: right;
  white-space: pre-line;
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
    top: 26px;
    bottom: 26px;
    width: 1px;
    background: rgba(255, 255, 255, 0.25);
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

@media (max-width: 1023px) {
  .services-overview {
    padding-top: 110px;
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

@media (max-width: 767px) {
  .services-overview__container {
    padding: 0 16px;
    gap: 28px;
  }
}

/* Differentiators (Why Us - Desktop - 6) */
.differentiators-section {
  padding: 80px 0;
  background-color: #F6F0EC;
}

.differentiators-section__container {
  max-width: 1248px;
  padding: 0 24px;
}

@media (max-width: 767px) {
  .differentiators-section__container {
    padding: 0 16px;
  }
}

.differentiators-section__header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.differentiators-section__main-title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 60px;
  color: #222F6D;
  margin: 0;
  border: none;
  padding: 0;
}

.differentiators-section__title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #434343;
  line-height: 27px;
  margin: 0;
}

.differentiators-section__title .highlight-navy {
  color: inherit;
  font-weight: inherit;
}

.differentiators-section__list {
  display: flex;
  flex-direction: column;
  max-width: 1248px;
  margin: 0 auto;
  gap: 0;
}

.diff-row {
  display: flex;
  align-items: center;
  gap: 64px;
  flex-direction: row-reverse;

  padding: 32px 0;
  border: 0;
}

.diff-row:last-child {
  border-bottom: none;
}



@media (max-width: 768px) {
  .differentiators-section__header {
    margin-bottom: 36px;
    gap: 12px;
  }

  .differentiators-section__main-title {
    font-size: clamp(26px, 6vw, 32px);
    line-height: 1.35;
  }

  .differentiators-section__title {
    font-size: 16px;
    line-height: 26px;
  }

  .diff-row {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 32px 0;
  }

  .diff-row__media {
    width: 180px;
    height: 180px;
  }

  .diff-row__num-img {
    width: 180px;
  }

  .diff-row__content {
    width: 100%;
    max-width: 100%;
  }

  .differentiators-section {
    min-height: auto;
    padding: 60px 0;
  }
}

.diff-row__media {
  position: relative;
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diff-row__ellipse {
  display: none;
}

.diff-row__num-label {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  font-size: 1px;
}

.diff-row__num-img {
  width: 240px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
  animation: visual-float 6s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.diff-row:nth-child(even) .diff-row__num-img {
  animation-delay: -3s;
}

@keyframes hero-background-drift {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
}

@keyframes visual-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {

  .hero-section__bg-img,
  .services-hex-wrapper,
  .diff-row__num-img {
    animation: none;
  }
}

.diff-row__content {
  flex: 1;
  width: auto;
  max-width: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.diff-row__title-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .diff-row__title-wrap {
    align-items: center;
  }
}

.diff-row__title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  color: #1A3E6F;
}

.diff-row__accent-line {
  width: 100px;
  height: 4px;
  background-color: var(--color-primary);
  border-radius: 2px;
  margin-top: 6px;
}

.diff-row__desc {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #4A4A4A;
  line-height: 24px;
  max-width: none;
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
  font-size: clamp(26px, 5vw, 40px);
  font-weight: 800;
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  color: #102543;
  line-height: 1.45;
  max-width: 771px;
}

.section-title span {
  font-weight: 800;
}

.section-subtitle {
  font-size: 15px;
  color: #4A4A4A;
  font-weight: 500;
  line-height: 1.6;
}

.services-overview__visual {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  position: relative;
  width: 100%;
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
  width: 100%;
  max-width: 760px;
}

.services-hex-row--bottom>div:nth-of-type(1)>.services-hex-card {
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

  0%,
  100% {
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

/* ==========================================================================
   4 Steps Section (Desktop - 5 Matching Figma Node 14-1138)
   ========================================================================== */
.steps-section {
  background-color: #17202B;
  min-height: 722px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  box-sizing: border-box;
  width: 100%;
}

/* Watermark: shield watermark on the right side */
.steps-section__watermark {
  position: absolute;
  width: 862px;
  height: 1108px;
  right: -100px;
  top: -260px;
  background-image: url('/assets/shield-watermark.png');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

.steps-section__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

/* Frame 84: Intro Column (width: 335px, height: 388px) - Right side in RTL */
.steps-section__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  gap: 40px;
  width: 100%;
  max-width: 335px;
  flex: 0 0 335px;
  box-sizing: border-box;
}

.steps-section__heading-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 268px;
}

/* أربع خطوات نحو القمة */
.steps-section__title {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  color: #FBE9ED;
  margin: 0;
  text-align: right;
}

/* Red accent bar (Background: width 65px, height 4px, background #D81B4D) */
.steps-section__accent-bar {
  width: 65px;
  height: 4px;
  background-color: #D81B4D;
  border-radius: 4px;
}

/* Subtitle: Cairo 600, 18px, line-height 27px, color #EFEFEF */
.steps-section__desc {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #EFEFEF;
  margin: 0;
  text-align: right;
  max-width: 335px;
}

/* Button: 335px x 56px, background #D6214E, border-radius 10px */
.steps-btn {
  width: 335px !important;
  height: 56px !important;
  background: #D6214E !important;
  color: #FFFFFF !important;
  border-radius: 10px !important;
  border: none !important;
  font-family: 'Tajawal', var(--font-family, sans-serif) !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  box-shadow: 0 4px 14px rgba(214, 33, 78, 0.25) !important;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.steps-btn:hover {
  background: #BF1B44 !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(214, 33, 78, 0.4) !important;
}

/* ==========================================================================
   Frame 110: 4 Stepping Cards (width: 824px, height: 422px)
   ========================================================================== */
.steps-section__cards {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 824px;
  flex: 0 0 824px;
  box-sizing: border-box;
}

/* Card: width 188px, height 317px, background rgba(28, 28, 28, 0.15) */
.step-card {
  width: 188px;
  min-width: 188px;
  height: 317px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  padding: 24px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.step-card:hover {
  transform: translateY(-4px);
  border-color: rgba(214, 33, 78, 0.35);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

/* Staircase offsets matching Figma:
   In RTL:
   Card 1 (التخطيط والدراسة): 0px (highest)
   Card 2 (التصميم والنمذجة): 35px
   Card 3 (التوريد والتركيب): 70px
   Card 4 (الاختبار والتشغيل): 105px (lowest)
*/
.step-card--1 {
  margin-top: 0px;
}

.step-card--2 {
  margin-top: 35px;
}

.step-card--3 {
  margin-top: 70px;
}

.step-card--4 {
  margin-top: 105px;
}

.step-card__icon {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Card Title: Cairo 700, 18px, line-height 24px, color #FFFFFF */
.step-card__title {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  width: 100%;
}

/* Card Desc: Cairo 400, 14px, line-height 21px, color #B9BFD0 */
.step-card__desc {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #B9BFD0;
  text-align: center;
  margin: 0;
  width: 100%;
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1279px) {
  .steps-section__container {
    gap: 24px;
  }

  .steps-section__intro {
    max-width: 280px;
    flex: 0 0 280px;
    gap: 24px;
  }

  .steps-btn {
    width: 100% !important;
  }

  .steps-section__cards {
    gap: 14px;
    max-width: 100%;
    flex: 1 1 0;
  }

  .step-card {
    flex: 1 1 0;
    width: auto;
    min-width: 0;
    padding: 20px 12px;
  }
}

@media (max-width: 1080px) {
  .steps-section {
    min-height: auto;
    padding: 70px 0;
  }

  .steps-section__container {
    flex-direction: column;
    align-items: center;
    gap: 44px;
  }

  .steps-section__intro {
    max-width: 600px;
    flex: none;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .steps-section__heading-wrap {
    align-items: center;
    max-width: 100%;
  }

  .steps-section__title {
    text-align: center;
  }

  .steps-section__desc {
    text-align: center;
    max-width: 500px;
  }

  .steps-btn {
    width: 280px !important;
  }

  .steps-section__cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 680px;
    width: 100%;
    flex: none;
    gap: 20px;
  }

  .step-card {
    width: 100%;
    min-width: 0;
    height: auto;
    min-height: 260px;
  }

  .step-card--1,
  .step-card--2,
  .step-card--3,
  .step-card--4 {
    margin-top: 0 !important;
  }
}

@media (max-width: 768px) {
  .steps-section {
    padding: 60px 0;
  }

  .steps-section__container {
    padding: 0 16px;
  }

  .steps-section__title {
    font-size: 32px;
    line-height: 46px;
  }

  .steps-btn {
    width: 100% !important;
    max-width: 320px;
  }

  .steps-section__cards {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .steps-section__cards {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .step-card {
    min-height: auto;
    padding: 24px 16px;
  }
}

/* Projects Showcase Section Matching Figma Node 25:200 */
.home-projects-section {
  padding: 80px 0 90px;
  background-color: #FFFFFF;
  position: relative;
  scroll-margin-top: 90px;
}

.home-projects-section .container {
  max-width: 1248px;
  margin: 0 auto;
}

/* Header */
.home-projects-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
}

.home-projects-title {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 40px;
  font-weight: 800;
  line-height: 1.5;
  margin: 0;
  text-align: center;
}

.home-projects-title .title-navy {
  color: #222F6D;
}

.home-projects-title .highlight-crimson {
  color: #D81B4D;
}

.home-projects-title-bar {
  width: 220px;
  height: 4px;
  background-color: #D81B4D;
  border-radius: 4px;
  margin: 14px auto 0;
}

.home-projects-subtitle {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 18px;
  font-weight: 400;
  color: #434343;
  line-height: 27px;
  margin: 14px auto 0;
  max-width: 760px;
  text-align: center;
}

.desktop-break {
  display: inline;
}

/* Filter Tabs */
.home-projects-filters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.home-projects-filter-btn {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 10px 24px;
  border-radius: 99px;
  border: 2px solid #E2D8D2;
  background-color: #FFFFFF;
  color: #222F6D;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
}

.home-projects-filter-btn:hover {
  border-color: #D81B4D;
  color: #D81B4D;
}

.home-projects-filter-btn.is-active {
  background-color: #D81B4D;
  border-color: #D81B4D;
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(216, 27, 77, 0.25);
}

/* Grid */
.home-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

/* Card */
.home-project-card {
  background: #FFFFFF;
  border: 1px solid #E2D8D2;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.home-project-card:hover {
  transform: translateY(-5px);
  border-color: #D81B4D;
  box-shadow: 0 16px 32px rgba(216, 27, 77, 0.12);
}

.home-project-card__img-wrap {
  position: relative;
  height: 252px;
  width: 100%;
  overflow: hidden;
  background-color: #F5F0EC;
}

.home-project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.home-project-card:hover .home-project-card__img {
  transform: scale(1.05);
}

.home-project-card__badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #FFFFFF;
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  padding: 3px 14px 4px;
  border-radius: 99px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 2;
}

.home-project-card__body {
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: right;
  flex: 1;
}

.home-project-card__title {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 800;
  color: #1A3E6F;
  line-height: 24px;
  margin: 0;
}

.home-project-card__client {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 14px;
  font-weight: 700;
  color: #D6214E;
  line-height: 21px;
  margin: 0;
}

.home-project-card__desc {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 12px;
  font-weight: 400;
  color: #434343;
  line-height: 18px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Empty State */
.home-projects-empty {
  text-align: center;
  padding: 60px 20px;
  background-color: #FAF9F6;
  border-radius: 16px;
  border: 1px dashed #E2D8D2;
  margin-bottom: 48px;
}

.home-projects-empty__text {
  font-family: var(--font-cairo, "Cairo", system-ui, sans-serif);
  font-size: 16px;
  color: #6D6F73;
  margin-bottom: 20px;
}

/* CTA */
.home-projects-cta {
  display: flex;
  justify-content: center;
}

.home-projects-cta-btn.app-btn {
  width: 338px;
  max-width: 100%;
  height: 56px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #D6214E;
  color: #FFFFFF;
}

.home-projects-cta-btn.app-btn:hover {
  background-color: #BD1740;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(214, 33, 78, 0.25);
}

/* Responsive */
@media (max-width: 1024px) {
  .home-projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .home-projects-section {
    padding: 60px 0;
  }

  .home-projects-title {
    font-size: 28px;
    line-height: 1.4;
  }

  .home-projects-title-bar {
    width: 160px;
    margin-top: 10px;
  }

  .home-projects-subtitle {
    font-size: 15px;
    line-height: 24px;
  }

  .desktop-break {
    display: none;
  }

  .home-projects-filters {
    gap: 8px;
  }

  .home-projects-filter-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .home-projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .home-project-card__img-wrap {
    height: 220px;
  }

  .home-projects-cta-btn.app-btn {
    width: 100%;
    max-width: 338px;
  }
}

/* Home About Teaser Matching Desktop - 10 (Node 14-1294, Frame 115) */
.home-about-teaser {
  background-color: #F6F0EC;
  min-height: 724px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  box-sizing: border-box;
  width: 100%;
}

.home-about-teaser__container {
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

.home-about-card {
  width: 100%;
  max-width: 1248px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Container (Text Column) - width: 583px */
.home-about-card__text {
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

.home-about-heading-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
}

/* Heading 2 */
.home-about-card__title {
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

.home-about-title-prefix {
  color: #102543;
}

.home-about-title-brand {
  color: #D6214E;
}

/* Red accent bar (Background: width 294px, height 4px, background #D81B4D) */
.home-about-accent-bar {
  width: 294px;
  height: 4px;
  background-color: #D81B4D;
  border-radius: 4px;
}

/* Paragraph: Cairo 600, 18px, line-height 27px, color #434343 */
.home-about-card__desc {
  width: 100%;
  max-width: 583px;
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #434343;
  margin: 0;
  text-align: right;
}

/* Subsections Container: gap 21.99px, padding-top 6px */
.home-about-subsections {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 6px 0 0;
  margin: 0;
  width: 100%;
  max-width: 583px;
}

.home-about-subsection {
  display: flex;
  flex-direction: column;
  gap: 4.8px;
  border: none;
  padding: 0;
  width: 100%;
}

/* Heading 3: Cairo 800, 22px, line-height 32px, color #1A3E6F */
.home-about-sub-title {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-size: 22px;
  font-weight: 800;
  line-height: 32px;
  color: #1A3E6F;
  margin: 0;
  text-align: right;
}

/* Paragraph: Cairo 400, 16px, line-height 24px, color #595959 */
.home-about-sub-desc {
  font-family: 'Cairo', var(--font-cairo, sans-serif);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #595959;
  margin: 0;
  text-align: right;
}

/* ==========================================================================
   Frame 114: Media / Image Column (width: 638px, height: 390px)
   ========================================================================== */
.home-about-card__media {
  position: relative;
  width: 638px;
  height: 390px;
  flex: 0 0 638px;
  box-sizing: border-box;
}

/* Rectangle 5: Red Border Frame (offset by 24px, 23px) */
.home-about-card__frame-border {
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
.home-about-card__image-container {
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
.home-about-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
}

/* Responsive Breakpoints */
@media (max-width: 1279px) {
  .home-about-card {
    gap: 24px;
  }

  .home-about-card__text {
    max-width: 520px;
    flex: 1 1 440px;
  }

  .home-about-card__media {
    width: 520px;
    height: 320px;
    flex: 0 0 520px;
  }

  .home-about-card__frame-border,
  .home-about-card__image-container {
    width: 496px;
    height: 297px;
  }
}

@media (max-width: 1024px) {
  .home-about-teaser {
    min-height: auto;
    padding: 60px 0 80px;
  }

  .home-about-card {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .home-about-card__text {
    max-width: 638px;
    flex: none;
    align-items: flex-start;
  }

  .home-about-card__media {
    width: 100%;
    max-width: 614px;
    height: auto;
    aspect-ratio: 638 / 390;
    flex: none;
    margin-top: 8px;
  }

  .home-about-card__frame-border,
  .home-about-card__image-container {
    width: calc(100% - 24px);
    height: calc(100% - 23px);
  }
}

@media (max-width: 680px) {
  .home-about-teaser {
    padding: 50px 0 60px;
  }

  .home-about-teaser__container {
    padding: 0 16px;
  }

  .home-about-card__title {
    font-size: 28px;
    line-height: 40px;
    flex-wrap: wrap;
  }

  .home-about-accent-bar {
    width: 200px;
  }

  .home-about-card__desc {
    font-size: 16px;
    line-height: 26px;
  }

  .home-about-card__media {
    min-height: 220px;
  }
}

/* Stats Section Matching Figma Desktop - 11 */
.home-stats-section {
  background-color: #17202B;
  padding: 80px 0;
  color: #FFFFFF;
}

.home-stats-section .container {
  width: 100%;
  max-width: 1248px;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}

.home-stats-header {
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.home-stats-title {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.4;
  margin: 0;
}

.home-stats-subtitle {
  font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  font-size: clamp(15px, 2.5vw, 18px);
  color: #EFEFEF;
  font-weight: 600;
  max-width: 820px;
  margin: 0 auto;
  line-height: 1.6;
}

.home-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 260px);
  gap: 20px;
  row-gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

@media (max-width: 1140px) {
  .home-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 260px));
  }
}

@media (max-width: 600px) {
  .home-stats-section {
    padding: 60px 0;
  }

  .home-stats-section .container {
    padding: 0 16px;
  }

  .home-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}

@media (max-width: 359px) {
  .home-stats-grid {
    grid-template-columns: 1fr;
  }
}

.home-stat-card {
  width: 100%;
  max-width: 260px;
  min-height: 118px;
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
  margin: 0 auto;
}

.home-stat-card:hover {
  border-color: #D6214E;
  background: rgba(214, 33, 78, 0.1);
  transform: translateY(-4px);
}

.home-stat-val {
  width: 100%;
  max-width: 226px;
  display: inline-block;
  text-align: center;
  font-family: "Cairo", Tajawal, system-ui, sans-serif;
  font-size: clamp(22px, 5vw, 30px);
  line-height: 1.45;
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

.home-stats-grid>.home-stat-card:nth-child(4) .home-stat-val,
.home-stats-grid>.home-stat-card:nth-child(5) .home-stat-val,
.home-stats-grid>.home-stat-card:nth-child(8) .home-stat-val {
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
  padding: 80px 0 90px;
  background-color: #17202B;
  border: none;
  overflow: hidden;
  position: relative;
}

.partners-section .container {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto 44px;
}

.partners-header {
  text-align: center;
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

/* Slider Full-Bleed Infinite Marquee */
.partners-slider-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 12px 0;
  mask-image: linear-gradient(to right,
      transparent 0%,
      black 6%,
      black 94%,
      transparent 100%);
  -webkit-mask-image: linear-gradient(to right,
      transparent 0%,
      black 6%,
      black 94%,
      transparent 100%);
}

.partners-track {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: max-content;
  animation: partners-scroll 42s linear infinite;
  will-change: transform;
}

.partners-slider-wrapper:hover .partners-track {
  animation-play-state: paused;
}

@keyframes partners-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* Partner Card matching Figma specifications (200x100px, border-radius 18px) */
.partner-card {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  flex: none;
  border-radius: 18px;
  overflow: hidden;
  background-color: #17202B;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.03));
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
  cursor: pointer;
}

.partner-card:hover {
  transform: translateY(-4px) scale(1.03);
  filter: drop-shadow(0px 10px 24px rgba(0, 0, 0, 0.4)) brightness(1.1);
}

.partner-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

@media (max-width: 768px) {
  .partners-section {
    padding: 60px 0 70px;
  }

  .partners-section .container {
    margin-bottom: 30px;
  }

  .partners-title {
    font-size: 28px;
  }

  .partners-subtitle {
    font-size: 15px;
  }

  .partner-card {
    width: 160px;
    height: 80px;
  }

  .partners-track {
    gap: 14px;
    animation-duration: 32s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partners-track {
    animation: none;
    overflow-x: auto;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 24px;
  }
}

/* Home Contact Section Matching Figma Node 29:399 */
.home-contact-section {
  position: relative;
  background-color: #FFFFFF;
  overflow: hidden;
  width: 100%;
}

/* Frame 142: Hero Banner */
.home-contact-section__hero {
  position: relative;
  height: 550px;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/blueprint.jpg') center / cover no-repeat;
}

/* Frame 143: Content Box */
.home-contact-section__hero-content {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  padding: 0 16px;
  max-width: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
}

.home-contact-section__title {
  font-family: var(--font-family, 'Tajawal', sans-serif);
  font-size: 72px;
  font-weight: 800;
  line-height: 1.15;
  color: #D6214E;
  margin: 0;
  text-shadow: none;
}

.home-contact-section__subtitle {
  font-family: var(--font-family, 'Tajawal', sans-serif);
  font-size: 22px;
  font-weight: 800;
  line-height: 33px;
  color: #FBE9ED;
  max-width: 562px;
  margin: 0;
  text-shadow: none;
}

/* Button */
.home-contact-hero-btn.app-btn {
  width: 356px;
  max-width: 100%;
  height: 56px;
  background-color: #D6214E;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: var(--font-cairo, 'Cairo', sans-serif);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  transition: all var(--transition-normal);
}

.home-contact-hero-btn.app-btn:hover {
  background-color: #BD1740;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(214, 33, 78, 0.35);
}

/* Frame 145: 3 Contact Columns directly below banner */
.home-contact-section__info-section {
  background-color: #FFFFFF;
  padding: 50px 0 60px;
}

.home-contact-section__cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 14px;
  padding: 16px 20px;
  min-height: 260px;
  flex: 1;
  box-sizing: border-box;
  position: relative;
}

/* Vertical Dividers between columns in RTL */
@media (min-width: 768px) {
  .contact-box:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    bottom: 15px;
    width: 1px;
    background-color: #ECECEC;
  }
}

.contact-box__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
}

.contact-box__icon svg {
  width: 36px;
  height: 36px;
  stroke: #D6214E;
}

.contact-box__title {
  font-family: var(--font-family, "Cairo", "Tajawal", sans-serif);
  font-size: 22px;
  font-weight: 700;
  color: #242A32;
  line-height: 1.25;
  margin: 0;
}

.contact-box__desc {
  font-family: var(--font-family, "Cairo", "Tajawal", sans-serif);
  font-size: 13.5px;
  font-weight: 400;
  color: #616161;
  line-height: 1.55;
  margin: 0;
  max-width: 270px;
}

.contact-box__detail-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
}

.contact-box__addresses {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.contact-box__phones {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.contact-box__phones-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.contact-box__emails {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.contact-box__detail {
  font-family: var(--font-family, "Cairo", "Tajawal", sans-serif);
  font-size: 13.5px;
  font-weight: 500;
  color: #D6214E;
  line-height: 1.5;
  text-align: center;
  margin: 0;
}

.contact-box__link {
  text-decoration: none;
  transition: opacity var(--transition-fast);
  display: inline-block;
}

.contact-box__link:hover {
  opacity: 0.8;
}

.contact-box__line {
  width: 26px;
  height: 2px;
  background-color: #D6214E;
  border-radius: 9999px;
  margin-top: 2px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .home-contact-section__hero {
    height: auto;
    min-height: 440px;
    padding: 70px 20px;
  }

  .home-contact-section__title {
    font-size: clamp(40px, 10vw, 56px);
  }

  .home-contact-section__subtitle {
    font-size: clamp(16px, 4.5vw, 20px);
    line-height: 1.4;
  }

  .home-contact-hero-btn.app-btn {
    width: 100%;
    max-width: 320px;
  }

  .home-contact-section__info-section {
    padding: 36px 16px;
  }

  .home-contact-section__cards {
    flex-direction: column;
    gap: 32px;
  }

  .contact-box {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: 0 0 32px;
    border-bottom: 1px solid #ECECEC;
  }

  .contact-box:not(:last-child)::after {
    display: none;
  }

  .contact-box:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

/* Desktop - 8 fidelity adjustments */
@media (min-width: 1280px) {
  .hero-section__container {
    padding-top: 51px;
  }

  .hero-section__content {
    max-width: 884px;
    gap: 40px;
  }

  .hero-section__title {
    font-size: 72px;
    line-height: 82px;
  }

  .hero-section__subtitle {
    max-width: 884px;
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
  }

  .services-overview__container {
    max-width: 913px;
    padding-inline: 0;
    gap: 20px;
  }

  .services-overview__header {
    gap: 14px;
  }

  .section-title {
    width: 771px;
  }

  .section-subtitle {
    font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
  }

  .steps-section {
    background: #17202B;
    color: #FFFFFF;
    padding: 96px 0;
  }

  .steps-section__container {
    gap: 72px;
  }

  .steps-section__intro {
    max-width: 335px;
    gap: 20px;
  }

  .steps-section__title {
    font-family: Tajawal, Cairo, system-ui, -apple-system, sans-serif;
    font-size: 40px;
    line-height: 60px;
    color: #FBE9ED;
  }

  .steps-section__desc {
    color: #EFEFEF;
    font-size: 18px;
    line-height: 27px;
  }

  .steps-btn {
    width: 335px !important;
    min-height: 56px;
    padding: 10px 26px !important;
    font-size: 16px;
    line-height: 24px;
    box-shadow: none !important;
  }

  .steps-section__cards {
    gap: 24px;
  }

  .step-card {
    min-height: 317px;
    background: rgba(28, 28, 28, 0.15);
    border: 0;
    border-radius: 12px;
    box-shadow: none;
    padding: 24px 15px;
    align-items: flex-start;
    text-align: right;
  }

  .steps-section__cards>.step-card:nth-child(2) {
    margin-top: 35px;
  }

  .steps-section__cards>.step-card:nth-child(3) {
    margin-top: 70px;
  }

  .steps-section__cards>.step-card:nth-child(4) {
    margin-top: 105px;
  }

  .step-card__icon {
    margin: 0;
  }

  .step-card__title {
    color: #FFFFFF;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
  }

  .step-card__desc {
    color: #B9BFD0;
    font-size: 14px;
    text-align: right;
  }

  .home-about-teaser {
    min-height: 724px;
    display: flex;
    align-items: center;
  }

  .home-about-card {
    gap: 51px;
  }

  .home-about-card__text {
    gap: 16px;
  }

  .home-about-card__desc {
    line-height: 27px;
  }

  .home-about-sub-desc {
    font-family: "Cairo", Tajawal, system-ui, -apple-system, sans-serif;
  }

  .home-about-card__media {
    width: 638px;
    height: 390px;
    border-radius: 16px;
  }

  .home-about-card__img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .home-stats-subtitle {
    line-height: 27px;
  }

}
</style>
