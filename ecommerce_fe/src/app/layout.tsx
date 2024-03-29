import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manmeet Ecommerce Home Page',
  description: 'Welcome to Manmeet Ecommerce Store.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
