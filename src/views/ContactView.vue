<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '../components/common/AppButton.vue';
import InputField from '../components/common/InputField.vue';
import MainSelect from '../components/common/MainSelect.vue';

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
      // Allow any phone number format (local or international) as long as it has digits
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

// Clear error on user input if previously invalid
const onFieldInput = (field) => {
  if (errors[field]) {
    validateField(field);
  }
};

// Validate all form fields together
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

    // Use custom API URL from env, or default to the PHP endpoint in public/api/contact.php
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

      // Reset form & errors
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
    <!-- Hero Section encompassing Heading and Cards -->
    <section class="contact-hero">
      <div class="contact-hero__bg">
        <img src="/assets/contact-page-bg.jpg" alt="خلفية مدينة الرياض" class="contact-hero__bg-img" />
        <div class="contact-hero__overlay"></div>
      </div>

      <div class="container contact-hero__container" data-name="Container">
        <!-- Section Heading -->
        <div class="contact-hero__heading" data-name="SectionHeading">
          <h1 class="contact-hero__title" data-name="Heading 2">
            <span class="highlight-red">ابدأ</span> مشروعك اليوم
          </h1>
          <p class="contact-hero__desc" data-name="Paragraph">
            تواصل معنا الآن وسيرد عليك فريقنا خلال 24 ساعة لمناقشة احتياجاتك وتقديم أفضل الحلول
          </p>
        </div>

        <!-- Cards Container -->
        <div class="contact-cards" data-name="Container">
          <!-- Right Card: Contact Info Panel (In RTL, first column is on Right) -->
          <div class="contact-info-panel" data-name="Container">
            <div class="contact-info-panel__top">
              <h2 class="contact-info-panel__title" data-name="معلومات التواصل">معلومات التواصل</h2>
              <p class="contact-info-panel__subtitle" data-name="Paragraph">
                نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك.
              </p>

              <div class="contact-info-list" data-name="Container">
                <!-- Phone -->
                <a href="tel:+966568909193" class="contact-info-item" data-name="Container">
                  <span class="contact-info-icon" aria-hidden="true" data-name="Container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span class="contact-info-text" dir="ltr" data-name="+966 56 890 9193">+966 56 890 9193</span>
                </a>

                <!-- Email -->
                <a href="mailto:mahmoud@k-fawziat.net" class="contact-info-item" data-name="Container">
                  <span class="contact-info-icon" aria-hidden="true" data-name="Container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <span class="contact-info-text" data-name="mahmoud@k-fawziat.net">mahmoud@k-fawziat.net</span>
                </a>

                <!-- Location -->
                <div class="contact-info-item" data-name="Container">
                  <span class="contact-info-icon" aria-hidden="true" data-name="Container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span class="contact-info-text" data-name="المملكة العربية السعودية، الرياض 11415، التخصصي، ص.ب 3078">المملكة العربية السعودية، الرياض 11415، التخصصي، ص.ب 3078</span>
                </div>
              </div>
            </div>

            <!-- Why Choose Us List -->
            <div class="contact-why-us" data-name="Container">
              <h3 class="contact-why-us__title" data-name="لماذا تختارنا؟">لماذا تختارنا؟</h3>
              <ul class="contact-why-us__list" data-name="Container">
                <li class="contact-why-us__item" data-name="Container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C11E46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span data-name="استشارة مجانية بدون التزام">استشارة مجانية بدون التزام</span>
                </li>
                <li class="contact-why-us__item" data-name="Container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C11E46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span data-name="تسليم في المواعيد المحددة">تسليم في المواعيد المحددة</span>
                </li>
                <li class="contact-why-us__item" data-name="Container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C11E46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span data-name="فريق سعودي متخصص">فريق سعودي متخصص</span>
                </li>
                <li class="contact-why-us__item" data-name="Container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C11E46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span data-name="دعم ما بعد التسليم">دعم ما بعد التسليم</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Left Card: Form Panel (White Box) -->
          <div class="contact-form-panel" data-name="Form">
            <div v-if="isSubmitted" class="contact-success" role="alert">
              <div class="contact-success__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 class="contact-success__title">تم إرسال طلبك بنجاح!</h3>
              <p class="contact-success__desc">
                {{ serverSuccessMessage || 'شكرًا لتواصلك معنا. سنقوم بمراجعة طلبك والتواصل معك خلال 24 ساعة.' }}
              </p>
              <AppButton variant="outline" size="md" @click="isSubmitted = false">
                إرسال طلب آخر
              </AppButton>
            </div>

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
              <!-- Name and Phone Row -->
              <div class="contact-form__row">
                <InputField
                  v-model="form.name"
                  label="الاسم الكامل"
                  placeholder="أدخل اسمك الكامل"
                  required
                  :error="errors.name"
                  @blur="validateField('name')"
                  @update:modelValue="onFieldInput('name')"
                />
                <InputField
                  v-model="form.phone"
                  label="رقم الهاتف / الجوال"
                  placeholder="أدخل رقم الهاتف أو الجوال"
                  type="tel"
                  required
                  :error="errors.phone"
                  @blur="validateField('phone')"
                  @update:modelValue="onFieldInput('phone')"
                />
              </div>

              <!-- Email -->
              <InputField
                v-model="form.email"
                label="البريد الإلكتروني"
                placeholder="example@company.com"
                type="email"
                required
                :error="errors.email"
                @blur="validateField('email')"
                @update:modelValue="onFieldInput('email')"
              />

              <!-- Service Type -->
              <MainSelect
                v-model="form.service"
                label="نوع الخدمة المطلوبة"
                placeholder="اختر الخدمة المطلوبة"
                required
                :options="serviceOptions"
                :error="errors.service"
                @change="validateField('service')"
              />

              <!-- Project Details -->
              <InputField
                v-model="form.details"
                label="تفاصيل المشروع"
                placeholder="صف مشروعك ومتطلباتك بإيجاز (10 أحرف على الأقل)..."
                is-textarea
                :rows="4"
                required
                :error="errors.details"
                @blur="validateField('details')"
                @update:modelValue="onFieldInput('details')"
              />

              <!-- Submit Button -->
              <div class="contact-form__submit">
                <AppButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  block
                  :loading="isSubmitting"
                >
                  إرسال الطلب
                </AppButton>
              </div>
            </form>
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

