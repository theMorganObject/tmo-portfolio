import React from 'react';
import Link from 'next/link';
import styles from './work-sample.module.css';

interface WorkSampleProps {
  siteName: string;
  href: string;
}

const WorkSample: React.FC<WorkSampleProps> = ({ siteName, href }) => {
  return (
    <li className='flex flex-col justify-center items-center mb-2'>
      <Link
        href={href}
        className={`flex justify-between items-center size-full px-8 py-4 cursor-pointer mb-4 ${styles.trapezoidButton}`}
      >
        <span>{siteName}</span>
        <span className='text-gray-300'>(show more)</span>
      </Link>
    </li>
  );
};

export default WorkSample;
