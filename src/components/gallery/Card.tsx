// TODO: refactor https://trello.com/c/nHqjH8nM

import Image from 'next/image';
import Skill from './Skill';
import Link from 'next/link';

interface CardProps {
  siteName: string;
  cardText: string;
  skillData: Array<{ skill: string; background: string; icon: JSX.Element }>;
  imagePath: string;
  alt: string;
  id: string | number;
}

function Card({
  siteName,
  cardText,
  skillData,
  imagePath,
  alt,
  id,
}: CardProps) {
  const linkPath = `/projects/${id}`;
  return (
    <Link
      href={linkPath}
      aria-label={`Learn more about ${siteName}`}
      className='flex flex-col items-start m-4 min-w-60 max-w-80 bg-transparent border-4 border-lime-9 shadow-xl transition duration-200 hover:scale-105 hover:cursor-pointer hover:shadow-2xl focus:ring-4 focus:ring-blue-0'
    >
      <div className='relative w-full h-48'>
        <Image src={imagePath} alt={alt} className='object-cover' fill />
      </div>
      <div className='p-4'>
        <h3 className='text-xl text-lime-4'>{siteName}</h3>
        <p className='text-blue-0'>{cardText}</p>
        <ul className='mt-4 list-none flex flex-wrap gap-2 text-blue-0'>
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
    </Link>
  );
}

export default Card;
