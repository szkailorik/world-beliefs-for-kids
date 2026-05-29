const CACHE_NAME = "world-beliefs-v20260529-pwa";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260529-pwa",
  "./script.js?v=20260529-pwa",
  "./manifest.webmanifest",
  "./assets/world-beliefs-hero.jpg",
  "./assets/belief-safe.jpg",
  "./assets/belief-wonder.jpg",
  "./assets/belief-alive.jpg",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/apple-touch-icon.png",
  "./assets/card-01-safe-thumb.jpg",
  "./assets/card-02-boundary-thumb.jpg",
  "./assets/card-03-home-thumb.jpg",
  "./assets/card-04-important-thumb.jpg",
  "./assets/card-05-reasons-thumb.jpg",
  "./assets/card-06-mistakes-thumb.jpg",
  "./assets/card-07-growth-thumb.jpg",
  "./assets/card-08-questions-thumb.jpg",
  "./assets/card-09-facts-thumb.jpg",
  "./assets/card-10-choices-thumb.jpg",
  "./assets/card-11-resources-thumb.jpg",
  "./assets/card-12-money-thumb.jpg",
  "./assets/card-13-feelings-thumb.jpg",
  "./assets/card-14-rules-thumb.jpg",
  "./assets/card-15-signals-thumb.jpg",
  "./assets/card-16-attention-thumb.jpg",
  "./assets/card-17-world-thumb.jpg",
  "./assets/card-18-cooperation-thumb.jpg",
  "./assets/card-19-curiosity-thumb.jpg",
  "./assets/card-20-change-thumb.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(cacheFirst(request));
});

async function networkFirstPage(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put("./index.html", response.clone());
    }
    return response;
  } catch {
    return (await cache.match("./index.html", { ignoreSearch: true })) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return (await thumbFallback(request, cache)) || Response.error();
  }
}

async function thumbFallback(request, cache) {
  const url = new URL(request.url);

  if (!url.pathname.includes("/assets/card-") || !url.pathname.endsWith(".jpg")) {
    return null;
  }

  url.pathname = url.pathname.replace(".jpg", "-thumb.jpg");
  return cache.match(url.href, { ignoreSearch: true });
}
