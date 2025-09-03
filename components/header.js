'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Menu from './Menu';

// You can keep using your existing structure.
// Supports top-level { label, url? , links?[] }.
// If links.length >= 1, it becomes a dropdown trigger.
const navigationLinks = [
  { label: 'Home', url: '/' }, // standard link
  {
    label: 'Services',
    links: [
      { url: '/services/web-development', label: 'Web Development' },
      // add more sublinks here as needed
    ],
  },
];

export default function Header() {
  const rawPath = usePathname();
  const [pathName, setPathName] = useState(null);

  // Avoid hydration mismatch
  useEffect(() => setPathName(rawPath), [rawPath]);

  if (!pathName) return null;

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-transparent p-6 lg:p-8">
      <Link href="/" className="ml-2">
        <Image
          src="/img/logo-tan.png"
          alt="Home"
          width={50}
          height={62}
          style={{ width: 50, height: 62 }}
          priority
        />
      </Link>
      <Menu items={navigationLinks} currentPath={pathName} />
    </header>
  );
}
