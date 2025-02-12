import { useTranslation } from "react-i18next";

import React from "react";

const TestPage = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={handleChangeLng("th")}>TEST</button>

      <h1>{t("title")}</h1>
    </div>
  );
};

export default TestPage;
