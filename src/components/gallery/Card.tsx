import Image from 'next/image';
import Skill from './Skill';

interface CardProps {
  siteName: string;
  longDescription?: string;
  skillData: Array<{ skill: string; background: string; icon: JSX.Element }>;
  imagePath: string;
  alt: string;
}

function Card({
  siteName,
  longDescription,
  skillData,
  imagePath,
  alt,
}: CardProps) {
  return (
    <div className='w-60 m-10 border-4 border-lime-7/40 flex flex-col items-start'>
      <Image src={imagePath} alt={alt} width={240} height={240} priority />
      <div className='p-4'>
        <h3 className='text-xl text-lime-7'>{siteName}</h3>
        <p className='max-w-32 text-blue-0'>{longDescription}</p>
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
    </div>
  );
}

export default Card;
