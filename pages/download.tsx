import Head from "next/head";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { copperplateFont, interFont } from "@/utils/fonts";
import dynamic from "next/dynamic";
import illusArenaImg from "@/public/assets/illus-arena.png";

export default function Download() {
  const { t } = useTranslation("download");

  const DynamicDownload = dynamic(() => import("../components/DynamicDownload"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>{`Arena Returns - ${t("html.title")}`}</title>
        <meta name="description" content={`Arena Returns - ${t("html.description")}`} />
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
              <DynamicDownload />
            </div>
            <Image
              className="mt-6 md:mt-0 rounded-lg border border-[#BEA979]"
              src={illusArenaImg}
              alt=""
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
