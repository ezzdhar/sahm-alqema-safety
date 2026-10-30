<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  details: '',
});

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  details: '',
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref('');
const serverSuccessMessage = ref('');

const serviceOptions = [
  { value: 'electrical', label: 'الخدمات الكهربائية' },
  { value: 'engineering-consulting', label: 'استشارات هندسية' },
  { value: 'mechanical', label: 'الخدمات الميكانيكية' },
  { value: 'design-build', label: 'التصميم والتنفيذ (Design & Build)' },
  { value: 'bim', label: 'تقنية ونمذجة BIM' },
  { value: 'general-consultation', label: 'استشارة هندسية عامة' },
];

onMounted(() => {
  if (route.query.service) {
    const match = serviceOptions.find(o => o.value === route.query.service);
    if (match) {
      form.service = match.value;
    }
  }
});

// Comprehensive field-level validator
const validateField = (field) => {
  switch (field) {
    case 'name': {
      const val = form.name.trim();
      if (!val) {
        errors.name = 'يرجى إدخال الاسم الكامل';
        return false;
      }
      if (val.length < 3) {
        errors.name = 'يجب ألا يقل الاسم عن 3 أحرف';
        return false;
      }
      if (val.length > 70) {
        errors.name = 'الاسم طويل جداً، يرجى كتابة اسم مختصر';
        return false;
      }
      if (!/^[\p{L}\s'-]+$/u.test(val)) {
        errors.name = 'يرجى كتابة الاسم بالحروف فقط بدون أرقام أو رموز خاصة';
        return false;
      }
      errors.name = '';
      return true;
    }

    case 'phone': {
      const val = form.phone.trim();
      if (!val) {
        errors.phone = 'يرجى إدخال رقم الهاتف أو الجوال';
        return false;
      }
      const digits = val.replace(/\D/g, '');
      if (digits.length < 6) {
        errors.phone = 'يرجى إدخال رقم هاتف صحيح';
        return false;
      }
      errors.phone = '';
      return true;
    }

    case 'email': {
      const val = form.email.trim();
      if (!val) {
        errors.email = 'يرجى إدخال البريد الإلكتروني';
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(val)) {
        errors.email = 'يرجى إدخال بريد إلكتروني صالح (مثال: name@domain.com)';
        return false;
      }
      errors.email = '';
      return true;
    }

    case 'service': {
      if (!form.service) {
        errors.service = 'يرجى اختيار نوع الخدمة المطلوبة';
        return false;
      }
      errors.service = '';
      return true;
    }

    case 'details': {
      const val = form.details.trim();
      if (!val) {
        errors.details = 'يرجى كتابة تفاصيل مشروعك أو استفسارك';
        return false;
      }
      if (val.length < 10) {
        errors.details = 'يرجى تقديم تفاصيل أوضح لمشروعك (10 أحرف على الأقل)';
        return false;
      }
      errors.details = '';
      return true;
    }

    default:
      return true;
  }
};

const onFieldInput = (field) => {
  if (errors[field]) {
    validateField(field);
  }
};

const validateForm = () => {
  const isNameValid = validateField('name');
  const isPhoneValid = validateField('phone');
  const isEmailValid = validateField('email');
  const isServiceValid = validateField('service');
  const isDetailsValid = validateField('details');

  return isNameValid && isPhoneValid && isEmailValid && isServiceValid && isDetailsValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  submitError.value = '';

  try {
    const selectedService = serviceOptions.find(o => o.value === form.service);
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service,
      serviceLabel: selectedService ? selectedService.label : form.service,
      details: form.details.trim(),
      message: form.details.trim(),
      subject: selectedService ? selectedService.label : 'طلب استشارة / خدمة',
      lang: 'ar'
    };

    const endpoint = import.meta.env.VITE_API_URL || '/api/contact.php';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const contentType = response.headers.get('content-type') || '';
    let result = null;

    if (contentType.includes('application/json')) {
      result = await response.json();
    } else {
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch {
        if (text.trim().startsWith('<?php')) {
          throw new Error('PHP_NOT_PARSED');
        }
      }
    }

    if (response.ok && result && result.success) {
      serverSuccessMessage.value = result.message || 'تم إرسال طلبك بنجاح! سيتواصل معك فريق سهم القمة قريباً.';
      isSubmitted.value = true;

      form.name = '';
      form.phone = '';
      form.email = '';
      form.service = '';
      form.details = '';
      Object.keys(errors).forEach(key => { errors[key] = ''; });
    } else {
      submitError.value = (result && result.message) 
        ? result.message 
        : 'تعذر إرسال الطلب في الوقت الحالي. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على info@sahmalqemma.sa';
    }
  } catch (err) {
    console.error('Submission error:', err);
    if (err.message === 'PHP_NOT_PARSED') {
      submitError.value = 'ملاحظة: بيئة التشغيل المحلية الحالية ترجع كود PHP كنص ثابت. تم حل ذلك عبر خادم التطوير أو خادم Node.js.';
    } else {
      submitError.value = 'تعذر الاتصال بالخادم. يرجى التأكد من اتصال الإنترنت أو التواصل معنا مباشرة عبر البريد الإلكتروني: info@sahmalqemma.sa';
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="contact-view" data-name="Desktop - 14">
    <!-- Top Hero Section with City Background & Centered Form -->
    <section class="contact-hero">
      <div class="contact-hero__bg">
        <img src="/assets/contact-page-bg.jpg" alt="خلفية مدينة الرياض" class="contact-hero__bg-img" />
        <div class="contact-hero__overlay"></div>
      </div>

      <div class="contact-hero__container" data-name="Container">
        <!-- Section Heading -->
        <div class="contact-hero__heading" data-name="SectionHeading">
          <h1 class="contact-hero__title" data-name="Heading 2">
            <span class="highlight-red">ابدأ</span> مشروعك اليوم
          </h1>
          <p class="contact-hero__desc" data-name="Paragraph:margin">
            تواصل معنا الآن وسيرد عليك فريقنا خلال 24 ساعة لمناقشة احتياجاتك وتقديم أفضل الحلول
          </p>
        </div>

        <!-- Centered Form Container -->
        <div class="contact-form-wrapper" data-name="Container">
          <div class="contact-form-box" data-name="Form">
            <!-- Success State -->
            <div v-if="isSubmitted" class="contact-success" role="alert">
              <div class="contact-success__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="contact-success__title">تم إرسال طلبك بنجاح!</h3>
              <p class="contact-success__desc">
                {{ serverSuccessMessage || 'شكرًا لتواصلك معنا. سنقوم بمراجعة طلبك والتواصل معك خلال 24 ساعة.' }}
              </p>
              <button type="button" class="contact-success__btn" @click="isSubmitted = false">
                إرسال طلب آخر
              </button>
            </div>

            <!-- Form -->
            <form v-else class="contact-form" novalidate @submit.prevent="handleSubmit">
              <!-- Error Alert -->
              <div v-if="submitError" class="contact-error-alert" role="alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{{ submitError }}</span>
              </div>

              <!-- Row 1: Name & Phone (In RTL: Name on Right, Phone on Left) -->
              <div class="contact-form__row" data-name="Container">
                <!-- Name Field -->
                <div class="contact-field" data-name="Container">
                  <label for="contact-name" class="contact-field__label" data-name="Label">
                    الاسم الكامل *
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    class="contact-field__input"
                    :class="{ 'contact-field__input--error': !!errors.name }"
                    placeholder="أدخل اسمك الكامل"
                    required
                    @blur="validateField('name')"
                    @input="onFieldInput('name')"
                  />
                  <span v-if="errors.name" class="contact-field__error">{{ errors.name }}</span>
                </div>

                <!-- Phone Field -->
                <div class="contact-field" data-name="Container">
                  <label for="contact-phone" class="contact-field__label" data-name="Label">
                    رقم الجوال *
                  </label>
                  <input
                    id="contact-phone"
                    v-model="form.phone"
                    type="tel"
                    dir="rtl"
                    class="contact-field__input"
                    :class="{ 'contact-field__input--error': !!errors.phone }"
                    placeholder="05XXXXXXXX"
                    required
                    @blur="validateField('phone')"
                    @input="onFieldInput('phone')"
                  />
                  <span v-if="errors.phone" class="contact-field__error">{{ errors.phone }}</span>
                </div>
              </div>

              <!-- Row 2: Email Field -->
              <div class="contact-field" data-name="Container">
                <label for="contact-email" class="contact-field__label" data-name="Label">
                  البريد الإلكتروني *
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  dir="ltr"
                  class="contact-field__input contact-field__input--email"
                  :class="{ 'contact-field__input--error': !!errors.email }"
                  placeholder="example@company.com"
                  required
                  @blur="validateField('email')"
                  @input="onFieldInput('email')"
                />
                <span v-if="errors.email" class="contact-field__error">{{ errors.email }}</span>
              </div>

              <!-- Row 3: Service Select -->
              <div class="contact-field" data-name="Container">
                <label for="contact-service" class="contact-field__label" data-name="Label">
                  نوع الخدمة المطلوبة
                </label>
                <div class="contact-field__select-wrap" data-name="Dropdown">
                  <select
                    id="contact-service"
                    v-model="form.service"
                    class="contact-field__select"
                    :class="{
                      'contact-field__select--placeholder': !form.service,
                      'contact-field__input--error': !!errors.service
                    }"
                    @change="validateField('service')"
                  >
                    <option value="" disabled selected>اختر الخدمة المطلوبة</option>
                    <option
                      v-for="opt in serviceOptions"
                      :key="opt.value"
                      :value="opt.value"
                    >
                      {{ opt.label }}
                    </option>
                  </select>
                  <div class="contact-field__select-arrow" aria-hidden="true">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#091627" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span v-if="errors.service" class="contact-field__error">{{ errors.service }}</span>
              </div>

              <!-- Row 4: Project Details Textarea -->
              <div class="contact-field" data-name="Container">
                <label for="contact-details" class="contact-field__label" data-name="Label">
                  تفاصيل المشروع
                </label>
                <textarea
                  id="contact-details"
                  v-model="form.details"
                  rows="4"
                  class="contact-field__textarea"
                  :class="{ 'contact-field__input--error': !!errors.details }"
                  placeholder="صِف مشروعك ومتطلباتك بإيجاز..."
                  required
                  @blur="validateField('details')"
                  @input="onFieldInput('details')"
                ></textarea>
                <span v-if="errors.details" class="contact-field__error">{{ errors.details }}</span>
              </div>

              <!-- Row 5: Submit Button -->
              <button
                type="submit"
                class="contact-form__btn"
                :disabled="isSubmitting"
                data-name="Button"
              >
                <span v-if="!isSubmitting">إرسال الطلب</span>
                <span v-else class="contact-form__loading-text">جاري الإرسال...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Section: Offices Cards (Desktop - 16 / Frame 162) -->
    <section class="contact-offices" data-name="Desktop - 16">
      <div class="contact-offices__container" data-name="Frame 162">
        <!-- Right Card: Frame 153 (المملكة العربية السعودية) -->
        <div class="office-card" data-name="Frame 153">
          <div class="office-card__content" data-name="Frame 159">
            <span class="office-card__tag" data-name="المملكة العربية السعودية">المملكة العربية السعودية</span>
            <h2 class="office-card__title" data-name="Title">مؤسسة سهم القمة</h2>

            <div class="office-card__list" data-name="Frame 158">
              <!-- Location Row -->
              <div class="office-card__row" data-name="Frame 155">
                <div class="office-card__details" data-name="Contact detail">
                  <span class="office-card__text" data-name="Detail">
                    المملكة العربية السعودية ,الرياض, 7455 الحسين بن علي 3272
                  </span>
                  <span class="office-card__text" data-name="Detail">
                    مصر,القاهرة, نزهة الجديدة, شيراتون, عبد الحميد بدوي
                  </span>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="basil:location-outline">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#D6214E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="9" r="2.5" fill="#D6214E"/>
                  </svg>
                </div>
              </div>

              <!-- Phone Row -->
              <div class="office-card__row" data-name="Frame 156">
                <div class="office-card__details office-card__details--center" data-name="Frame 151">
                  <a href="tel:+966568909193" class="office-card__link office-card__link--phone" dir="ltr" data-name="Detail">
                    +966 56 890 9193
                  </a>
                  <a href="tel:+966595910235" class="office-card__link office-card__link--phone" dir="ltr" data-name="Detail">
                    +966 59 591 0235
                  </a>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="phone">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#D6214E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <!-- Mail Row -->
              <div class="office-card__row" data-name="Frame 157">
                <div class="office-card__details office-card__details--center" data-name="Contact detail">
                  <a href="mailto:mahmoud@etc-foustat.net" class="office-card__link office-card__link--underline" data-name="Detail">
                    mahmoud@etc-foustat.net
                  </a>
                  <a href="mailto:ahmed@etc-foustat.net" class="office-card__link" data-name="Detail">
                    ahmed@etc-foustat.net
                  </a>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="mail">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#D6214E" stroke-width="2"/>
                    <path d="M2 7l10 7 10-7" stroke="#D6214E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Left Card: Frame 154 (مصر) -->
        <div class="office-card" data-name="Frame 154">
          <div class="office-card__content" data-name="Frame 159">
            <span class="office-card__tag" data-name="مصر">مصر</span>
            <h2 class="office-card__title" data-name="Title">الفسطاط</h2>

            <div class="office-card__list" data-name="Frame 158">
              <!-- Location Row -->
              <div class="office-card__row" data-name="Frame 155">
                <div class="office-card__details" data-name="Contact detail">
                  <span class="office-card__text" data-name="Detail">
                    القاهرة, نزهة الجديدة, شيراتون, عبد الحميد بدوي
                  </span>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="basil:location-outline">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#D6214E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="9" r="2.5" fill="#D6214E"/>
                  </svg>
                </div>
              </div>

              <!-- Phone Row -->
              <div class="office-card__row" data-name="Frame 156">
                <div class="office-card__details office-card__details--center" data-name="Frame 151">
                  <a href="tel:+201119778112" class="office-card__link office-card__link--phone" dir="ltr" data-name="Detail">
                    +20 111 977 8112
                  </a>
                  <a href="tel:+201009507330" class="office-card__link office-card__link--phone" dir="ltr" data-name="Detail">
                    +20 100 950 7330
                  </a>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="phone">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#D6214E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <!-- Mail Row -->
              <div class="office-card__row" data-name="Frame 157">
                <div class="office-card__details office-card__details--center" data-name="Contact detail">
                  <a href="mailto:mahmoud@etc-foustat.net" class="office-card__link office-card__link--underline" data-name="Detail">
                    mahmoud@etc-foustat.net
                  </a>
                  <a href="mailto:ahmed@etc-foustat.net" class="office-card__link" data-name="Detail">
                    ahmed@etc-foustat.net
                  </a>
                </div>
                <div class="office-card__icon" aria-hidden="true" data-name="mail">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#D6214E" stroke-width="2"/>
                    <path d="M2 7l10 7 10-7" stroke="#D6214E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
  min-height: 100vh;
  background-color: #091627;
  direction: rtl;
}

/* ==========================================================
   TOP HERO SECTION
   ========================================================== */
.contact-hero {
  position: relative;
  min-height: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 220px;
  padding-bottom: 90px;
  overflow: hidden;
  background-color: #091627;
}

.contact-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.contact-hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.05) contrast(1.02);
}

