import { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import ModalClientManager from './SiteComponents/ModalClientManager';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'Little Dog Decorating',
  description: 'Professional painters in Queenstown',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ModalClientManager>{children}</ModalClientManager>
      </body>
    </html>
  );
}