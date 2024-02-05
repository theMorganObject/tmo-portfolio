import Link from 'next/link';
import Image from 'next/image';
import { CgArrowLongDownC } from 'react-icons/cg';
import { AccordionData } from './Accordion';
import classes from './Selector.module.css';

interface SelectorProps {
  data: AccordionData[];
  title: string;
  colors: string[];
  onSelect: (i: string) => void;
  activeIndex: number;
}

export default function Selector({
  data,
  title,
  colors,
  onSelect,
  activeIndex,
}: SelectorProps) {
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
      <div className={classes.activeIndexIndicator}>
        <CgArrowLongDownC className='text-gray-9' />
      </div>

      <div
        className={classes.selector}
        style={{ transform: `rotate(${getRotation(activeIndex)}deg)` }}
        role='tablist'
      >
        <Link href='tootge' className={classes.goldCircle}></Link>
        {colors.map((color, i) => (
          <button
            key={i}
            className={`${classes.selectorItem} ${classes[`quadrant-${i}`]}`}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(data[i].id)}
            aria-label={`Select ${title}`}
            role='tab'
            tabIndex={0}
          />
        ))}
      </div>
      <div
        className={classes.arrowContainer}
        style={{ display: activeIndex === 3 ? 'absolute' : 'none' }}
      >
        <span className='font-reey tracking-wider text-red-2 ml-3'>
          click me
        </span>
        <Image
          src='/hand-drawn-arrow.svg'
          alt='Click me arrow'
          width={80}
          height={80}
          style={{
            transform: 'rotate(-45deg)',
            filter:
              'invert(20%) sepia(100%) saturate(7500%) hue-rotate(5deg) brightness(100%) contrast(105%)',
          }}
        />
      </div>
    </div>
  );
}
