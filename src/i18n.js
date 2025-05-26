// import i18next from "i18next";
// import i18nextXHRbackend from "i18next-xhr-backend";
// import { initReactI18next } from "react-i18next";

// const fallbackLng = ["en"];
// const availableLanguages = ["en", "ru", "uk"];

// i18next
//   .use(i18nextXHRbackend)
//   .use(initReactI18next)
//   .init({
//     fallbackLng,
//     lng: "en",
//     whitelist: availableLanguages,
//     backend: {
//       loadPath: "/locales/{{lng}}/{{ns}}.json",
//     },
//   });

// export default i18next;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
const availableLanguages = ["en", "rs", "uk"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    lng: "en",
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
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
