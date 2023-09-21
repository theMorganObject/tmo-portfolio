import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theMorganObject",
  description: "Home page of Morgan O'Shaughnessey, front-end developer",
  keywords:
    "dev, developer, front-end developer, web development, Next.js, React, React.js, Morgan, Morgan O'Shaughnessey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
