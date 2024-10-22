import React from 'react';
import Link from 'next/link';

interface WorkSampleProps {
  siteName: string;
  href: string;
}

const WorkSample: React.FC<WorkSampleProps> = ({ siteName, href }) => {
  return (
    <li className='flex flex-col justify-center items-center mb-2'>
      <Link
        href={href}
        className='flex justify-between items-center w-full max-w-xs px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out'
      >
        <span>{siteName}</span>
        <span className='text-gray-300'>(show more)</span>
      </Link>
    </li>
  );
};

export default WorkSample;
