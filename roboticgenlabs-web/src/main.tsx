import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Wait for #preloader to be removed before mounting the app
function waitForPreloaderToDisappear(): Promise<void> {
  return new Promise((resolve) => {
    const preloader = document.getElementById("preloader");

    if (!preloader) {
      resolve();
      return;
    }

    const observer = new MutationObserver(() => {
      if (!document.getElementById("preloader")) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(document.body, { childList: true });
  });
}

waitForPreloaderToDisappear().then(() => {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
