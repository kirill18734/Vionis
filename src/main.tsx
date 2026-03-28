import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MainContect } from "./AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainContect>
      <App />
    </MainContect>
  </StrictMode>,
);
