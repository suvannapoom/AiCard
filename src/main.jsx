import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContextProvider from "./context/ProductContextProvider.jsx";
import i18next from "i18next";

import global_en from "./locales/en/global.json";
import global_th from "./locales/th/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lng") || "en",
  en: {
    global_en,
  },
  th: {
    global_th,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ProductContextProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </ProductContextProvider>
  // </React.StrictMode>
);
