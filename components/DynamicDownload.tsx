import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { rocknRollFont } from "@/utils/fonts";
import { detect } from "detect-browser";

type OSType = {
  name: string;
  downloadUrl: string;
  locale: string;
  svgViewBox: string;
  svgPath: string;
  disabled?: boolean;
};

const Windows: OSType = {
  name: "Windows",
  downloadUrl: "https://launcher.arena-returns.com/download/windows",
  locale: "windows",
  svgViewBox: "0 0 24 24",
  svgPath: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801",
};

const MacOS: OSType = {
  name: "MacOS",
  downloadUrl: "#",
  locale: "macos",
  svgViewBox: "0 0 33 33",
  svgPath:
    "M20.411 5.79c0.98-1.14 1.576-2.634 1.576-4.267 0-0.183-0.007-0.364-0.022-0.542l0.002 0.023c-1.769 0.18-3.314 1.019-4.407 2.264l-0.007 0.008c-0.997 1.107-1.607 2.579-1.607 4.194 0 0.157 0.006 0.314 0.017 0.468l-0.001-0.021c0.017 0 0.037 0 0.058 0 1.774 0 3.356-0.826 4.381-2.115l0.009-0.011zM16.19 9.622c-1.185 0-3.018-1.347-4.949-1.3-2.661 0.073-4.959 1.558-6.18 3.73l-0.019 0.037c-2.646 4.592-0.682 11.375 1.898 15.108 1.266 1.817 2.759 3.861 4.739 3.798 1.899-0.081 2.612-1.233 4.917-1.233 2.288 0 2.937 1.233 4.949 1.185 2.046-0.032 3.344-1.849 4.594-3.684 0.848-1.227 1.554-2.641 2.044-4.152l0.032-0.115c-2.38-1.033-4.016-3.359-4.024-6.068v-0.001c0.023-2.406 1.304-4.507 3.216-5.68l0.029-0.017c-1.24-1.741-3.221-2.884-5.473-2.969l-0.013-0c-2.499-0.195-4.592 1.362-5.761 1.362z",
  disabled: true,
};

const Linux: OSType = {
  name: "Linux",
  downloadUrl: "https://launcher.arena-returns.com/download/linux",
  locale: "linux",
  svgViewBox: "0 0 32 32",
  svgPath:
    "M30.34,24.73a.77.77,0,0,1-.19-.79A2.75,2.75,0,0,0,27,20.38a16,16,0,0,0-3.48-8.62c-1.12-1.61-1.8-2.63-1.53-3.44A6.55,6.55,0,0,0,21,2.53,6,6,0,0,0,16,0a6,6,0,0,0-5,2.53,6.55,6.55,0,0,0-.94,5.79c.27.81-.4,1.83-1.53,3.44A16,16,0,0,0,5,20.38a2.75,2.75,0,0,0-3.19,3.56.77.77,0,0,1-.19.79l-.35.35a2.75,2.75,0,0,0-.76,2.45,2.79,2.79,0,0,0,1.57,2l4.63,2.1a4.79,4.79,0,0,0,2,.43A5,5,0,0,0,9.66,32a4.82,4.82,0,0,0,1.71-.72A14.11,14.11,0,0,0,16,32a14.06,14.06,0,0,0,4.63-.72,4.82,4.82,0,0,0,1.71.72,5,5,0,0,0,.94.09,4.79,4.79,0,0,0,2-.43l4.63-2.1a2.82,2.82,0,0,0,1.58-2,2.78,2.78,0,0,0-.77-2.45ZM12.61,3.7A4.06,4.06,0,0,1,16,2a4,4,0,0,1,3.39,1.7,4.53,4.53,0,0,1,.66,4,3.4,3.4,0,0,0-.15.92,1.23,1.23,0,0,0-.19-.31A5.32,5.32,0,0,0,16,7a5.35,5.35,0,0,0-3.71,1.29,1.23,1.23,0,0,0-.19.31A3.4,3.4,0,0,0,12,7.68,4.56,4.56,0,0,1,12.61,3.7ZM17,9.11,16,9.8l-1-.68A5.24,5.24,0,0,1,17,9.11ZM9.27,30a2.73,2.73,0,0,1-1.69-.19L3,27.74a.77.77,0,0,1-.22-1.25l.35-.35a2.77,2.77,0,0,0,.67-2.83.75.75,0,0,1,.18-.79.78.78,0,0,1,.54-.23.81.81,0,0,1,.25,0,2.78,2.78,0,0,0,1.28.1h.06l.31-.07.07,0a2.63,2.63,0,0,0,1.11-.66l.35-.35a.77.77,0,0,1,.69-.21.78.78,0,0,1,.56.44l2.1,4.62a2.84,2.84,0,0,1,.2,1.7A2.77,2.77,0,0,1,9.27,30Zm3.62-.38a4.81,4.81,0,0,0,.52-1.4,4.69,4.69,0,0,0-.34-2.91L11,20.71a2.74,2.74,0,0,0-3.84-1.27,15.07,15.07,0,0,1,3-6.53,9.8,9.8,0,0,0,1.9-3.65.92.92,0,0,0,.39.57l3,2A1,1,0,0,0,16,12a1,1,0,0,0,.56-.17l3-2a.94.94,0,0,0,.38-.57,9.8,9.8,0,0,0,1.9,3.65,15.07,15.07,0,0,1,3,6.53,2.76,2.76,0,0,0-1.81-.31,2.81,2.81,0,0,0-2,1.58l-2.1,4.63a4.74,4.74,0,0,0,.18,4.31,14,14,0,0,1-6.22,0Zm16.16-1.91-4.63,2.1a2.72,2.72,0,0,1-1.69.19,2.77,2.77,0,0,1-2.18-2.17,2.84,2.84,0,0,1,.2-1.7l2.1-4.62a.78.78,0,0,1,.56-.44h.15a.79.79,0,0,1,.54.22l.35.35a2.69,2.69,0,0,0,1.11.66l.07,0,.31.07h0a2.58,2.58,0,0,0,1.29-.09.78.78,0,0,1,1,1,2.75,2.75,0,0,0,.66,2.83l.35.35a.75.75,0,0,1,.22.68A.78.78,0,0,1,29.05,27.74Z",
};

