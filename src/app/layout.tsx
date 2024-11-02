import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Header from '@/components/UI/Header';
import { useEffect } from 'react';
import Footer from '@/components/UI/Footer';

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
        <Footer />
      </body>
    </html>
  );
}
