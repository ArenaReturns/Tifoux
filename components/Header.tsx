import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { rocknRollFont } from "@/utils/fonts";

interface HeaderProps {}

const navigation = [
  { name: "navbar.links.index", href: "/", isExternal: false },
  { name: "navbar.links.download", href: "/download", isExternal: false },
  { name: "navbar.links.faq", href: "/faq", isExternal: false },
  {
    name: "navbar.links.discord",
    href: "https://discord.gg/arenareturns",
    isExternal: true,
  },
  {
    name: "navbar.links.twitter",
    href: "https://twitter.com/ArenaReturns",
    isExternal: true,
  },
  {
    name: "navbar.links.github",
    href: "https://github.com/ArenaReturns",
    isExternal: true,
  },
];
const middleNavIndex = Math.ceil(navigation.length / 2);
const navigationLeft = navigation.splice(0, middleNavIndex);
const navigationRight = navigation.splice(-middleNavIndex);

const lang = [
  { name: "Français", locale: "fr", flag: "fr" },
  { name: "English", locale: "en", flag: "gb" },
  { name: "Español", locale: "es", flag: "es" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className="bg-[#372820]">
      <nav className="mt-3 mx-auto flex max-w-5xl items-center justify-center p-4 lg:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden items-center justify-between w-full">
          <Link href="/">
            <span className="sr-only">Arena Returns</span>
            <Image className="h-12 w-auto" src="/logo-square.png" alt="" width={202} height={128} />
          </Link>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t("navbar.mobile.open")}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-20 lg:justify-around lg:flex-1">
          {navigationLeft.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className={`${rocknRollFont.className} text-sm font-normal leading-6 text-yellow-50 hover:text-yellow-500 duration-500 transition-colors`}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
              >
                {t(item.name)}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex lg:z-10 shrink-0">
          <Link href="/" className="lg:-my-16 lg:translate-y-6">
            <span className="sr-only">Arena Returns</span>
            <Image className="h-8 lg:h-32 w-auto" src="/logo.png" alt="" width={202} height={128} />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-20 justify-around flex-1">
          {navigationRight.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className={`${rocknRollFont.className} text-sm font-normal leading-6 text-yellow-50 hover:text-yellow-500 duration-500 transition-colors`}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
              >
                {t(item.name)}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="lg:block hidden absolute top-3 right-0 z-50">
          <Popover className="fixed right-3">
            <Popover.Button
              aria-label={t("navbar.language") ?? "Language"}
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-50"
            >
              {lang.map((item) => (
                <span key={item.name} className={`fi fi-${item.flag}`} />
              ))}
              <ChevronDownIcon className="h-5 w-5 flex-none text-yellow-50" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-12 top-full z-10 mt-3 w-56 rounded-xl bg-[#755938] p-2 shadow-lg ring-1 ring-amber-900/20">
                {lang.map((item) => (
                  <Popover.Button
                    key={item.name}
                    as="span"
                    onClick={() => onToggleLanguageClick(item.locale)}
                    className="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-yellow-50 hover:bg-amber-900/20 hover:cursor-pointer"
                  >
                    <span className={`fi fi-${item.flag}`} /> {item.name}
                  </Popover.Button>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#372820] px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">Arena Returns</span>
              <Image className="h-12 w-auto" src="/logo-square.png" alt="" width={202} height={128} />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-100" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{t("navbar.mobile.close")}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationLeft.concat(navigationRight).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-yellow-50 hover:bg-[#755938]"
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </div>
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-yellow-50 hover:bg-[#755938]">
                      <span className="flex gap-x-2">
                        {lang.map((item) => (
                          <span key={item.name} className={`fi fi-${item.flag}`} />
                        ))}
                      </span>
                      <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {lang.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="span"
                          onClick={() => onToggleLanguageClick(item.locale)}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-yellow-50 hover:bg-[#755938] hover:cursor-pointer"
                        >
                          <span className={`fi fi-${item.flag}`} /> {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
