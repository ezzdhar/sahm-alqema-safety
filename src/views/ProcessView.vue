<script setup>
import { ref } from 'vue';

const expandedStep = ref(null);

const toggleStep = (index) => {
  expandedStep.value = expandedStep.value === index ? null : index;
};

const steps = [
  {
    number: '01',
    title: 'التخطيط والدراسة',
    desc: 'نفهم متطلبات مشروعك وموقعه ونحدد الأنظمة المناسبة والتكلفة والجدول الزمني.',
    deliverablesTitle: 'ماذا نقدم في هذه المرحلة',
    deliverablesCol1: [
      'دراسة شاملة لمتطلبات الموقع والمشروع',
      'تحديد الأنظمة الكهروميكانيكية MEP الأنسب',
    ],
    deliverablesCol2: [
      'تقدير التكاليف الأولية وإعداد الميزانية',
      'وضع جدول زمني معتمد لمراحل التنفيذ',
    ],
  },
  {
    number: '02',
    title: 'التصميم والنمذجة',
    desc: 'نصمم أنظمة MEP ونمنجها بتقنية BIM لننسق التخصصات قبل بدء التركيب.',
    deliverablesTitle: 'ماذا نقدم في هذه المرحلة',
    deliverablesCol1: [
      'تصميم مخططات MEP التنفيذية (Shop Drawings)',
      'بناء النموذج ثلاثي الأبعاد بتقنية BIM',
    ],
    deliverablesCol2: [
      'كشف وحل التعارضات الهندسية (Clash Detection)',
      'مطابقة التصاميم مع الكود السعودي والمعايير الدولية',
    ],
  },
  {
    number: '03',
    title: 'التوريد والتركيب',
    desc: 'نورد المعدات ونركب الأنظمة بفرق خبرة وإشراف ميداني يحافظ على الجودة.',
    deliverablesTitle: 'ماذا نقدم في هذه المرحلة',
    deliverablesCol1: [
      'توريد المعدات والمواد المعتمدة والمطابقة للمواصفات',
      'تنفيذ التركيبات والتمديدات بفرق فنية متخصصة',
    ],
    deliverablesCol2: [
      'إشراف هندسي ميداني صارم لضمان الجودة والسلامة',
      'تقارير إنجاز دورية وتوثيق فوتوغرافي مستمر',
    ],
  },
  {
    number: '04',
    title: 'الاختبار والتشغيل',
    desc: 'نختبر كل نظام ونشغله ونسلمه جاهزاً للاستخدام مع صيانة تحافظ علي كفاءته.',
    deliverablesTitle: 'ماذا نقدم في هذه المرحلة',
    deliverablesCol1: [
      'فحوصات الأداء واختبارات التشغيل التجريبي (Testing & Commissioning)',
      'معايرة وضبط توازن تدفق الهواء والمياه والكهرباء',
    ],
    deliverablesCol2: [
      'إعداد وتسليم مخططات المنفّذ الفعلي (As-Built Drawings)',
      'تسليم المشروع جاهزاً مع كتيبات الصيانة والتشغيل والضمانات',
    ],
  },
];
</script>