.contact-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(9, 22, 39, 0.45) 0%,
    rgba(9, 22, 39, 0.20) 35%,
    rgba(9, 22, 39, 0.35) 70%,
    rgba(9, 22, 39, 0.65) 100%
  );
}

.contact-hero__container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

/* SectionHeading */
.contact-hero__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  text-align: center;
}

/* Heading 2 */
.contact-hero__title {
  width: 100%;
  max-width: 1100px;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 82px;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
  text-shadow: 0 2px 14px rgba(9, 22, 39, 0.65);
}

.highlight-red {
  color: #D6214E;
}

/* Paragraph:margin */
.contact-hero__desc {
  width: 100%;
  max-width: 828px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  color: #DEDEDE;
  margin: 0;
  text-shadow: 0 2px 10px rgba(9, 22, 39, 0.7);
}

/* Form Container Wrapper */
.contact-form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 100%;
  max-width: 631px;
}

/* Form Card */
.contact-form-box {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 12px;
  width: 100%;
  max-width: 631px;
  background: #F7F6F5;
  border: 0.8px solid #E8EBF5;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-form__row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
}

.contact-form__row .contact-field {
  flex: 1;
  min-width: 0;
}

/* Individual Field */
.contact-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.contact-field__label {
  display: block;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14.08px;
  line-height: 21px;
  color: #1A3E6F;
  margin-bottom: 6.4px;
  text-align: right;
  width: 100%;
}

