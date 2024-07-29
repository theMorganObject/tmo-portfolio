import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaWix,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiNextdotjs,
  SiPhp,
} from 'react-icons/si';
import { PiShootingStarFill, PiLightningFill } from 'react-icons/pi';

export const skillsMapping = {
  React: { background: 'red', icon: <FaReact /> },
  JavaScript: { background: 'red', icon: <FaJsSquare /> },
  TypeScript: { background: 'red', icon: <SiTypescript /> },
  CSS: { background: 'red', icon: <FaCss3Alt /> },
  TailwindCSS: { background: 'red', icon: <SiTailwindcss /> },
  HTML: { background: 'red', icon: <FaHtml5 /> },
  PHP: { background: 'red', icon: <SiPhp /> },
  'Next.js': { background: 'blue', icon: <SiNextdotjs /> },
  'Node.js': { background: 'blue', icon: <FaNodeJs /> },
  Express: { background: 'blue', icon: <SiExpress /> },
  MongoDB: { background: 'black', icon: <SiMongodb /> },
  GraphQL: { background: 'blue', icon: <SiGraphql /> },
  Firebase: { background: 'black', icon: <SiFirebase /> },
  'Original Design': { background: 'green', icon: <PiShootingStarFill /> },
  'Custom WIX Design': { background: 'green', icon: <FaWix /> },
  'Agile Methodologies': { background: 'green', icon: <PiLightningFill /> },
};
