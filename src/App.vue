<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app-container">
    <Header />
    <main class="content-area">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Aesthetic Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f8f8f8;
  color: #555;
}
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-area {
  flex-grow: 1;
  padding-bottom: 3rem;
}
h1,
h2,
h3 {
  color: #4a148c; /* Deep Purple/Maroon for tradition */
}
</style>
