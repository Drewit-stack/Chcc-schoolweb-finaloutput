<script setup>
import NewsCard from '../components/NewsCard.vue'

const newsItems = [
  {
    id: 1,
    title: 'Feast of the Holy Cross Celebration',
    date: 'Sep 14, 2025',
    summary: 'Join us for mass and a community program celebrating our patronal feast day.',
  },
  {
    id: 2,
    title: 'Enrollment for SY 2025-2026 Now Open',
    date: 'Oct 25, 2025',
    summary: 'Applications for all levels (Basic Ed, SHS, College) are being accepted. Enroll now!',
  },
  {
    id: 3,
    title: 'Community Outreach Drive Success',
    date: 'Oct 15, 2025',
    summary: 'Our students distributed aid to 100 families, demonstrating Christian service.',
  },
]
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-overlay">
        <h1>Concepcion Holy Cross College</h1>
        <p>Faith. Excellence. Service. Rooted in Catholic Tradition.</p>
      </div>
    </section>

    <section class="news-section">
      <h2>📰 Announcements</h2>
      <div class="news-grid">
        <NewsCard
          v-for="item in newsItems"
          :key="item.id"
          :title="item.title"
          :date="item.date"
          :summary="item.summary"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background-image: url('/chcc_anniversary_logo.png'); /* Set the image as background */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: inset 0 -10px 15px rgba(0, 0, 0, 0.1);
  position: relative; /* Needed for overlay positioning */
}

.hero-overlay {
  /* New style for the overlay */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 20, 140, 0.6); /* Semi-transparent deep purple overlay */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 6rem 2rem; /* Matches hero-section padding */
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white; /* Ensure text is white over the overlay */
  z-index: 1; /* Ensure text is above overlay */
}
.hero-section p {
  font-size: 1.25rem;
  color: #ffd700; /* Gold/Yellow accent */
  z-index: 1; /* Ensure text is above overlay */
}
.news-section {
  padding: 0 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
.news-section h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .hero-section,
  .hero-overlay {
    padding: 4rem 1rem;
  }
  .hero-section h1 {
    font-size: 2rem;
  }
  .news-section {
    padding: 0 2rem;
  }
}
</style>
