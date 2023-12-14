"use client";

import Image from "next/image";
import { useState } from "react";
import Selector from "./Selector";
import classes from "./Accordion.module.css";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];
  const { title, text, color, image } = activeItem;
  const { src, alt, height, width } = image;

  const handleSelect = (id: string) => {
    const index = data.findIndex((el) => el.id === id);
    setActiveIndex(index);
  };

  return (
    <>
      <h2 className="flex justify-center text-3xl text-lime-9/90 mt-20 mb-14">
        <span className="font-reey">About:</span>
        <span className="font-reey ml-4" style={{ color }}>
          {title}
        </span>
      </h2>

      {/* this was classes.container */}
      <div className="flex items-center justify-center gap-5 max-w-screen-md">
        <div className={classes.imgWrapper}>
          <div className="w-full h-full">
            <Image src={src} alt={alt} width={width} height={height} />
          </div>
        </div>
        <div className="w-1/2 min-h-200">
          <p className="text-red-0">{text}</p>
        </div>
      </div>

      <Selector
        data={data}
        colors={colors}
        onSelect={handleSelect}
        activeIndex={activeIndex}
      />
    </>
  );
}
