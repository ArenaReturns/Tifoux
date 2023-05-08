import React from "react";
import { Trans, useTranslation } from "next-i18next";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer>
      <div className="mx-auto overflow-hidden py-8 px-6 sm:py-10 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-100 text-opacity-50">
          Tifoux v{publicRuntimeConfig?.version}
          <br />
          <Trans t={t} i18nKey="footer" />
        </p>
      </div>
    </footer>
  );
};
