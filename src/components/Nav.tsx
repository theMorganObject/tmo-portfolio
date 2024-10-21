'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label='Main navigation'
      className='absolute top-0 left-1/2 transform -translate-x-1/2 pt-6'
    >
      <div className='flex gap-16 text-blue-3 text-sm underline underline-offset-[3px] decoration-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-5 sm:text-base md:text-lg lg:text-xl'>
        <Link href='/' className='hover:text-red-3' aria-label='Home'>
          Home
        </Link>
        <Link href='/about' className='hover:text-red-3' aria-label='About'>
          About
        </Link>
        <Link href='/contact' className='hover:text-red-3' aria-label='Contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
}
