import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const uiElement = document.createElement("div");
uiElement.id = "vite_app";
document.body.appendChild(uiElement);

ReactDOM.createRoot(uiElement as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
