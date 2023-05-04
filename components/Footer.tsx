import React from "react";
import { Trans, useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer>
      <div className="mx-auto overflow-hidden py-8 px-6 sm:py-10 lg:px-8">
        <p className="mt-8 text-center text-xs leading-5 text-gray-100 text-opacity-50">
          <Trans t={t} i18nKey="footer" />
        </p>
      </div>
    </footer>
  );
};