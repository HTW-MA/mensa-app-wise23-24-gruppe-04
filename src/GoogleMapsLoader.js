import { Loader } from "@googlemaps/js-api-loader";

let googleMapsApiLoaded = false;
let googleMapsPromise;

export const loadGoogleMapsApi = (apiKey) => {
  if (!googleMapsApiLoaded) {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places']
    });

    googleMapsPromise = loader.load().then(() => {
      googleMapsApiLoaded = true;
      return true;
    }).catch(error => {
      console.error("Error loading Google Maps", error);
      throw error;
    });
  }

  return googleMapsPromise;
};