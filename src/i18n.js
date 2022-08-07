import i18n from "i18next";
import common_en from "./translations/en/common.json";

i18n.init({
  lng: "en",
  resources: {
    en: {
      common: common_en,
    }
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
