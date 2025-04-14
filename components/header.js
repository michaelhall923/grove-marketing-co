// components/Header.js
// import styles from './Header.module.css';

import { usePathname } from "next/navigation";

const Header = ({ data }) => {
  const pathName = usePathname();

  return (
    <header className="px-8 py-8 bg-transparent sticky top-0 z-10">
        <nav className="flex gap-2 justify-end uppercase text-2xl">
          {data?.navigationLinks?.data?.links.map((link, index) => (
            <a key={index} href={link.url} className={`p-2 pb-1 ${link.url == pathName ? "border-2" : ""} rounded-sm inline-block leading-[1]`}>
              {link.text}
            </a>
          ))}
        </nav>
      </header>
  );
};

export default Header;
