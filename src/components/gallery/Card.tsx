import Image from 'next/image';
import Skill from './Skill';
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

function Card() {
  const skillData = [
    { skill: 'React', background: 'red', icon: <FaReact /> },
    // { skill: 'JavaScript', background: 'red', icon: <FaJsSquare /> },
    // { skill: 'TypeScript', background: 'red', icon: <SiTypescript /> },
    { skill: 'CSS', background: 'red', icon: <FaCss3Alt /> },
    // { skill: 'TailwindCSS', background: 'red', icon: <SiTailwindcss /> },
    // { skill: 'HTML', background: 'red', icon: <FaHtml5 /> },
    // { skill: 'Next.js', background: 'blue', icon: <SiNextdotjs /> },
    // { skill: 'Node.js', background: 'blue', icon: <FaNodeJs /> },
    // { skill: 'Express', background: 'blue', icon: <SiExpress /> },
    // { skill: 'MongoDB', background: 'black', icon: <SiMongodb /> },
    // { skill: 'Firebase', background: 'black', icon: <SiFirebase /> },
    { skill: 'Original Design', background: 'green', icon: <MdRocketLaunch /> },
  ];

  return (
    <div className='w-60 m-10 border-4 border-lime-7/20 flex flex-col justify-center items-center'>
      <Image
        src='/img/hiragana-flashcards.JPG'
        alt='placeholder'
        width={240}
        height={240}
      />
      <div className='p-4'>
        <h3 className='text-xl text-lime-7'>Hiragana Flashcards</h3>
        <p className='max-w-32 text-blue-0'>
          An open-source flashcard app I designed and built to help myself and
          others learn Japanese kanji
        </p>
        <ul className='list-none flex flex-wrap gap-2 mt-4 text-blue-0'>
          {skillData.map((props) => (
            <Skill
              background={props.background}
              skill={props.skill}
              icon={props.icon}
              key={props.skill}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
