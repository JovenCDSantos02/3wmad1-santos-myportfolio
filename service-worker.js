self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('portfolio-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/content.json',
          '/img/profile.jpg',
          '/img/book.jpg',
          '/img/arcane.jpg',
          '/img/python.png',
          '/img/icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  