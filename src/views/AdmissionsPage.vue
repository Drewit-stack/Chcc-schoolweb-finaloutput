<script setup>
import { ref } from 'vue'

const faqs = [
  {
    id: 1,
    question: 'What are the required documents?',
    answer:
      'We require baptismal and birth certificates, good moral certificate, and previous academic records.',
  },
  {
    id: 2,
    question: 'What is the application deadline?',
    answer:
      'The application period runs from February to May. Early submission is highly recommended.',
  },
  {
    id: 3,
    question: 'Do you offer scholarships?',
    answer:
      'Yes, we offer academic, talent, and service scholarships. Details are available upon request.',
  },
]

// UPDATED: Added email and phone number states
const interestName = ref('')
const interestEmail = ref('')
const interestPhone = ref('')
const interestGrade = ref('')

const submitInquiry = () => {
  if (interestName.value && interestEmail.value && interestPhone.value && interestGrade.value) {
    alert(
      `Thank you, ${interestName.value}! Your interest in Grade/Level ${interestGrade.value} has been recorded. We will reach out to you at ${interestEmail.value} or ${interestPhone.value} shortly.`,
    )

    // Clear the form fields after successful submission
    interestName.value = ''
    interestEmail.value = ''
    interestPhone.value = ''
    interestGrade.value = ''
  } else {
    alert('Please fill out all fields.')
  }
}
</script>

<template>
  <div class="page-content admissions-page">
    <h1>Admissions Information</h1>
    <p class="tagline">Join the CHCC family and experience faith-based education.</p>

    <div class="admissions-grid">
      <section class="section-card inquiry-form">
        <h2>Schedule an Inquiry</h2>
        <form @submit.prevent="submitInquiry">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="interestName" required />

          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="interestEmail" required />

          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" v-model="interestPhone" required />

          <label for="grade">Interested Level</label>
          <select id="grade" v-model="interestGrade" required>
            <option disabled value="">Please select one</option>
            <option>Basic Education (Elementary/JHS)</option>
            <option>Senior High School (SHS)</option>
            <option>College</option>
          </select>

          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

      <section class="section-card steps-card">
        <h2>Application Process</h2>
        <ol class="steps-list">
          <li>Secure and fill out the official application form.</li>
          <li>Submit required documents to the Registrar's Office.</li>
          <li>Take the Entrance Examination (if applicable).</li>
          <li>Attend an interview with the guidance counselor.</li>
          <li>Wait for acceptance and pay the enrollment fee.</li>
        </ol>
      </section>

      <section class="section-card faq-card">
        <h2>FAQs</h2>
        <div v-for="faq in faqs" :key="faq.id" class="faq-item">
          <strong>Q: {{ faq.question }}</strong>
          <p>A: {{ faq.answer }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Desktop Layout */
.admissions-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.admissions-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 25px;
}
.inquiry-form {
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
}
.steps-card {
  order: 1;
}
.faq-card {
  order: 2;
}
.tagline {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #6a0e9d;
}

/* Shared Aesthetic Section Card Styles */
.section-card {
  background: white;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}
.section-card h2 {
  color: #e63946;
  border-bottom: 2px solid #f8f8f8;
  padding-bottom: 0.75rem;
  margin-bottom: 1.5rem;
}

/* Admissions specific styles */
.steps-list {
  padding-left: 20px;
}
.steps-list li {
  margin-bottom: 10px;
}
.faq-item {
  margin-bottom: 20px;
  padding: 10px;
  border-left: 4px solid #ffd700;
}
.faq-item strong {
  color: #4a148c;
}

/* Form Styles */
.inquiry-form label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #4a148c;
}
.inquiry-form input,
.inquiry-form select {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.inquiry-form button {
  background-color: #4a148c;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}
.inquiry-form button:hover {
  background-color: #e63946;
}

/* Responsiveness: Mobile Layout */
@media (max-width: 850px) {
  .admissions-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .inquiry-form,
  .steps-card,
  .faq-card {
    grid-column: auto;
    grid-row: auto;
  }
  /* Set specific mobile order for better flow */
  .inquiry-form {
    order: 3;
  }
  .steps-card {
    order: 1;
  }
  .faq-card {
    order: 2;
  }
}
</style>
