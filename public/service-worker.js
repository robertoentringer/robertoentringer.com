const cacheVersion = "2-december-2019"
const urlsToCache = ["/", "/manifest.json"]

self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(cacheVersion).then((cache) => cache.addAll(urlsToCache)))
)

self.addEventListener("fetch", (e) =>
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)))
)

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== cacheVersion) return caches.delete(cacheName)
        })
      )
    )
  )
})
