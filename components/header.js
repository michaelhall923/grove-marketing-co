// components/Header.js
// import styles from './Header.module.css';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ data }) => {
  const rawPath = usePathname();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    setPathName(rawPath);
  }, [rawPath])

  if (!pathName) return null;

  return (
    <header className="p-6 lg:p-8 bg-transparent sticky top-0 z-10 flex justify-end items-center">
      <Link href="/">
        <Image src="/img/logo-tan.png" alt="Home" width={50} height={62} style={{width: 50, height: 62}} />
      </Link>
      <nav className="flex gap-2 justify-end uppercase text-2xl hidden">
        {data?.navigationLinks?.data?.links.map((link, index) => (
          <a key={index} href={link.url} className={`p-2 pb-1 border-2 ${link.url == pathName ? "" : "border-transparent"} rounded-sm inline-block leading-[1]`}>
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
