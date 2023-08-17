import Image from "next/image";
import Link from "next/link";
import siteConfig from "../config/site";

export default function Header() {
  return (
    <header className="flex items-center w-full mt-3 sm:px-4 px-2 border-gray-300 border-b pb-4">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/house.svg"
          className="sm:w-10 sm:h-10 w-9 h-9 ml-2"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold tracking-tight mt-2">
          {siteConfig.siteName}
        </h1>
      </Link>
    </header>
  );
}
