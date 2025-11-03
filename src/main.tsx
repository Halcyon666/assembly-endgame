import { createRoot } from "react-dom/client";
import App from "./assembly endgame/App.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
