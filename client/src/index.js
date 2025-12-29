// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ForgeProvider, ToastProvider } from "wss3-forge";
import "wss3-forge/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ForgeProvider mode="dark">
      <ToastProvider position="bottom-right">
        <App />
      </ToastProvider>
    </ForgeProvider>
  </React.StrictMode>
);
