// src/app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
        <div className='relative z-20 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-6xl w-full px-8 lg:px-16 py-16'>
          {/* Left Column: Text Content */}
          <div className='text-center lg:text-left lg:w-1/2'>
            <h2 className='text-5xl font-bold text-white mb-4'>Welcome to</h2>
            <h1 className='text-7xl font-bold text-blue-600 mb-4'>
              <span className='text-white'>Multi</span>Lingo
            </h1>
            <p className='text-xl text-neutral-400 mb-4'>
              Bridging Voices, Uniting Worlds One Conversation at a Time.
            </p>
            <p className='text-xl text-neutral-400 mb-8'>
              Explore our language translation app, powered by AI, to connect
              with people around the world!
            </p>
            <Link href='/translator'>
              <button className='mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700'>
                Ready to Translate?
              </button>
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className='mt-12 lg:mt-0 lg:w-1/2 flex justify-center'>
            <Image
              src='/assets/images/MultiLingo-translator.png'
              alt='Illustration showing MultiLingo translator'
              layout='responsive'
              width={900}
              height={700}
              className='w-full max-w-[100%] md:max-w-lg lg:max-w-xl xl:max-w-2xl'
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomePage;
