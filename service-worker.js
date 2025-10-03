// Service Worker for PWA
const CACHE_NAME = 'amader-community-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/portfolio.html',
  '/contact.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  // Add icons if available
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});
