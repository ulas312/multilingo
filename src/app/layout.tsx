import 'regenerator-runtime/runtime';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MultiLingo - Bridging Voices, Uniting Worlds',
  description:
    'MultiLingo is an innovative app that enables seamless language translation and voice recognition, bringing people together through the power of language.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </head>
      <body className={inter.className}>
        {children}
        <Script src='/preline.js' strategy='afterInteractive' />
      </body>
    </html>
  );
}
