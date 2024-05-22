import { Metadata } from 'next';
import { ReactNode } from 'react';

import MainHeader from "@/components/main-header/main-header";

import './globals.css';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
interface Props {
  children?: ReactNode
}
export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}