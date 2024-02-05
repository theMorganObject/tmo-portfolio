import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Nav from '@/components/Nav';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
});

const reey = localFont({
  src: './Reey-Regular.otf',
  display: 'swap',
  variable: '--font-reey',
});

export const metadata: Metadata = {
  title: 'theMorganObject',
  description:
    "Home page of Morgan O'Shaughnessey, front-end developer and Professional Scrum Master",
  keywords:
    "dev, developer, front-end developer, front end developer, web development, agile, professional scrum master, Next.js, React, React.js, Morgan, Morgan O'Shaughnessey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.variable} ${reey.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
