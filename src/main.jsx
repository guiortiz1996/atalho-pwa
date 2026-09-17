import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// PWA: registra o service worker (cache offline)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

// Vercel Web Analytics (injetado em runtime: o Vite não tenta resolver esse caminho no build)
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
const _a = document.createElement("script");
_a.defer = true;
_a.src = "/_vercel/insights/script.js";
document.head.appendChild(_a);
