import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

import { jSans } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Borcelle Boutique',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jSans.className} antialiased scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
