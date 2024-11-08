import 'regenerator-runtime/runtime';
import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MultiLingo - Bridging Voices, Uniting Worlds',
  description:
    'MultiLingo is an innovative app that enables seamless language translation and voice recognition, bringing people together through the power of language.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <body className={inter.className}>
        <header className='flex justify-between items-center px-10 pt-8 py-4  shadow-md'>
          <h1 className='text-2xl font-bold text-blue-600'>
            <Link href='/'>
              <span className='text-white '>Multi</span>Lingo
            </Link>
          </h1>
          <nav>
            <Link href='/' className='text-lg text-white hover:text-blue-800'>
              Home
            </Link>
            <Link
              href='/translator'
              className='text-lg text-white hover:text-blue-800 ml-4'
            >
              Translator
            </Link>
            <Link
              href='/translator'
              className='text-lg text-white hover:text-blue-800 ml-4'
            >
              Sign In
            </Link>
            <Link
              href='/translator'
              className='text-lg text-white hover:text-blue-800 ml-4'
            >
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Sign Up
              </button>
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className='text-center py-10  shadow-md'>
          <p className='text-white'>© 2024 MultiLingo. All rights reserved.</p>
        </footer>

        <Script src='/preline.js' strategy='afterInteractive' />
      </body>
    </html>
  );
};

export default RootLayout;
