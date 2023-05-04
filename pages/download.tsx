import Head from "next/head";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { copperplateFont, interFont, rocknRollFont } from "@/utils/fonts";

export default function Download() {
  const { t } = useTranslation("download");

  return (
    <>
      <Head>
        <title>{`Arena Returns - ${t("html.title")}`}</title>
        <meta name="description" content={`Arena Returns - ${t("html.description")}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${interFont.className} container mx-auto max-w-5xl`}>
        <Hero title={t("hero.title")} />
        <div className="bg-[#755938] rounded-none xl:rounded-2xl mt-0 xl:mt-4 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 lg:px-8 py-12 bg-gradient-to-r from-[#664C32] to-[#755938]">
            <div className="w-full md:w-1/2 max-w-[464px] md:max-w-none">
              <h1 className={`${copperplateFont.className} font-bold text-3xl sm:text-4xl`}>{t("download.title")}</h1>
              <p className="mt-6">
                <Trans t={t} i18nKey="download.description" />
              </p>
              <div className="mt-8 space-x-2 md:space-x-4 flex justify-center w-full">
                <Link
                  className={`${rocknRollFont.className} max-w-full items-center inline-flex border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t from-amber-800 via-amber-600 to-amber-600 hover:from-amber-800 hover:via-amber-600 hover:to-amber-500`}
                  href="#"
                  rel="noopener noreferrer"
                >
                  <svg className="text-white h-6 w-6 mr-2" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Windows</title>
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  <span>{t("download.windows")}</span>
                </Link>
              </div>
              <div className="flex flex-row gap-x-6 mt-4 justify-center w-full">
                <p className="text-stone-500 text-sm">{t("download.macos")}</p>
                <Link href="#" className="text-stone-400 underline text-sm hover:text-stone-200">
                  {t("download.linux")}
                </Link>
              </div>
            </div>
            <Image
              className="mt-6 md:mt-0 rounded-lg border border-[#BEA979]"
              src="/assets/illus-arena-returns-in-game.png"
              alt=""
              width={464}
              height={374}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "download"])),
    },
  };
}