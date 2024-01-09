'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [svgSize, setSvgSize] = useState({ width: 32, height: 32 });

  useEffect(() => {
    function handleResize() {
      // Update the svgSize state based on screen width
      if (window.innerWidth < 768) {
        setSvgSize({ width: 24, height: 24 });
      } else if (window.innerWidth < 1024) {
        setSvgSize({ width: 28, height: 28 });
      } else if (window.innerWidth < 1280) {
        setSvgSize({ width: 32, height: 32 });
      } else {
        setSvgSize({ width: 32, height: 32 });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed top-0 right-0 m-8 z-50'>
      <div className='grid grid-cols-2 grid-rows-2 gap-1'>
        {' '}
        <Link href='/'>
          <div className='flex justify-center items-center bg-gray-6/20 transform -skew-x-6 hover:bg-gray-6/70 h-8 w-8 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={svgSize.width}
              height={svgSize.height}
              viewBox='0 0 256 256'
              className='fill-gray-5 hover:fill-gray-0'
            >
              <path d='M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z'></path>
            </svg>
          </div>
        </Link>
        <Link href='/projects'>
          <div className='flex justify-center items-center bg-blue-3/20 transform -skew-x-6 hover:bg-blue-3/70 h-8 w-8 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={svgSize.width}
              height={svgSize.height}
              className='fill-blue-3 hover:fill-blue-0'
              viewBox='0 0 256 256'
            >
              <path d='M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z'></path>
            </svg>
          </div>
        </Link>
        <Link href='/about'>
          <div className='flex justify-center items-center bg-red-4/20 transform -skew-x-6 hover:bg-red-4/70 h-8 w-8 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={svgSize.width}
              height={svgSize.height}
              className='fill-red-4 hover:fill-red-0'
              viewBox='0 0 256 256'
            >
              <path d='M168,96H88a40,40,0,0,0-40,40v8a40,40,0,0,0,40,40h80a40,40,0,0,0,40-40v-8A40,40,0,0,0,168,96Zm24,48a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24v-8a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24ZM208,32a32.06,32.06,0,0,0-31,24H79a32,32,0,0,0-63,8v80a72.08,72.08,0,0,0,72,72h80a72.08,72.08,0,0,0,72-72V64A32,32,0,0,0,208,32Zm16,112a56.06,56.06,0,0,1-56,56H88a56.06,56.06,0,0,1-56-56V64a16,16,0,0,1,32,0,8,8,0,0,0,8,8H184a8,8,0,0,0,8-8,16,16,0,0,1,32,0Zm-120-4a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z'></path>
            </svg>
          </div>
        </Link>
        <Link href='/contact'>
          <div className='flex justify-center items-center bg-lime-7/20 transform -skew-x-6 hover:bg-lime-7/70 h-8 w-8 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={svgSize.width}
              height={svgSize.height}
              className='fill-lime-6 hover:fill-lime-0 lg:h-42 lg:w-42'
              viewBox='0 0 256 256'
            >
              <path d='M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z'></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
