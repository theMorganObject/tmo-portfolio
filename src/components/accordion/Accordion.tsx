'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Selector from './Selector';
import classes from './Accordion.module.css';

export interface AccordionData {
  id: string;
  title: string;
  text: string;
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
  const { title, text, image } = activeItem;
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
      <div className='flex items-center justify-between max-w-screen-md mx-auto px-8 flex-col gap-7 2xs:flex-col 2xs:gap-0 sm:flex-row sm:justify-around md:justify-between mt-32'>
        <div className={classes.imgWrapper}>
          <div className='w-full h-full'>
            <Image
              src={src}
              alt={alt}
              width={imageDimensions}
              height={imageDimensions}
              priority
            />
          </div>
        </div>
        <div className='min-h-200 2xs:w-auto 2xs:mt-8 sm:mt-0 sm:w-1/2'>
          <p className='text-red-2 sm:text-sm md:text-base'>{text}</p>
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
