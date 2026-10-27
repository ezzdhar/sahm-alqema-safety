<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

const route = useRoute();
const isAboutPage = computed(() => route.path === '/about');
const isContactPage = computed(() => route.path === '/contact');
</script>

<template>
  <div
    class="app-layout"
    :class="{
      'app-layout--about': isAboutPage,
      'app-layout--contact': isContactPage
    }"
    :data-name="isAboutPage ? 'من نحن' : (isContactPage ? 'Desktop - 14' : undefined)"
  >
    <AppHeader />
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout--about {
  background-color: #FFFFFF;
}

.app-layout--contact {
  background-color: #091627;
}

.app-main {
  flex: 1;
}

/* Page Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
