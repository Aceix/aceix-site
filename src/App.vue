<script setup lang="ts">
import { ref, provide } from 'vue'
import SplashScreen from './components/SplashScreen.vue'
import LoadingPage from './components/LoadingPage.vue'
import PortfolioPage from './components/PortfolioPage.vue'

const showSplash = ref(true)
const showLoading = ref(false)
const showPortfolio = ref(false)
const textColor = ref('white')

const handleSplashComplete = () => {
  showSplash.value = false
  showLoading.value = true
}

const handleLoadingComplete = () => {
  showLoading.value = false
  showPortfolio.value = true
}

const toggleTheme = () => {
  textColor.value = textColor.value === 'white' ? '#00ff00' : 'white'
}

// Provide theme state and toggle function to child components
provide('textColor', textColor)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div class="app">
    <SplashScreen v-if="showSplash" @splash-complete="handleSplashComplete" />
    <LoadingPage v-else-if="showLoading" @loading-complete="handleLoadingComplete" />
    <PortfolioPage v-else-if="showPortfolio" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app {
  width: 100vw;
  min-height: 100dvh;
  background: #000;
}
</style>
