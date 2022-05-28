if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((reg) => {
      console.log(`Registered service worker. Scope: ${reg.scope}`);
    })
    .catch((err) => {
      console.error(`Service worker error: ${err}`);
    });
} else {
  console.warn("Service worker not available");
}
