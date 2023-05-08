import { Trans, useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { interFont } from "@/utils/fonts";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FAQ() {
  const { t } = useTranslation("faq");
  const faq = Object.keys(t("faq", { returnObjects: true }));

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
          <div className="h-full items-center justify-between px-6 lg:px-8 py-12 bg-gradient-to-r from-[#664C32] to-[#755938]">
            {faq.map((q, i) => {
              return (
                <Disclosure key={i} as="div" className={`${i > 0 ? "mt-5" : ""} w-full`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="mb-2 w-full rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                        <span>
                          <Trans t={t} i18nKey={"faq." + q + ".q"} />
                        </span>
                        <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-amber-500 float-right`} />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <Trans t={t} i18nKey={"faq." + q + ".a"} />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
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
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
  };
}
