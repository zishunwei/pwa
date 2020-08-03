const cacheFiles = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
  'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css',
  'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
  '/images/icons/app-icon-144x144.png',
  '/css/ionicons.min.css',
  '/css/leaflet.awesome-markers.css',
  '/js/leaflet.awesome-markers.js'
];

const cacheName = 'static';

// Cache our known resources during install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.log('[Service Worker] Precaching App Shell');
      cache.addAll(cacheFiles)
    })
    .catch(function(error) {
      console.log("Caching failed", error);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Check in cache for the request being made
    caches.match(event.request)
    .then(function(response) {
      // If the request is in the cache
      if (response) {
        console.log("[ServiceWorker] Found in Cache", event.request.url, response);
        // Return the cached version
        return response;
      } else {
        return fetch(event.request)
            .then(function (res) {
              return caches.open('dynamic')
                  .then(function (cache) {
                    cache.put(event.request.url, res.clone());
                    return res;
                  })
            });
      }
    }) // end caches.match(e.request)
  ); // end e.respondWith
});
