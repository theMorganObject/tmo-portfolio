// TODO: refactor https://trello.com/c/nHqjH8nM

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAws,
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
  SiNetlify,
  SiPhp,
  SiVercel,
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
  Netlify: { background: 'blue', icon: <SiNetlify /> },
  Vercel: { background: 'blue', icon: <SiVercel /> },
  AWS: { background: 'blue', icon: <FaAws /> },
  'Original Design': { background: 'green', icon: <PiShootingStarFill /> },
  'Custom WIX Design': { background: 'green', icon: <FaWix /> },
  'Agile Methodologies': { background: 'green', icon: <PiLightningFill /> },
};
