<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import Papa from 'papaparse';

export default {
  name: 'KarteFilterView',
  async mounted() {
    try {
      const apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;
      await this.loadGoogleMapsApi(apiKey);
      this.initMap();
    } catch (error) {
      console.error("Error initializing Google Maps", error);
    }
  },
  methods: {
    async loadGoogleMapsApi(apiKey) {
      if (!window.google || !window.google.maps) {
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
          libraries: ["places"]
        });
        await loader.load();
      }
    },
    async initMap() {
      const berlinCenter = { lat: 52.5200, lng: 13.4050 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: berlinCenter
      });

      try {
        const csvData = await this.loadCsvData('/data/Berlin_Mensas.csv');
        this.placeMarkers(map, csvData);
      } catch (error) {
        console.error("Error processing CSV data", error);
      }
    },
    loadCsvData(filePath) {
      return new Promise((resolve, reject) => {
        Papa.parse(filePath, {
          download: true,
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error)
        });
      });
    },
    async placeMarkers(map, data) {
      for (const item of data) {
        try {
          const location = await this.geocodeAddress(item.Adresse);
          new google.maps.Marker({
            position: location,
            map: map,
            title: item.Name
          });
        } catch (error) {
          console.error("Error geocoding address", error);
        }
      }
    },
    geocodeAddress(address) {
      const geocoder = new google.maps.Geocoder();
      return new Promise((resolve, reject) => {
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK') {
            resolve(results[0].geometry.location);
          } else {
            reject('Geocode was not successful: ' + status);
          }
        });
      });
    }
  }
}
</script>

<style>
#map {
  height: 400px; /* Adjust as necessary */
  width: 100%; /* Adjust as necessary */
}
</style>