.contact-field__input {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 14px 16px;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border: 0.8px solid #DDE1EF;
  border-radius: 6px;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15.2px;
  line-height: 18px;
  color: #091627;
  outline: none;
  direction: rtl;
  text-align: right;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-field__input--email {
  direction: ltr;
  text-align: right;
}

.contact-field__input::placeholder {
  color: #A3A3A3;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15.2px;
  line-height: 18px;
}

.contact-field__input:focus {
  border-color: #D6214E;
  box-shadow: 0 0 0 2px rgba(214, 33, 78, 0.12);
}

.contact-field__input--error {
  border-color: #D6214E !important;
  background-color: #FFF8F8;
}

.contact-field__error {
  font-family: 'Tajawal', sans-serif;
  font-size: 12.5px;
  color: #D6214E;
  margin-top: 4px;
  text-align: right;
}

/* Custom Dropdown Select */
.contact-field__select-wrap {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border: 0.8px solid #DDE1EF;
  border-radius: 6px;
}

.contact-field__select {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 14px 16px 14px 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15.2px;
  line-height: 18px;
  color: #091627;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  direction: rtl;
  text-align: right;
}

.contact-field__select--placeholder {
  color: #091627;
}

.contact-field__select-arrow {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

/* Textarea */
.contact-field__textarea {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px 16px;
  width: 100%;
  height: 121px;
  background: #FFFFFF;
  border: 0.8px solid #DDE1EF;
  border-radius: 6px;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15.2px;
  line-height: 23px;
  color: #091627;
  outline: none;
  resize: vertical;
  direction: rtl;
  text-align: right;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-field__textarea::placeholder {
  color: #A3A3A3;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15.2px;
  line-height: 23px;
}

.contact-field__textarea:focus {
  border-color: #D6214E;
  box-shadow: 0 0 0 2px rgba(214, 33, 78, 0.12);
}

/* Button */
.contact-form__btn {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 100%;
  height: 56px;
  background: #D6214E;
  border-radius: 10px;
  border: none;
  font-family: 'Tajawal', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  margin-top: 8px;
}

.contact-form__btn:hover:not(:disabled) {
  background: #BF1942;
}

.contact-form__btn:active:not(:disabled) {
  transform: scale(0.99);
}

.contact-form__btn:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}

.contact-form__loading-text {
  font-family: 'Tajawal', sans-serif;
  font-weight: 700;
}

/* Success State Box */
.contact-success {
  text-align: center;
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.contact-success__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #ECFDF5;
  color: #10B981;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-success__title {
  font-family: 'Cairo', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1A3E6F;
  margin: 0;
}

.contact-success__desc {
  font-family: 'Tajawal', sans-serif;
  font-size: 16px;
  color: #595959;
  line-height: 1.6;
  margin: 0;
  max-width: 440px;
}

.contact-success__btn {
  margin-top: 8px;
  padding: 10px 24px;
  background: #1A3E6F;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-family: 'Tajawal', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.contact-success__btn:hover {
  background: #132D52;
}

/* Error Alert */
.contact-error-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #FEF2F2;
  border: 1px solid #FCA5A5;
  color: #DC2626;
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Tajawal', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
}

.contact-error-alert svg {
  flex-shrink: 0;
}

/* ==========================================================
   BOTTOM OFFICES SECTION (Desktop - 16 / Frame 162)
   ========================================================== */
.contact-offices {
  width: 100%;
  background: #F6F0EC;
  padding: 144px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.contact-offices__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
}

/* Office Card */
.office-card {
  box-sizing: border-box;
  width: 612px;
  height: 379px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 44px 36px 44px 44px;
  flex: none;
  flex-grow: 1;
}

.office-card__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 100%;
  max-width: 440px;
  margin-right: 0;
  margin-left: auto;
}