.contact-view {
  background-color: #091627;
  min-height: 100vh;
}

/* Contact Hero */
.contact-hero {
  position: relative;
  min-height: 980px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 246px; /* Difference 3: From the top: 246px */
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
  filter: brightness(1.08) contrast(1.02);
}

.contact-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(9, 22, 39, 0.28) 0%,
    rgba(9, 22, 39, 0.06) 35%,
    rgba(9, 22, 39, 0.12) 65%,
    rgba(9, 22, 39, 0.55) 100%
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
  gap: 30px; /* Difference 4: Gap: 30px */
}

@media (min-width: 1140px) {
  .contact-hero__container {
    padding: 0;
  }
}

/* Section Heading */
.contact-hero__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px; /* Difference 5: Gap: 20px */
  padding: 0; /* Difference 5: Padding: 0 */
  width: 100%;
  max-width: 1100px; /* Difference 6 & 8: Width: 1100px */
  margin: 0 auto;
}

.contact-hero__title {
  width: 100%;
  max-width: 1100px;
  font-family: var(--font-family);
  font-size: 56px; /* Difference 7: Font size: 56px */
  line-height: 72px; /* Difference 7: Line height: 72px */
  font-weight: 800;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  text-shadow: 0 3px 20px rgba(9, 22, 39, 0.75), 0 1px 4px rgba(0, 0, 0, 0.9);
}

@media (max-width: 767px) {
  .contact-hero {
    padding-top: 140px;
    padding-bottom: 60px;
  }

  .contact-hero__title {
    font-size: 38px;
    line-height: 50px;
  }
}

.contact-hero__desc {
  width: 100%;
  max-width: 1100px;
  font-family: var(--font-family);
  font-size: 28px; /* Difference 9: Font size: 28px */
  line-height: 42px; /* Difference 9: Line height: 42px */
  font-weight: 700; /* Difference 9: Weight: 700 */
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  text-shadow: 0 2px 16px rgba(9, 22, 39, 0.8), 0 1px 4px rgba(0, 0, 0, 0.9);
}

@media (max-width: 767px) {
  .contact-hero__desc {
    font-size: 18px;
    line-height: 28px;
  }
}

