import Link from 'next/link';

export default function Nav() {
  return (
    <nav aria-label='Main navigation'>
      <ul className='flex gap-16 text-blue-3 text-sm underline underline-offset-[3px] decoration-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-5 sm:text-base md:text-lg lg:text-xl'>
        <Link href='/' className='hover:text-red-3' aria-label='Home'>
          Home
        </Link>
        <Link href='/about' className='hover:text-red-3' aria-label='About'>
          About
        </Link>
        <Link href='/contact' className='hover:text-red-3' aria-label='Contact'>
          Contact
        </Link>
      </ul>
    </nav>
  );
}