/* Country Tag */
.office-card__tag {
  width: 100%;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: right;
  color: #D6214E;
}

/* Title */
.office-card__title {
  width: 100%;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 34px;
  text-align: right;
  color: #173864;
  margin: 0;
}

/* Items List */
.office-card__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
}

/* Row (Location / Phone / Mail) */
.office-card__row {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  gap: 10px;
  width: 100%;
}

.office-card__icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.office-card__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  text-align: right;
}

.office-card__details--center {
  align-items: flex-start;
}

/* Text & Links */
.office-card__text {
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: #595959;
}

.office-card__link {
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  text-align: right;
  color: #595959;
  text-decoration: none;
  transition: color 0.15s ease;
}

.office-card__link--phone {
  font-family: 'Tajawal', sans-serif;
  direction: ltr;
}

.office-card__link--underline {
  text-decoration: underline;
}

.office-card__link:hover {
  color: #D6214E;
}

/* ==========================================================
   RESPONSIVE BREAKPOINTS
   ========================================================== */
@media (max-width: 1279px) {
  .contact-offices__container {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .office-card {
    width: 100%;
    max-width: 612px;
    height: auto;
    min-height: 360px;
  }
}

@media (max-width: 767px) {
  .contact-hero {
    padding-top: 130px;
    padding-bottom: 60px;
    min-height: auto;
  }

  .contact-hero__title {
    font-size: 40px;
    line-height: 50px;
  }

  .contact-hero__desc {
    font-size: 18px;
    line-height: 28px;
  }

  .contact-form-box {
    padding: 24px 18px;
    border-radius: 14px;
  }

  .contact-form__row {
    flex-direction: column;
    gap: 16px;
  }

  .contact-offices {
    padding: 60px 16px;
  }

  .office-card {
    padding: 32px 20px;
    border-radius: 18px;
  }

  .office-card__title {
    font-size: 22px;
    line-height: 30px;
  }

  .office-card__tag {
    font-size: 16px;
  }

  .office-card__text {
    font-size: 13px;
    line-height: 19px;
  }

  .office-card__link {
    font-size: 15px;
    line-height: 22px;
  }
}
</style>
