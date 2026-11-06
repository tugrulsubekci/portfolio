"use client";

import { useEffect } from "react";

/**
 * The site used to install a caching service worker. Remove any that are still
 * registered and delete their caches, so visitors always get fresh pages.
 * (public/sw.js is a matching kill switch for browsers still running old pages.)
 */
export function ServiceWorkerCleanup() {
  useEffect(() => {
    navigator.serviceWorker
      ?.getRegistrations()
      .then((registrations) => registrations.forEach((r) => r.unregister()))
      .catch(() => {});
    if ("caches" in window) {
      caches
        .keys()
        .then((keys) => keys.filter((k) => k.startsWith("tugrulsubekci-")).forEach((k) => caches.delete(k)))
        .catch(() => {});
    }
  }, []);

  return null;
}
