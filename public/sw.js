// Kill switch. The site no longer uses a service worker.
// Browsers that still have an old one installed fetch this file on their next visit;
// it replaces the old worker, deletes every cache it made, unregisters itself and
// reloads open tabs so they get fresh pages from the network.
// Keep this file deployed so long-absent visitors are cleaned up too.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
