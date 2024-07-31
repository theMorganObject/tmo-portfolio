import React from 'react';
import classes from './WorkSample.module.css';
import Link from 'next/link';

interface WorkSampleProps {
  siteName: string;
  description: string;
  href: string;
  position: number;
}

const WorkSample: React.FC<WorkSampleProps> = ({
  siteName,
  description,
  href,
}) => {
  return (
    <li className={classes.item}>
      <Link
        className='text-blue-3 underline underline-offset-[3px] decoration-1 cursor-pointer hover:text-red-3 focus:outline-none focus:ring-2 focus:ring-red-5'
        href={href}
      >
        <span className='font-reey tracking-widest'>{siteName}</span>
        {` - ${description}`}
      </Link>
    </li>
  );
};

export default WorkSample;
