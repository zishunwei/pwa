const cacheFiles = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  'favicon.ico',
  '/css/leaflet.css',
  '/css/main.css',
  '/js/leaflet.js',
  '/js/main.js',
  '/js/FeatureGroup.LoadEvents.js',
  '/images/icons/app-icon-144x144.png',
  '/images/icons/apple-icon-152x152.png',
  '/images/icons/apple-icon-180x180.png',
  '/images/icons/apple-icon-144x144.png',
  '/images/icons/apple-icon-120x120.png',
  '/images/icons/apple-icon-114x114.png',
  '/images/icons/apple-icon-76x76.png',
  '/images/icons/apple-icon-72x72.png',
  '/images/icons/apple-icon-60x60.png',
  '/images/icons/apple-icon-57x57.png',
  '/geojson/cambridgeshire_pois.geojson',
  '/maptiles_uk/0/0/0.png', '/maptiles_uk/1/0/0.png', '/maptiles_uk/1/1/0.png', '/maptiles_uk/2/1/1.png', '/maptiles_uk/2/2/1.png', '/maptiles_uk/3/3/2.png', '/maptiles_uk/3/4/2.png', '/maptiles_uk/4/7/4.png', '/maptiles_uk/4/7/5.png', '/maptiles_uk/4/8/4.png', '/maptiles_uk/4/8/5.png', '/maptiles_uk/5/15/10.png', '/maptiles_uk/5/15/9.png', '/maptiles_uk/5/16/10.png', '/maptiles_uk/5/16/9.png', '/maptiles_uk/6/30/18.png', '/maptiles_uk/6/30/19.png', '/maptiles_uk/6/30/20.png', '/maptiles_uk/6/30/21.png', '/maptiles_uk/6/31/18.png', '/maptiles_uk/6/31/19.png', '/maptiles_uk/6/31/20.png', '/maptiles_uk/6/31/21.png', '/maptiles_uk/6/32/18.png', '/maptiles_uk/6/32/19.png', '/maptiles_uk/6/32/20.png', '/maptiles_uk/6/32/21.png', '/maptiles_uk/7/61/36.png', '/maptiles_uk/7/61/37.png', '/maptiles_uk/7/61/38.png', '/maptiles_uk/7/61/39.png', '/maptiles_uk/7/61/40.png', '/maptiles_uk/7/61/41.png', '/maptiles_uk/7/61/42.png', '/maptiles_uk/7/61/43.png', '/maptiles_uk/7/62/36.png', '/maptiles_uk/7/62/37.png', '/maptiles_uk/7/62/38.png', '/maptiles_uk/7/62/39.png', '/maptiles_uk/7/62/40.png', '/maptiles_uk/7/62/41.png', '/maptiles_uk/7/62/42.png', '/maptiles_uk/7/62/43.png', '/maptiles_uk/7/63/36.png', '/maptiles_uk/7/63/37.png', '/maptiles_uk/7/63/38.png', '/maptiles_uk/7/63/39.png', '/maptiles_uk/7/63/40.png', '/maptiles_uk/7/63/41.png', '/maptiles_uk/7/63/42.png', '/maptiles_uk/7/63/43.png', '/maptiles_uk/7/64/36.png', '/maptiles_uk/7/64/37.png', '/maptiles_uk/7/64/38.png', '/maptiles_uk/7/64/39.png', '/maptiles_uk/7/64/40.png', '/maptiles_uk/7/64/41.png', '/maptiles_uk/7/64/42.png', '/maptiles_uk/7/64/43.png', '/maptiles_uk/7/65/36.png', '/maptiles_uk/7/65/37.png', '/maptiles_uk/7/65/38.png', '/maptiles_uk/7/65/39.png', '/maptiles_uk/7/65/40.png', '/maptiles_uk/7/65/41.png', '/maptiles_uk/7/65/42.png', '/maptiles_uk/7/65/43.png', '/maptiles_uk/8/122/72.png', '/maptiles_uk/8/122/73.png', '/maptiles_uk/8/122/74.png', '/maptiles_uk/8/122/75.png', '/maptiles_uk/8/122/76.png', '/maptiles_uk/8/122/77.png', '/maptiles_uk/8/122/78.png', '/maptiles_uk/8/122/79.png', '/maptiles_uk/8/122/80.png', '/maptiles_uk/8/122/81.png', '/maptiles_uk/8/122/82.png', '/maptiles_uk/8/122/83.png', '/maptiles_uk/8/122/84.png', '/maptiles_uk/8/122/85.png', '/maptiles_uk/8/122/86.png', '/maptiles_uk/8/122/87.png', '/maptiles_uk/8/123/72.png', '/maptiles_uk/8/123/73.png', '/maptiles_uk/8/123/74.png', '/maptiles_uk/8/123/75.png', '/maptiles_uk/8/123/76.png', '/maptiles_uk/8/123/77.png', '/maptiles_uk/8/123/78.png', '/maptiles_uk/8/123/79.png', '/maptiles_uk/8/123/80.png', '/maptiles_uk/8/123/81.png', '/maptiles_uk/8/123/82.png', '/maptiles_uk/8/123/83.png', '/maptiles_uk/8/123/84.png', '/maptiles_uk/8/123/85.png', '/maptiles_uk/8/123/86.png', '/maptiles_uk/8/123/87.png', '/maptiles_uk/8/124/72.png', '/maptiles_uk/8/124/73.png', '/maptiles_uk/8/124/74.png', '/maptiles_uk/8/124/75.png', '/maptiles_uk/8/124/76.png', '/maptiles_uk/8/124/77.png', '/maptiles_uk/8/124/78.png', '/maptiles_uk/8/124/79.png', '/maptiles_uk/8/124/80.png', '/maptiles_uk/8/124/81.png', '/maptiles_uk/8/124/82.png', '/maptiles_uk/8/124/83.png', '/maptiles_uk/8/124/84.png', '/maptiles_uk/8/124/85.png', '/maptiles_uk/8/124/86.png', '/maptiles_uk/8/124/87.png', '/maptiles_uk/8/125/72.png', '/maptiles_uk/8/125/73.png', '/maptiles_uk/8/125/74.png', '/maptiles_uk/8/125/75.png', '/maptiles_uk/8/125/76.png', '/maptiles_uk/8/125/77.png', '/maptiles_uk/8/125/78.png', '/maptiles_uk/8/125/79.png', '/maptiles_uk/8/125/80.png', '/maptiles_uk/8/125/81.png', '/maptiles_uk/8/125/82.png', '/maptiles_uk/8/125/83.png', '/maptiles_uk/8/125/84.png', '/maptiles_uk/8/125/85.png', '/maptiles_uk/8/125/86.png', '/maptiles_uk/8/125/87.png', '/maptiles_uk/8/126/72.png', '/maptiles_uk/8/126/73.png', '/maptiles_uk/8/126/74.png', '/maptiles_uk/8/126/75.png', '/maptiles_uk/8/126/76.png', '/maptiles_uk/8/126/77.png', '/maptiles_uk/8/126/78.png', '/maptiles_uk/8/126/79.png', '/maptiles_uk/8/126/80.png', '/maptiles_uk/8/126/81.png', '/maptiles_uk/8/126/82.png', '/maptiles_uk/8/126/83.png', '/maptiles_uk/8/126/84.png', '/maptiles_uk/8/126/85.png', '/maptiles_uk/8/126/86.png', '/maptiles_uk/8/126/87.png', '/maptiles_uk/8/127/72.png', '/maptiles_uk/8/127/73.png', '/maptiles_uk/8/127/74.png', '/maptiles_uk/8/127/75.png', '/maptiles_uk/8/127/76.png', '/maptiles_uk/8/127/77.png', '/maptiles_uk/8/127/78.png', '/maptiles_uk/8/127/79.png', '/maptiles_uk/8/127/80.png', '/maptiles_uk/8/127/81.png', '/maptiles_uk/8/127/82.png', '/maptiles_uk/8/127/83.png', '/maptiles_uk/8/127/84.png', '/maptiles_uk/8/127/85.png', '/maptiles_uk/8/127/86.png', '/maptiles_uk/8/127/87.png', '/maptiles_uk/8/128/72.png', '/maptiles_uk/8/128/73.png', '/maptiles_uk/8/128/74.png', '/maptiles_uk/8/128/75.png', '/maptiles_uk/8/128/76.png', '/maptiles_uk/8/128/77.png', '/maptiles_uk/8/128/78.png', '/maptiles_uk/8/128/79.png', '/maptiles_uk/8/128/80.png', '/maptiles_uk/8/128/81.png', '/maptiles_uk/8/128/82.png', '/maptiles_uk/8/128/83.png', '/maptiles_uk/8/128/84.png', '/maptiles_uk/8/128/85.png', '/maptiles_uk/8/128/86.png', '/maptiles_uk/8/128/87.png', '/maptiles_uk/8/129/72.png', '/maptiles_uk/8/129/73.png', '/maptiles_uk/8/129/74.png', '/maptiles_uk/8/129/75.png', '/maptiles_uk/8/129/76.png', '/maptiles_uk/8/129/77.png', '/maptiles_uk/8/129/78.png', '/maptiles_uk/8/129/79.png', '/maptiles_uk/8/129/80.png', '/maptiles_uk/8/129/81.png', '/maptiles_uk/8/129/82.png', '/maptiles_uk/8/129/83.png', '/maptiles_uk/8/129/84.png', '/maptiles_uk/8/129/85.png', '/maptiles_uk/8/129/86.png', '/maptiles_uk/8/129/87.png', '/maptiles_uk/8/130/72.png', '/maptiles_uk/8/130/73.png', '/maptiles_uk/8/130/74.png', '/maptiles_uk/8/130/75.png', '/maptiles_uk/8/130/76.png', '/maptiles_uk/8/130/77.png', '/maptiles_uk/8/130/78.png', '/maptiles_uk/8/130/79.png', '/maptiles_uk/8/130/80.png', '/maptiles_uk/8/130/81.png', '/maptiles_uk/8/130/82.png', '/maptiles_uk/8/130/83.png', '/maptiles_uk/8/130/84.png', '/maptiles_uk/8/130/85.png', '/maptiles_uk/8/130/86.png', '/maptiles_uk/8/130/87.png'
];

const cacheName = 'static';

// Cache our known resources during install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.log('[Service Worker] Precaching App Shell');
      cache.addAll(cacheFiles);
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
        // Return the cached version
        return response;
      } else {
        //However if we don't find it in the request, then we want to return the fetch request where we reach out or where we simply continue with the original request, so return fetch event request.
        // So this now allows us to continue with the network request if we want to get something which is not cached but get it from the cache, well if it is in there.
        return fetch(event.request)
      }
    }) // end caches.match(e.request)
  ); // end e.respondWith
});
