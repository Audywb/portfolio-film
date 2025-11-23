import Image from "next/image";
import wslogo from "@public/images/logo/tools/windows-174-svgrepo-com.svg";
import lilogo from "@public/images/logo/tools/linux-deploy-svgrepo-com.svg";
import vslogo from "@public/images/logo/tools/icons8-vs-code.svg";
import pslogo from "@public/images/logo/tools/postman-svgrepo-com.svg";
import tsmlogo from "@public/images/logo/tools/termius-svgrepo-com.svg";
import dbrlogo from "@public/images/logo/tools/icons8-dbeaver.svg";
import filezlogo from "@public/images/logo/tools/icons8-filezilla.svg";
import linemsg from "@public/images/logo/tools/messaging___1.png";
import telegram from "@public/images/logo/tools/Telegram_logo.svg.png";
import figmalogo from "@public/images/logo/tools/figma-svgrepo-com.svg";
import "@/css/index.css";

export default function Tools() {
  return (
    <section id="our-team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Tools
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-8">
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={wslogo}
                alt="Windows"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Windows</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={lilogo}
                alt="Linux"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Linux</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={vslogo}
                alt="VS Code"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">VS Code</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={pslogo}
                alt="Postman"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Postman</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={tsmlogo}
                alt="Termius"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Termius</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={filezlogo}
                alt="FileZilla"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">FileZilla</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={dbrlogo}
                alt="DBeaver"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">DBeaver</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 hh-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={figmalogo}
                alt="Figma"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Figma</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 hh-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={linemsg}
                alt="Line message api"
              />
            </div>
            <h3 className="text-sm lg:text-lg font-semibold mb-2">
              Line Developers
            </h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 py-2 my-6 h-32 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-12 md:w-14 lg:w-18 mb-4" src={telegram} alt="Telegram" />
            </div>
            <h3 className="text-sm lg:text-lg font-semibold mb-2">
              Telegram Bot API
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
