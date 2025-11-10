import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Imports the router configuration

// Create the Vue application instance
const app = createApp(App)

// Use the router throughout the application
app.use(router)

// Mount the application to the '#app' element in index.html
app.mount('#app')
