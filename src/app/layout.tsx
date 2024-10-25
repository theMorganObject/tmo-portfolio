// layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Header from '@/components/UI/Header';

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
      <body className='font-sans bg-white text-gray-800 antialiased'>
        <Header />
        <main className='px-4'>{children}</main>
      </body>
    </html>
  );
}
