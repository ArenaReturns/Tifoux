import { copperplateFont } from "@/pages/_app";
import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ title, children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2" />
      <div className="mx-auto">
        <div className="relative xl:shadow-lg overflow-hidden xl:rounded-2xl">
          <div className="absolute inset-0">
            <Image className="h-full w-full object-cover blur-sm" alt="Arena Returns" src="/assets/header.png" width={1024} height={420} priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#372820] via-[#37282050] to-transparent" />
          </div>
          <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className={`${copperplateFont.className} text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`}>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
