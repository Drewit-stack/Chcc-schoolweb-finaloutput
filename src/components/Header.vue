<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About CHCC', path: '/about' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
]
const schoolInitials = 'CHCC'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="school-header">
    <div class="header-main">
      <div class="logo-area">
        <RouterLink to="/" class="school-logo-link">
          <img
            src="/chcc_logo.png"
            alt="Concepcion Holy Cross College Logo"
            class="logo-icon-image"
          />
          <h1>{{ schoolInitials }}</h1>
        </RouterLink>
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="bar" :class="{ open: isMenuOpen }"></span>
        <span class="bar" :class="{ open: isMenuOpen }"></span>
        <span class="bar" :class="{ open: isMenuOpen }"></span>
      </button>
    </div>

    <nav class="main-nav" :class="{ open: isMenuOpen }">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        class="nav-link"
        active-class="nav-link-active"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.school-header {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 4rem;
}
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.school-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s;
}
.logo-icon-image {
  /* New style for the image logo */
  height: 50px; /* Adjust size as needed */
  margin-right: 12px;
  object-fit: contain; /* Ensures the whole logo is visible */
}
h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
  color: #4a148c;
}

/* Desktop Navigation */
.main-nav {
  display: flex;
  align-items: center;
}
.nav-link {
  margin-left: 25px;
  text-decoration: none;
  color: #6a0e9d;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 3px solid transparent;
  transition:
    color 0.3s,
    border-bottom-color 0.3s;
}
.nav-link:hover {
  color: #e63946;
}
.nav-link-active {
  color: #4a148c;
  border-bottom-color: #e63946;
  font-weight: 700;
}
.menu-toggle {
  display: none;
}

/* Mobile Layout */
@media (max-width: 768px) {
  .school-header {
    padding: 1rem 2rem;
  }
  .main-nav {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    border-top: 1px solid #f0f0f0;
  }
  .main-nav.open {
    display: flex;
  }
  .nav-link {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 15px 0;
    border-bottom: none;
    border-top: 1px solid #f0f0f0;
  }
  .nav-link-active {
    background-color: #f8f8f8;
  }
  .menu-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 10;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: #4a148c;
    transition: 0.4s;
  }
  .bar:nth-child(1).open {
    transform: translateY(8px) rotate(45deg);
  }
  .bar:nth-child(2).open {
    opacity: 0;
  }
  .bar:nth-child(3).open {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
