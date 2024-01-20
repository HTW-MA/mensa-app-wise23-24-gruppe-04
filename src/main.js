import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import './registerServiceWorker'
import { Loader } from '@googlemaps/js-api-loader';


document.addEventListener('DOMContentLoaded', () => {
    const isNightMode = localStorage.getItem('isNightMode') === 'true';
    if (isNightMode) {
      document.body.classList.add("night");
    } else {
      document.body.classList.add("day");
    }
  });
  
  createApp(App).use(router).mount("#app");

// Standardmodus als Tagmodus festlegen
document.body.classList.add("day");


// Google Maps
const googleMapsApiKey = 'AIzaSyBo6zblS1yTHDTQ8FGptUdrWSrOLbYwAFs';

const loader = new Loader({
  apiKey: googleMapsApiKey,
  version: 'weekly', // or specify a version number
  libraries: ['places'] // include additional libraries as needed
});

loader.load().then(() => {
  // Google Maps API is loaded and available
  // Initialize your map or other components that depend on Google Maps here
  initMap();
}).catch(e => {
  // Handle errors in loading the API
  console.error(e);
});

function initMap() {
  // Your map initialization logic
  // Example: new google.maps.Map(document.getElementById('map'), {...});
}
