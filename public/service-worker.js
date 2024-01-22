// service-worker.js
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
import { precacheAndRoute } from 'workbox-precaching';

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAY31L2LhK5xYsPUjSEl8Y4GPOFfRrwol4",
  authDomain: "mensaapp-f8426.firebaseapp.com",
  projectId: "mensaapp-f8426",
  storageBucket: "mensaapp-f8426.appspot.com",
  messagingSenderId: "940851381142",
  appId: "1:940851381142:web:4a62e6cd6f421ca12ad3b7",
  measurementId: "G-VY1DF9GLHX"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'assets-cache-v5';
let isOfflineNotified = false; // Variable für den Offline-Status
let isOnlineNotified = true;   // Variable für den Online-Status

function showNotification(message) {
  self.registration.showNotification(message);
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(networkResponse => {
        if (networkResponse.ok) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }

        // anzeigen, wenn offline
        if (!navigator.onLine && !isOfflineNotified) {
          showNotification('Du bist offline');
          isOfflineNotified = true;
        }

        return networkResponse;
      });
    })
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'offline-notification') {
    // anzeigen, wenn online
    if (navigator.onLine && !isOnlineNotified) {
      showNotification('Du bist wieder online');
      isOnlineNotified = true;
    }
  }
});

// Hier wird das Sync-Event angestoßen
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(
    self.registration.showNotification('Push-Benachrichtigung', options)
  );

  // Hier wird das Sync-Event ausgelöst
  self.registration.sync.register('sync-offline-notification');
});