/* Cards Grid (Two separate cards) */
.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .contact-cards {
    grid-template-columns: minmax(0, 421fr) minmax(0, 631fr);
    gap: 32px;
    align-items: start;
  }
}

@media (min-width: 1140px) {
  .contact-cards {
    grid-template-columns: 421px 631px; /* Right: Info 421px, Left: Form 631px in RTL */
    gap: 48px; /* Difference 11: 48px gap */
  }
}

/* Right Card: Info Panel (Dark Blue) */
.contact-info-panel {
  background: #091627;
  color: #FFFFFF;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 576px; /* Difference 11: Size 421 x 576px */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  width: 100%;
}

@media (min-width: 1024px) {
  .contact-info-panel {
    max-width: 421px;
    min-height: 576px;
  }
}

@media (max-width: 767px) {
  .contact-info-panel {
    padding: 24px 18px;
    min-height: auto;
    gap: 24px;
  }
}

.contact-info-panel__title {
  font-family: var(--font-cairo);
  font-size: 20.8px; /* Difference 14: Font size 20.8px */
  line-height: 31.2px; /* Difference 14: Line height 31.2px */
  font-weight: 700;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.contact-info-panel__subtitle {
  font-family: var(--font-family);
  font-size: 15.2px; /* Difference 16: Font size 15.2px */
  line-height: 22.8px;
  color: #F5F5F5; /* Difference 16: Text color #F5F5F5 */
  margin-bottom: 24px;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #FFFFFF;
  transition: transform var(--transition-fast);
}

.contact-info-item:hover {
  transform: translateX(-4px);
}

.contact-info-icon {
  width: 40px; /* Difference 19, 23, 27: Size 40 x 40px */
  height: 40px;
  border-radius: 8px;
  background: #C11E46; /* Difference 19, 23, 27: #C11E46 */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: none; /* Difference 19, 23, 27: Shadow none */
  color: #E8ECF1; /* Difference 20, 24, 28: Icon color #E8ECF1 */
}

.contact-info-text {
  font-size: 15.2px; /* Difference 18, 22, 26: Font size 15.2px */
  line-height: 22.8px; /* Difference 18, 22, 26: Line height 22.8px */
  font-weight: 400; /* Difference 18, 22, 26: Weight 400 */
  color: #FFFFFF;
}

/* Why Choose Us List */
.contact-why-us {
  border: none; /* Difference 29: Border none */
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-why-us__title {
  font-family: var(--font-cairo);
  font-size: 14.4px; /* Difference 32: Font size 14.4px */
  line-height: 21.6px; /* Difference 32: Line height 21.6px */
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8); /* Difference 32: Text color #FFFFFF 80% */
  margin-bottom: 4px;
}

.contact-why-us__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-why-us__item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 22.4px;
  color: #FFFFFF; /* Difference 34, 36, 38: Text color #FFFFFF */
  font-weight: 400; /* Difference 34, 36, 38: Weight 400 */
}

/* Left Card: Form Panel (White) */
.contact-form-panel {
  background-color: #FFFFFF;
  border-radius: 16px; /* Difference 42: Corners: 16px */
  border: 0.8px solid #E0EBF5; /* Difference 42: Border: 0.8px solid #E0EBF5 */
  padding: 40px; /* Difference 42: Padding: 40px */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}

@media (min-width: 1024px) {
  .contact-form-panel {
    max-width: 631px; /* Difference 42: Width 631px */
    min-height: 600px; /* Difference 41: Height 600px */
  }
}

@media (max-width: 767px) {
  .contact-form-panel {
    padding: 24px 18px;
    min-height: auto;
  }
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .contact-form__row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.contact-form__submit {
  margin-top: 6px;
}

/* Success Message */
.contact-success {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.contact-success__icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #F0FDF4;
  color: #16A34A;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.contact-success__title {
  font-size: 26px;
  font-weight: 800;
  color: var(--color-navy-dark);
}

.contact-success__desc {
  font-size: 16px;
  color: var(--color-text-muted);
  max-width: 440px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.contact-error-alert {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #FEF2F2;
  border: 1px solid #FCA5A5;
  color: #DC2626;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}

.contact-error-alert svg {
  flex-shrink: 0;
  color: #DC2626;
}
</style>