<template>
  <div class="process-view">
    <!-- Background Watermark Shield -->
    <div class="process-watermark" data-name="logo_dark_background 1" aria-hidden="true">
      <img src="/assets/shield-watermark.png" alt="White logo" data-name="White logo" class="process-watermark__img" />
    </div>

    <div class="container process-container">
      <!-- Section Header -->
      <header class="process-header" data-name="Frame 122">
        <h1 class="process-header__title">
          من <span class="gradient-idea">الفكرة</span> إلى <span class="gradient-execution">التنفيذ</span>، بخطوات <span class="gradient-clear">واضحة</span>
        </h1>
        <p class="process-header__desc">
          منهجية عمل هندسية متكاملة تضمن دقة التنفيذ والالتزام بأعلى معايير الجودة والسلامة
        </p>
      </header>

      <!-- Steps List -->
      <section class="process-list" data-name="Frame 126" aria-label="مراحل آلية العمل">
        <template v-for="(step, index) in steps" :key="step.number">
          <!-- Separator Line matching Figma Line 24 -->
          <div class="process-divider line-24" data-name="Line 24" aria-hidden="true"></div>

          <article
            class="process-item"
            :class="{ 'process-item--expanded': expandedStep === index }"
            tabindex="0"
            role="button"
            :aria-expanded="expandedStep === index"
            :aria-label="`مرحلة ${step.number}: ${step.title}`"
            @click="toggleStep(index)"
            @keydown.enter.prevent="toggleStep(index)"
            @keydown.space.prevent="toggleStep(index)"
          >
            <!-- Main Row -->
            <div class="process-item__row">
              <!-- Right: Number + Title -->
              <div class="process-item__heading">
                <span class="process-item__number">{{ step.number }}</span>
                <h2 class="process-item__title">{{ step.title }}</h2>
              </div>

              <!-- Middle: Description -->
              <div class="process-item__desc-wrap">
                <p class="process-item__desc">{{ step.desc }}</p>
              </div>

              <!-- Left: 65x65 Arrow Button -->
              <div class="process-item__action">
                <button
                  type="button"
                  class="process-item__arrow-btn"
                  :aria-label="`تفاصيل مرحلة ${step.title}`"
                  tabindex="-1"
                >
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    class="process-item__arrow-svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="32.5"
                      cy="32.5"
                      r="31"
                      class="arrow-circle"
                    />
                    <!-- Arrow pointing left (rotates to down when expanded) -->
                    <path
                      d="M41 32.5H24M31 24.5L23 32.5L31 40.5"
                      class="arrow-stem"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Collapsible Drawer matching Figma Frame 124-127 -->
            <transition name="drawer">
              <div v-if="expandedStep === index" class="process-item__drawer">
                <div class="drawer-inner">
                  <h3 class="drawer-title">{{ step.deliverablesTitle }}</h3>
                  <div class="drawer-columns">
                    <!-- Col 1 (Right in RTL) -->
                    <div class="drawer-col">
                      <div
                        v-for="(item, iIdx) in step.deliverablesCol1"
                        :key="iIdx"
                        class="drawer-item"
                      >
                        <span class="drawer-bullet" aria-hidden="true"></span>
                        <span class="drawer-text">{{ item }}</span>
                      </div>
                    </div>

                    <!-- Col 2 (Left in RTL) -->
                    <div class="drawer-col">
                      <div
                        v-for="(item, iIdx) in step.deliverablesCol2"
                        :key="iIdx"
                        class="drawer-item"
                      >
                        <span class="drawer-bullet" aria-hidden="true"></span>
                        <span class="drawer-text">{{ item }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </article>
        </template>
      </section>
    </div>
  </div>
</template>

<style scoped>
.process-view {
  background-color: #F5F0EC;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 240px 0 120px;
}

/* Background Watermark Shield */
.process-watermark {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 1804px;
  max-width: none;
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}

.process-watermark__img {
  width: 100%;
  height: auto;
  display: block;
}

.process-container {
  position: relative;
  z-index: 1;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header Aligned to Right matching Figma Frame 122 */
.process-header {
  max-width: 568px;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 38px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.process-header__title {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 56px;
  line-height: 84px;
  color: #040A12;
  margin: 0;
  letter-spacing: -0.5px;
}

/* Word Gradients matching Figma styles ts1, ts2, ts3 */
.gradient-idea {
  background: linear-gradient(90deg, #D6214E 0%, #772851 72%, #142F54 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.gradient-execution {
  background: linear-gradient(90deg, #D6214E 0%, #142F54 46%, #772851 61%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.gradient-clear {
  background: linear-gradient(90deg, #D6214E 0%, #772851 42%, #142F54 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.process-header__desc {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #616161;
  margin: 0;
}

/* Steps List */
.process-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.process-item {
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: background-color var(--transition-fast);
  border-radius: 12px;
}

.process-item:hover,
.process-item--expanded {
  background-color: rgba(255, 255, 255, 0.45);
}

.process-item:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

/* Divider Lines matching Figma Line 24 */
.process-divider {
  width: 100%;
  height: 1px;
  background-color: #DBDBDB;
  border: none;
  display: block;
}

/* Main Row */
.process-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 28px 20px;
  transition: padding var(--transition-fast);
}

/* Heading: Number & Title */
.process-item__heading {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-shrink: 0;
}

.process-item__number {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 90px;
  line-height: 135px;
  color: #D6214E;
  user-select: none;
  min-width: 95px;
  text-align: left;
  direction: ltr;
  transition: transform var(--transition-normal);
}

.process-item:hover .process-item__number,
.process-item--expanded .process-item__number {
  transform: scale(1.03);
}

.process-item__title {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  color: #040A12;
  white-space: nowrap;
}

/* Middle: Description */
.process-item__desc-wrap {
  flex: 1;
  max-width: 568px;
}

.process-item__desc {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #616161;
  text-align: right;
  transition: color var(--transition-fast);
}

.process-item:hover .process-item__desc {
  color: #040A12;
}

/* Left: 65x65 Arrow Button */
.process-item__action {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-item__arrow-btn {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.process-item__arrow-svg {
  width: 65px;
  height: 65px;
  display: block;
  transition: transform var(--transition-normal);
  transform-origin: center;
}

.arrow-circle {
  stroke: #D6214E;
  stroke-width: 1.5;
  fill: transparent;
  transition: stroke var(--transition-normal), fill var(--transition-normal);
}

.arrow-stem {
  stroke: #D6214E;
  transition: stroke var(--transition-normal);
}

/* Hover State */
.process-item:hover .arrow-circle {
  stroke: #D6214E;
  fill: #FBE9ED;
}

/* Expanded State: Solid red fill, white arrow, rotated to point down */
.process-item--expanded .arrow-circle,
.process-item--expanded:hover .arrow-circle {
  stroke: #D6214E;
  fill: #D6214E;
}

.process-item--expanded .arrow-stem,
.process-item--expanded:hover .arrow-stem {
  stroke: #FFFFFF;
}

.process-item--expanded .process-item__arrow-svg {
  transform: rotate(-90deg);
}

/* Collapsible Drawer matching Figma */
.process-item__drawer {
  overflow: hidden;
  padding: 0 20px 36px;
}

.drawer-inner {
  margin-right: 170px;
  max-width: 820px;
  padding-top: 4px;
}

.drawer-title {
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: 700;
  color: #D6214E;
  margin-bottom: 18px;
  text-align: right;
}

.drawer-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 48px;
}

.drawer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  text-align: right;
}

.drawer-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #D6214E;
  flex-shrink: 0;
  margin-top: 9px;
}

.drawer-text {
  font-family: var(--font-family);
  font-size: 17px;
  font-weight: 500;
  color: #4A4A4A;
  line-height: 1.6;
}

/* Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  max-height: 0;
  opacity: 0;
}

.drawer-enter-to,
.drawer-leave-from {
  max-height: 400px;
  opacity: 1;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .process-view {
    padding-top: 150px;
    padding-bottom: 80px;
  }

  .process-header {
    margin-bottom: 40px;
  }

  .process-header__title {
    font-size: 38px;
    line-height: 58px;
  }

  .process-header__desc {
    font-size: 20px;
    line-height: 32px;
  }

  .process-item__row {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "heading action"
      "desc desc";
    gap: 16px;
    padding: 20px 8px;
    align-items: center;
  }

  .process-item__heading {
    grid-area: heading;
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .process-item__action {
    grid-area: action;
    display: flex;
    justify-content: flex-end;
  }

  .process-item__desc-wrap {
    grid-area: desc;
    width: 100%;
    max-width: 100%;
    flex: none;
  }

  .process-item__desc {
    font-size: 17px;
    line-height: 27px;
  }

  .drawer-inner {
    margin-right: 0;
    max-width: 100%;
    padding-top: 12px;
  }
}

@media (max-width: 600px) {
  .process-view {
    padding-top: 120px;
    padding-bottom: 60px;
  }

  .process-container {
    padding: 0 16px;
  }

  .process-header {
    gap: 14px;
    margin-bottom: 28px;
  }

  .process-header__title {
    font-size: clamp(28px, 7.5vw, 34px);
    line-height: 1.45;
  }

  .process-header__desc {
    font-size: 17px;
    line-height: 27px;
  }

  .process-item__row {
    padding: 18px 0;
    gap: 12px;
  }

  .process-item__heading {
    gap: 12px;
  }

  .process-item__number {
    font-size: clamp(44px, 12vw, 56px);
    line-height: 1.1;
    min-width: 52px;
  }

  .process-item__title {
    font-size: clamp(20px, 5.5vw, 24px);
    line-height: 1.35;
    white-space: normal;
  }

  .process-item__desc {
    font-size: 16px;
    line-height: 26px;
  }

  .process-item__arrow-btn,
  .process-item__arrow-svg {
    width: 48px;
    height: 48px;
  }

  .process-item__drawer {
    padding: 0 0 24px;
  }

  .drawer-columns {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
