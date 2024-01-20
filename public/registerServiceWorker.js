/* eslint-disable no-console */

import { register } from 'register-service-worker'

register(`service-worker.js`, {
  ready () {
    console.log(
      'App is being served from cache by a service worker.\n' +
      'For more details, visit https://goo.gl/AFskqB'
    )
  },
  registered (registration) {
    console.log('Service worker has been registered.')
    // Überprüfen, ob Hintergrund-Synchronisation unterstützt wird
    if ('SyncManager' in window) {
      registration.sync.register('offline-notification')
        .then(() => {
          console.log('Background sync for offline notification registered successfully.');
        })
        .catch((error) => {
          console.error('Background sync registration failed:', error);
        });
    }
  },
  cached () {
    console.log('Content has been cached for offline use.')
  },
  updatefound () {
    console.log('New content is downloading.')
  },
  updated (registration) {
    console.log('New content is available; please refresh.', registration)
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  }
})


Notification.requestPermission().then(function(permission) {
  if (permission === "granted") {
    navigator.serviceWorker.ready.then(function(registration) {

    });
  }
});
