import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav aria-label='Main navigation'>
      <ul className='flex gap-16 items-center text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-5 sm:text-base md:text-lg lg:text-xl'>
        <li className='relative'>
          <Link
            href='/'
            className={`relative z-10 px-6 py-3 ${styles.navItem} ${styles.red}`}
            aria-label='Home'
          >
            Home
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='/about'
            className={`relative z-10 px-6 py-3 ${styles.navItem} ${styles.blue}`}
            aria-label='About'
          >
            About
          </Link>
        </li>
        <li className='relative'>
          <Link
            href='/contact'
            className={`relative z-10 px-6 py-3 ${styles.navItem} ${styles.green}`}
            aria-label='Contact'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
