import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Inter, RocknRoll_One } from "next/font/google";

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

export const rocknRollFont = RocknRoll_One({
  subsets: ["latin"],
  weight: "400",
});

export const interFont = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
