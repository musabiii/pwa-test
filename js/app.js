if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("js/sw.js")
    .then(() => console.log("зарегали"))
    .catch(() => console.log("fault"));
}
