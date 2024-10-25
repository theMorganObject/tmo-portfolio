import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Header from '@/components/UI/Header';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'theMorganObject',
  description:
    "Home page of Morgan O'Shaughnessey, front-end developer and Professional Scrum Master",
  keywords:
    "dev, developer, front-end developer, web development, agile, scrum master, Next.js, React, Morgan O'Shaughnessey",
};

const getCurrentYear = () => new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${lora.variable}`}>
      <body className='font-sans bg-white text-gray-800 antialiased flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow px-4'>{children}</main>
        <footer className='text-center py-4 text-sm text-gray-600'>
          &copy; {getCurrentYear()} Morgan O'Shaughnessey. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
