import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

export const copperplateFont = localFont({
  src: [
    {
      path: "../styles/fonts/CopperplateRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/CopperplateItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/CopperplateBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/CopperplateBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
