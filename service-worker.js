// tracker/service-worker.js
self.addEventListener('install', event => {
  console.log('Service worker installed');
  self.skipWaiting(); // optional: activate immediately
});

self.addEventListener('activate', event => {
  console.log('Service worker activated');
});
