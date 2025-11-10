<script setup></script>

<template>
  <div class="page-content about-page">
    <section class="page-intro">
      <h1>About Concepcion Holy Cross College</h1>
      <p class="tagline">An institution dedicated to forming Christ-centered individuals.</p>
    </section>

    <section class="section-card">
      <h2>Our Mission</h2>
      <p>
        CHCC commits to holistic education, fostering academic excellence and spiritual growth,
        preparing students to be compassionate leaders and faithful servants of God and community.
      </p>
    </section>

    <section class="section-card">
      <h2>Core Values</h2>
      <div class="values-list">
        <ul>
          <li>
            <strong>Fides (Faith):</strong> Deep reliance on God's providence and Christian
            teachings.
          </li>
          <li>
            <strong>Sapientia (Wisdom):</strong> The pursuit of truth and knowledge across all
            disciplines.
          </li>
          <li>
            <strong>Caritas (Charity):</strong> Living a life of selfless service and love for
            others.
          </li>
        </ul>
      </div>
    </section>

    <section class="section-card">
      <h2>History</h2>
      <p>
        Founded in **1947**, CHCC has served the local community for decades, continually expanding
        its programs from basic education to offering comprehensive college degrees, always under
        the guidance of the local Archdiocese.
      </p>
    </section>
  </div>
</template>

<style scoped>
.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.page-intro {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
}
.page-intro h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: #4a148c;
}
.tagline {
  color: #6a0e9d;
  font-style: italic;
  font-size: 1.1rem;
}
.section-card {
  background: white;
  border-radius: 10px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
}
.section-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.section-card h2 {
  color: #e63946;
  border-bottom: 2px solid #f8f8f8;
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}
.values-list ul {
  list-style-type: '🙏 ';
  padding-left: 20px;
}
.values-list li {
  margin-bottom: 10px;
}
.values-list strong {
  color: #4a148c;
}

@media (max-width: 768px) {
  .page-intro {
    padding: 1.5rem;
  }
  .page-intro h1 {
    font-size: 2rem;
  }
  .section-card {
    padding: 1.5rem;
  }
}
</style>
