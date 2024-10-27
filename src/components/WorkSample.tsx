import React from 'react';
import Link from 'next/link';
import styles from './work-sample.module.css';

interface WorkSampleProps {
  siteName: string;
  slug: string;
}

const WorkSample: React.FC<WorkSampleProps> = ({ siteName, slug }) => {
  return (
    <li className='flex flex-col justify-center items-center mb-2'>
      <Link
        href={slug}
        className={`flex justify-between items-center size-full px-8 py-4 cursor-pointer mb-4 ${styles.trapezoidButton}`}
      >
        <span className='font-serif text-lg'>{siteName}</span>
        <span className='text-gray-6 text-base'>(show more)</span>
      </Link>
    </li>
  );
};

export default WorkSample;
