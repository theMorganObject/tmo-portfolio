import Image from 'next/image';
import { ProjectFeatureProps } from '@/types/featureTypes';

export default function ProjectFeature({
  name,
  text,
  image,
  reverse = false,
}: ProjectFeatureProps) {
  return (
    <div
      className={`flex items-center justify-center gap-8 mb-20 ${
        reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      <div className='flex flex-col gap-4'>
        <h3 className='font-serif text-xl tracking-wide text-center'>{name}</h3>
        <p className='text-base max-w-96 2xs:text-lg sm:text-lg sm:max-w-screen-xs'>
          {text}
        </p>
      </div>
      <Image
        src={image.imagePath}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className='mb-4 md:w-[45vw]'
      />
    </div>
  );
}
