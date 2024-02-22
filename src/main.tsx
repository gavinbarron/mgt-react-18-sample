import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Msal2Provider, Providers } from "@microsoft/mgt";

Providers.globalProvider = new Msal2Provider({
  clientId: "2dfea037-938a-4ed8-9b35-c05708a1b241",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
