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
    icon: '/favicon.png', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
      </head>
      <body>
        <ModalClientManager>{children}</ModalClientManager>
      </body>
    </html>
  );
}
