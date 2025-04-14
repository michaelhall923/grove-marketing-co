// components/Header.js
// import styles from './Header.module.css';

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
    <header className="px-8 py-8 bg-transparent sticky top-0 z-10">
        <nav className="flex gap-2 justify-end uppercase text-2xl">
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
