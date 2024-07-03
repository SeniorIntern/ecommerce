import QueryProvider from '@/QueryProvider';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const font = DM_Sans({ subsets: ['latin'] });

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
      <body className={font.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
