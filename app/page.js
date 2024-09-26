import Image from "next/image";
import EmonsLogo from "./assets/emons-logo.svg";

export default function Home() {
  return (
    <>
      {/* Content */}
      <div className="flex flex-col h-screen pb-6">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-4xl px-4 mx-auto -mt-20 text-center sm:px-6 lg:px-8">
            <Image
              priority={true}
              width={40}
              height={40}
              alt="EMONS"
              aria-label="Electrical Monitoring System"
              src={EmonsLogo}
              className="w-40 h-auto mx-auto mb-4 lg:w-60"
            />
            <h1 className="text-xl font-bold text-white lg:text-3xl">
              EMONS is under maintenance
            </h1>
            <p className="mt-3 text-sm text-gray-600 lg:text-lg dark:text-neutral-400">
              How long repairs will take cannot be determined. We will contact
              you back!
            </p>
          </div>
        </div>
        <footer className="max-w-4xl px-4 mx-auto mt-auto text-center sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600 dark:text-neutral-500">
            © 2024 Electrical Monitoring System.
          </p>
        </footer>
      </div>
      {/* End Content */}
    </>
  );
}
