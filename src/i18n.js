import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ru", "uk"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
    keySeparator: ".",
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
    backend: {
      loadPath: (lng, ns) => {
        // Get the base URL of the app
        const baseUrl = window.location.origin + window.location.pathname;

        // Check if the app is running in production
        const isProduction = process.env.NODE_ENV === "production";

        // Construct the load path for the translation file
        const path = isProduction
          ? `https://www.skycity.solutions/public/locales/${lng}/${ns}.json`
          : `/locales/${lng}/${ns}.json`;

        return path;
      },
    },
  });

export default i18n;
