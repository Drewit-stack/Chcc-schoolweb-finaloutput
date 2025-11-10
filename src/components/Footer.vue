<template>
  <footer class="school-footer">
    <div class="footer-grid">
      <div class="footer-section contact-info">
        <h3>Contact Concepcion Holy Cross College</h3>
        <p>CHCC Campus, Concepcion, Tarlac, Philippines</p>
        <p>Phone: (045) 923-0111</p>
        <p>Email: <a href="mailto:info@chcc.edu.ph">info@chcc.edu.ph</a></p>
      </div>

      <div class="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><RouterLink to="/admissions">Enrollment</RouterLink></li>
          <li><RouterLink to="/about">History & Values</RouterLink></li>
          <li><a href="#">Academic Programs</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div class="footer-section social-media">
        <h3>Connect</h3>
        <div class="social-icons">
          <a href="#"><span class="icon">📘</span></a>
          <a href="#"><span class="icon">📸</span></a>
          <a href="#"><span class="icon">🐦</span></a>
        </div>
      </div>
    </div>

    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} Concepcion Holy Cross College. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.school-footer {
  background-color: #4a148c;
  color: #f8f8f8;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.footer-section h3 {
  color: #ffd700;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
}
.contact-info p,
.quick-links li,
.copyright {
  font-size: 0.95rem;
}
.contact-info a {
  color: #f8f8f8;
  text-decoration: none;
  transition: color 0.3s;
}
.contact-info a:hover {
  color: #e63946;
}
.quick-links ul {
  list-style: none;
  padding: 0;
}
.quick-links a {
  color: #f8f8f8;
  text-decoration: none;
  display: block;
  padding: 5px 0;
  transition: color 0.3s;
}
.quick-links a:hover {
  color: #e63946;
}
.social-icons a {
  text-decoration: none;
  margin-right: 15px;
  font-size: 1.6rem;
  transition: transform 0.3s;
}
.social-icons a:hover {
  transform: scale(1.1);
}
.social-icons .icon {
  color: #ffd700;
}
.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 2rem;
  font-size: 0.8rem;
}
@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .social-icons {
    margin-top: 1rem;
  }
}
</style>
