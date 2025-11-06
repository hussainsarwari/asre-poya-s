"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "./dictionary";

const LanguageContext = createContext({
  lang: "fa",
  setLang: () => {},
  dir: "ltr",
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("fa");

  const dir = lang === "fa" || lang === "ps" ? "rtl" : "ltr";

  const setLang = (newLang) => setLangState(newLang);

  const t = (key) =>
    key.split(".").reduce((obj, k) => obj?.[k], translations[lang]) || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
