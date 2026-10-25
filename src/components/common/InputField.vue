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
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substring(2, 9)}`,
  },
  name: {
    type: String,
    default: '',
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
  isTextarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
  },
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus']);

const inputClasses = computed(() => [
  'input-field__control',
  {
    'input-field__control--error': !!props.error,
    'input-field__control--disabled': props.disabled,
  },
]);
</script>

<template>
  <div class="input-field">
    <label v-if="label" :for="id" class="input-field__label">
      {{ label }}
      <span v-if="required" class="input-field__required">*</span>
    </label>

    <div class="input-field__wrapper">
      <textarea
        v-if="isTextarea"
        :id="id"
        :name="name"
        :rows="rows"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur', $event)"
        @focus="emit('focus', $event)"
      ></textarea>

      <input
        v-else
        :id="id"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur', $event)"
        @focus="emit('focus', $event)"
      />
    </div>

    <p v-if="error" class="input-field__error" role="alert">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-navy-dark);
  text-align: right;
}

.input-field__required {
  color: var(--color-primary);
  margin-right: 2px;
}

.input-field__wrapper {
  position: relative;
  width: 100%;
}

.input-field__control {
  width: 100%;
  padding: 12px 16px;
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
}

textarea.input-field__control {
  resize: vertical;
  min-height: 100px;
}

.input-field__control::placeholder {
  color: #94A3B8;
  font-weight: 400;
}

.input-field__control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(214, 33, 78, 0.12);
}

.input-field__control--error {
  border-color: var(--color-primary);
  background-color: #FFF5F7;
}

.input-field__control--disabled {
  background-color: #F8FAFC;
  cursor: not-allowed;
  opacity: 0.7;
}

.input-field__error {
  font-size: 12px;
  color: var(--color-primary);
  text-align: right;
}
</style>
