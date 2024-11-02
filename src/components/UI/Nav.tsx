'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label='Main navigation'>
      <ul className='flex gap-5 items-center text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-5 2xs:gap-6 xs:gap-12 md:text-lg lg:text-xl'>
        <li className='relative'>
          <Link
            href='/'
            className={`relative z-10 px-4 py-2 2xs:px-6 2xs:py-3 ${styles.navItem} ${styles.red} ${pathname === '/' ? styles.active : ''}`}
            aria-label='Home'
          >
            Home
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='/about'
            className={`relative z-10 px-4 py-2 2xs:px-6 2xs:py-3 ${styles.navItem} ${styles.blue} ${pathname === '/about' ? styles.active : ''}`}
            aria-label='About'
          >
            About
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='/contact'
            className={`relative z-10 px-4 py-2 2xs:px-6 2xs:py-3 ${styles.navItem} ${styles.green} ${pathname === '/contact' ? styles.active : ''}`}
            aria-label='Contact'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
