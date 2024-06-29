import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'ModenFurn',
  description: 'Luxury Artisan Furniture & Moden Decor'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
