'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Selector from './Selector';
import classes from './Accordion.module.css';

export interface AccordionData {
  id: string;
  title: string;
  text: string;
  color: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

interface AccordionProps {
  data: AccordionData[];
  colors: string[];
}

export default function Accordion({ data, colors }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(3); // sets the currently active slide: see below for list
  const activeItem = data[activeIndex];
  const { title, text, color, image } = activeItem;
  const { src, alt, width } = image;

  const handleSelect = (id: string) => {
    const index = data.findIndex((el) => el.id === id);
    setActiveIndex(index);
  };

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth < 760;
  const imageDimensions = isSmallScreen ? 235 : width;

  return (
    <>
      <h2 className='flex justify-center font-reey text-xl xs:text-3xl text-lime-9/90 pt-32 mb-10 mx:mb-14'>
        <span>About:</span>
        <span className=' ml-4' style={{ color }}>
          {title}
        </span>
      </h2>
      <div className='flex items-center justify-between max-w-screen-md mx-auto px-8 flex-col xs:flex-col sm:flex-row sm:justify-around md:justify-between'>
        <div className={classes.imgWrapper}>
          <div className='w-full h-full'>
            <Image
              src={src}
              alt={alt}
              width={imageDimensions}
              height={imageDimensions}
            />
          </div>
        </div>
        <div className='min-h-200 xs:w-auto xs:mt-8 sm:mt-0 sm:w-1/2'>
          <p className='text-red-0 sm:text-sm md:text-base'>{text}</p>
        </div>
      </div>

      <Selector
        data={data}
        title={title}
        colors={colors}
        onSelect={handleSelect}
        activeIndex={activeIndex}
      />
    </>
  );
}

/////////////////////////////////////
// Currently Active Slide Reference:

// 0 - Green, Summary
// 1 - Blue, Dev Skills
// 2 - Red, Biography
// 3 - Black, _tMO
