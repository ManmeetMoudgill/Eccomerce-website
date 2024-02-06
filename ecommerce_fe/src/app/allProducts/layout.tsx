import type { Metadata } from 'next';
import EcoHeader from '@/shell/components/header';

export const metadata: Metadata = {
  title: 'All Products Page',
  description: 'Here you can find all the products.',
};

export default function AllProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EcoHeader />
      {children}
    </>
  );
}