const DownloadButton = ({ type }: { type: OSType }) => {
  const { t } = useTranslation("download");

  return (
    <div className="mt-8 space-x-2 md:space-x-4 justify-center w-full flex">
      <Link
        className={`${rocknRollFont.className} max-w-full border-2 border-[#372820] px-6 py-4 rounded-lg bg-gradient-to-t ${
          type.disabled
            ? "from-neutral-800 via-neutral-600 to-neutral-600 pointer-events-none"
            : "from-amber-800 via-amber-600 to-amber-600 hover:from-amber-800 hover:via-amber-600 hover:to-amber-500"
        }`}
        href={type.downloadUrl}
        target="_blank"
      >
        <div style={{ height: "100%", float: "left", position: "relative" }}>
          <svg
            className="text-white h-6 w-6 mr-2"
            fill="white"
            viewBox={type.svgViewBox}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              marginRight: "-12px",
              marginTop: "-12px",
              marginLeft: "-12px",
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "24px",
              height: "24px",
            }}
          >
            <title>{type.name}</title>
            <path d={type.svgPath} />
          </svg>
        </div>
        <div style={{ paddingLeft: "24px" }}>
          <span>
            {t("download.for")} {type.name}
            {type.disabled && (
              <span className="text-sm leading-3 italic">
                <br />
                {t("download.comingSoon")}
              </span>
            )}
          </span>
        </div>
      </Link>
    </div>
  );
};

const supportedOS = [Windows, MacOS, Linux];

const DynamicDownload = () => {
  const { t } = useTranslation("download");

  let currentOS = Windows;
  const detection = detect();
  if (detection?.os?.toLowerCase().includes("linux")) {
    currentOS = Linux;
  } else if (detection?.os?.toLowerCase().includes("mac")) {
    currentOS = MacOS;
  }

  const otherOS = supportedOS.filter((i) => i.name !== currentOS.name);

  return (
    <>
      <DownloadButton type={currentOS} />
      <div className="flex flex-row gap-x-6 mt-4 justify-center w-full">
        {otherOS.map((os) => (
          <Link
            key={os.name}
            href={os.downloadUrl}
            className={`text-stone-400 underline text-sm hover:text-stone-200 ${os.disabled && "pointer-events-none no-underline"}`}
            target="_blank"
          >
            {t("download." + os.locale)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default DynamicDownload;
