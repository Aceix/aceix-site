<template>
  <div class="splash-container" :class="{ 'fade-out': isExiting }">
    <img src="/logo.jpg" alt="Logo" class="logo" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  splashComplete: []
}>()

const isExiting = ref(false)

onMounted(() => {
  // Show splash for 1 second, then start fade out
  setTimeout(() => {
    isExiting.value = true

    // Wait for fade out animation to complete (500ms) before emitting
    setTimeout(() => {
      emit('splashComplete')
    }, 500)
  }, 1000)
})
</script>

<style scoped>
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.splash-container.fade-out {
  opacity: 0;
}

.logo {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .logo {
    max-width: 200px;
    max-height: 200px;
  }
}

@media (max-width: 480px) {
  .logo {
    max-width: 150px;
    max-height: 150px;
  }
}
</style>
