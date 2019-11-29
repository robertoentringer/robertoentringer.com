const cacheName = "29-nov-2019-v2"
const urlsToCache = ["/", "/manifest.json"]

self.addEventListener("install", e =>
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urlsToCache)))
)

self.addEventListener("fetch", e =>
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
)
