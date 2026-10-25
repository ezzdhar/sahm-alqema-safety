<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'اختر من القائمة',
  },
  options: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substring(2, 9)}`,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const normalizedOptions = computed(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return { value: opt.value, label: opt.label ?? opt.value };
    }
    return { value: opt, label: opt };
  });
});
</script>

<template>
  <div class="main-select">
    <label v-if="label" :for="id" class="main-select__label">
      {{ label }}
      <span v-if="required" class="main-select__required">*</span>
    </label>

    <div class="main-select__wrapper">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        class="main-select__control"
        :class="{
          'main-select__control--placeholder': !modelValue,
          'main-select__control--error': !!error,
        }"
        @change="emit('update:modelValue', $event.target.value); emit('change', $event.target.value)"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option
          v-for="opt in normalizedOptions"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>

      <div class="main-select__arrow" aria-hidden="true">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <p v-if="error" class="main-select__error" role="alert">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.main-select {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.main-select__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-navy-dark);
  text-align: right;
}

.main-select__required {
  color: var(--color-primary);
  margin-right: 2px;
}

.main-select__wrapper {
  position: relative;
  width: 100%;
}

.main-select__control {
  width: 100%;
  padding: 12px 16px 12px 40px;
  font-size: 15px;
  font-family: var(--font-family);
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: var(--radius-sm);
  color: var(--color-text-main);
  direction: rtl;
  text-align: right;
  transition: all var(--transition-fast);
  outline: none;
  appearance: none;
  cursor: pointer;
}

.main-select__control--placeholder {
  color: #94A3B8;
}

.main-select__control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(214, 33, 78, 0.12);
}

.main-select__control--error {
  border-color: var(--color-primary);
  background-color: #FFF5F7;
}

.main-select__arrow {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
}

.main-select__error {
  font-size: 12px;
  color: var(--color-primary);
  text-align: right;
}
</style>
