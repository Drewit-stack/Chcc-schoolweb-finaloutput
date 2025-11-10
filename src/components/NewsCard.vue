<script setup>
defineProps({
  title: String,
  date: String,
  summary: String,
})
</script>

<template>
  <div class="news-card">
    <span class="news-date">{{ date }}</span>
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
    <a href="#" class="read-more">Read More &rarr;</a>
  </div>
</template>

<style scoped>
.news-card {
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out;
  display: flex;
  flex-direction: column;
}
.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.news-date {
  display: block;
  font-size: 0.9rem;
  color: #e63946;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
h3 {
  color: #4a148c;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
}
p {
  flex-grow: 1;
}
.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #6a0e9d;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
.read-more:hover {
  color: #e63946;
}
</style>
