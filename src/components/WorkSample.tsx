import React from "react";
import styles from "./WorkSample.module.css";
import Link from "next/link";

interface WorkSampleProps {
  siteName: string;
  description: string;
  href: string;
  className: string;
  position: number;
}

const WorkSample: React.FC<WorkSampleProps> = ({
  siteName,
  description,
  href,
}) => {
  return (
    <li className={styles.item}>
      <Link
        className="text-blue-3 text-md underline underline-offset-[3px] decoration-1 cursor-pointer hover:text-red-4"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.fancyFont}>{siteName}</span>
        {` - ${description}`}
      </Link>
    </li>
  );
};

export default WorkSample;
