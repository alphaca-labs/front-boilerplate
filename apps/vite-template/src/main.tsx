import App from "@/App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

async function enableMocking() {
  if (import.meta.env.MODE === "production") {
    return;
  }
  const { worker } = await import("@/mock-api/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
