const cacheName = "ren-v1"
const urlsToCache = ["/", "/manifest.json"]

self.addEventListener("install", e =>
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urlsToCache)))
)

self.addEventListener("fetch", e => {
  console.log(e.request.url)
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  )
})
