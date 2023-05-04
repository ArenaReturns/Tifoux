import Head from "next/head";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { copperplateFont, interFont, rocknRollFont } from "./_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("index");

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
        <Hero title="Arena Returns">
          <p className="mt-6 max-w-lg text-xl text-gray-200 sm:max-w-3xl">{t("hero.description")}</p>
        </Hero>
        <div className="bg-[#755938] rounded-none xl:rounded-2xl mt-0 xl:mt-4 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 lg:px-8 py-12 bg-gradient-to-r from-[#664C32] to-[#755938]">
            <div className="w-full md:w-1/2 max-w-[464px] md:max-w-none">
              <h1 className={`${copperplateFont.className} font-bold text-3xl sm:text-4xl`}>{t("stayInformed.title")}</h1>
              <p className="mt-6">
                <Trans t={t} i18nKey="stayInformed.description" />
              </p>
              <div className="mt-8 space-x-2 md:space-x-4 w-full">
                <Link
                  className={`${rocknRollFont.className} max-w-[156px] items-center inline-flex border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t from-[#5865F2] via-[#5865F2] to-[#8791FF] hover:from-[#5865F2] hover:via-[#8791FF] hover:to-[#a0a8ff]`}
                  href="https://discord.gg/arenareturns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="text-white h-6 w-6 mr-2" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>{t("stayInformed.discord")}</title>
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  <span>{t("stayInformed.discord")}</span>
                </Link>
                <Link
                  className={`${rocknRollFont.className} max-w-[156px] items-center inline-flex border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t from-[#1DA1F2] via-[#1DA1F2] to-[#78CCFF] hover:from-[#1DA1F2] hover:via-[#78CCFF] hover:to-[#8bd3ff]`}
                  href="https://twitter.com/ArenaReturns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="text-white h-6 w-6 mr-2" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>{t("stayInformed.twitter")}</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span>{t("stayInformed.twitter")}</span>
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
          <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 lg:px-8 py-12 bg-gradient-to-l from-[#664C32] to-[#755938]">
            <Image className="mb-6 md:mb-0 rounded-lg border border-[#BEA979]" src="/assets/illus-arena.png" alt="" width={464} height={374} />
            <div className="w-full md:w-1/2 max-w-[464px] md:max-w-none">
              <h1 className={`${copperplateFont.className} font-bold text-3xl sm:text-4xl`}>{t("playNow.title")}</h1>
              <p className="mt-6">
                <Trans t={t} i18nKey="playNow.description" />
              </p>
              <div className="mt-8 space-x-2 md:space-x-4 w-full flex">
                <Link
                  className={`${rocknRollFont.className} items-center inline-flex border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t from-amber-800 via-amber-600 to-amber-600 hover:from-amber-800 hover:via-amber-600 hover:to-amber-500`}
                  href="/download"
                >
                  <span>{t("playNow.button")}</span>
                </Link>
              </div>
            </div>
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
      ...(await serverSideTranslations(locale, ["common", "index"])),
    },
  };
}