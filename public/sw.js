// Atalho PWA — cache simples: rede primeiro, cache como reserva (funciona offline após a 1ª visita)
const CACHE = "atalho-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      try {
        const res = await fetch(e.request);
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      } catch {
        const guardado = await cache.match(e.request);
        return guardado || Response.error();
      }
    })
  );
});
