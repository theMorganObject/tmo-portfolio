"use client";

import { useState } from "react";
import classes from "./Accordion.module.css";
import { CgArrowLongDownC } from "react-icons/cg";

interface AccordionData {
  id: string;
  title: string;
  text: string;
}

interface AccordionProps {
  data: AccordionData[];
  colors: string[];
}

export default function Accordion({ data, colors }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];
  const { text } = activeItem;

  const handleSelect = (id: string) => {
    const index = data.findIndex((el) => el.id === id);
    setActiveIndex(index);
  };

  return (
    <>
      <div className={classes.accordion}>
        <p className={classes.text}>{text}</p>
      </div>
      <div>
        <Selector
          data={data}
          colors={colors}
          onSelect={handleSelect}
          activeIndex={activeIndex}
        />
      </div>
    </>
  );
}

interface SelectorProps {
  data: AccordionData[];
  colors: string[];
  onSelect: (i: string) => void;
  activeIndex: number;
}

function Selector({ data, colors, onSelect, activeIndex }: SelectorProps) {
  const getRotation = (index: number) => {
    switch (index) {
      case 0:
        return 45; // Red quadrant
      case 1:
        return -45; // Blue quadrant
      case 2:
        return 135; // Green quadrant
      case 3:
        return -135; // Black quadrant
      default:
        return 0;
    }
  };

  return (
    <div className={classes.selectorContainer}>
      <div className={classes.arrowIcon}>
        <CgArrowLongDownC className="text-gray-9" />
      </div>
      <div
        className={classes.selector}
        style={{ transform: `rotate(${getRotation(activeIndex)}deg)` }}
      >
        <div className={classes.goldCircle}></div>
        {colors.map((color, i) => (
          <div
            key={i}
            className={`${classes.selectorItem} ${classes[`quadrant-${i}`]}`}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(data[i].id)}
          />
        ))}
      </div>
    </div>
  );
}
