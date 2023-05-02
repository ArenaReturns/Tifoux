import Head from "next/head";
import Image from "next/image";
import { Inter, RocknRoll_One } from "next/font/google";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { copperplateFont } from "./_app";

const inter = Inter({ subsets: ["latin"] });
const rocknRoll = RocknRoll_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Download() {
  return (
    <>
      <Head>
        <title>Arena Returns - Téléchargement</title>
        <meta name="description" content="Arena Returns - Serveur privé Dofus Arena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${inter.className} container mx-auto max-w-5xl`}>
        <Hero title="Rejoindre l'aventure" />
        <div className="bg-[#755938] rounded-none xl:rounded-2xl mt-0 xl:mt-4 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 lg:px-8 py-12 bg-gradient-to-r from-[#664C32] to-[#755938]">
            <div className="w-full md:w-1/2 max-w-[464px] md:max-w-none">
              <h1 className={`${copperplateFont.className} font-bold text-3xl sm:text-4xl`}>Téléchargement</h1>
              <p className="mt-6">
                Notre Launcher est actuellement disponible sur Windows et Linux, une version Mac sera prochainement disponible.
                <br />
                Pour plus d&apos;informations et en cas de problème, rejoignez-nous sur Discord.
                <br />
                <br />
                <b>Le téléchargement du Launcher est actuellement désactivé.</b>
              </p>
              <div className="mt-8 space-x-2 md:space-x-4 flex justify-center w-full">
                <Link
                  className={`${rocknRoll.className} max-w-full items-center inline-flex border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t from-amber-800 via-amber-600 to-amber-600 hover:from-amber-800 hover:via-amber-600 hover:to-amber-500`}
                  href="#"
                  rel="noopener noreferrer"
                >
                  <svg className="text-white h-6 w-6 mr-2" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Windows</title>
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  <span>Télécharger pour Windows</span>
                </Link>
              </div>
              <div className="flex flex-row gap-x-6 mt-4 justify-center w-full">
                <p className="text-stone-500 text-sm">Client MacOS</p>
                <Link href="#" className="text-stone-400 underline text-sm hover:text-stone-200">
                  Client Linux (.zip)
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
