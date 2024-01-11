import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from 'react-icons/si';
import { MdRocketLaunch } from 'react-icons/md';

export const skillsMapping = {
  React: { background: 'red', icon: <FaReact /> },
  JavaScript: { background: 'red', icon: <FaJsSquare /> },
  TypeScript: { background: 'red', icon: <SiTypescript /> },
  CSS: { background: 'red', icon: <FaCss3Alt /> },
  TailwindCSS: { background: 'red', icon: <SiTailwindcss /> },
  HTML: { background: 'red', icon: <FaHtml5 /> },
  'Next.js': { background: 'blue', icon: <SiNextdotjs /> },
  'Node.js': { background: 'blue', icon: <FaNodeJs /> },
  Express: { background: 'blue', icon: <SiExpress /> },
  MongoDB: { background: 'black', icon: <SiMongodb /> },
  Firebase: { background: 'black', icon: <SiFirebase /> },
  'Original Design': { background: 'green', icon: <MdRocketLaunch /> },
};
