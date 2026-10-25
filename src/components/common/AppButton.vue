<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'outline-white', 'white', 'dark', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const isRouterLink = computed(() => !!props.to && !props.disabled);
const isExternalLink = computed(() => !!props.href && !props.disabled);

const classes = computed(() => [
  'app-btn',
  `app-btn--${props.variant}`,
  `app-btn--${props.size}`,
  {
    'app-btn--block': props.block,
    'app-btn--disabled': props.disabled || props.loading,
    'app-btn--loading': props.loading,
  },
]);
</script>

<template>
  <RouterLink v-if="isRouterLink" :to="to" :class="classes">
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot />
  </RouterLink>

  <a v-else-if="isExternalLink" :href="href" target="_blank" rel="noopener noreferrer" :class="classes">
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot />
  </a>

  <button v-else :type="type" :class="classes" :disabled="disabled || loading">
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-family);
  font-weight: 700;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.app-btn--sm {
  padding: 8px 16px;
  font-size: 14px;
  height: 40px;
}

.app-btn--md {
  padding: 10px 24px;
  font-size: 16px;
  height: 48px;
}

.app-btn--lg {
  padding: 14px 32px;
  font-size: 18px;
  height: 56px;
}

.app-btn--block {
  width: 100%;
}

/* Primary (Figma Red #D6214E) */
.app-btn--primary {
  background: var(--color-primary);
  color: var(--color-text-white);
  box-shadow: 0 4px 14px rgba(214, 33, 78, 0.35);
}

.app-btn--primary:hover:not(.app-btn--disabled) {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(214, 33, 78, 0.45);
}

.app-btn--primary:active:not(.app-btn--disabled) {
  transform: translateY(0);
}

/* Outline (Red/Light) */
.app-btn--outline {
  background: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
}

.app-btn--outline:hover:not(.app-btn--disabled) {
  background: var(--color-primary-light);
  transform: translateY(-2px);
}

/* Outline White */
.app-btn--outline-white {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-text-white);
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.app-btn--outline-white:hover:not(.app-btn--disabled) {
  background: rgba(255, 255, 255, 0.18);
  border-color: #FFFFFF;
  transform: translateY(-2px);
}

/* White */
.app-btn--white {
  background: #FFFFFF;
  color: var(--color-navy);
  box-shadow: var(--shadow-md);
}

.app-btn--white:hover:not(.app-btn--disabled) {
  background: #F8FAFC;
  transform: translateY(-2px);
}

/* Dark Navy */
.app-btn--dark {
  background: var(--color-navy);
  color: #FFFFFF;
}

.app-btn--dark:hover:not(.app-btn--disabled) {
  background: #153259;
  transform: translateY(-2px);
}

/* Ghost */
.app-btn--ghost {
  background: transparent;
  color: var(--color-text-main);
}

.app-btn--ghost:hover:not(.app-btn--disabled) {
  background: rgba(0, 0, 0, 0.05);
}

/* Disabled */
.app-btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
  transform: none !important;
  box-shadow: none !important;
}

/* Spinner */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
