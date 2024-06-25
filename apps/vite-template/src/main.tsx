import App from "@/App";
import React from "react";
import ReactDOM from "react-dom/client";

async function enableMocking() {
  if (import.meta.env.MODE === "production") {
    return;
  }
  const { worker } = await import("@/mock-api/browser");
  console.log("Mocking worker loaded", worker);

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  console.log("Starting the mocking worker");
  return worker.start();
}

enableMocking().then(() => {
  console.log("run app");
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
