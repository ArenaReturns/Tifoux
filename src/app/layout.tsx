import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Arena returns",
  description: "Arena returns description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
