import Image from 'next/image';
import { portfolioData } from '../../lib/portfolioData';
import WorkSample from '../components/WorkSample';

export default function Home() {
  return (
    <section className='min-h-screen bg-gray-9 font-sans flex flex-col items-center'>
      <div className='flex gap-8 max-w-2xl mt-32'>
        <div>
          <h2 className='text-2xl mb-4'>Hi, I'm Morgan!</h2>
          <p className='mb-4'>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            possimus id soluta labore aperiam reiciendis architecto ipsam
            perspiciatis! Sint voluptate voluptatibus sit cumque ipsa, neque
            corporis cupiditate animi rerum pariatur.
          </p>

          <ul className='2xs:text-xs sm:text-base md:text-xl  lg:text-2xl'>
            {portfolioData.map((sample) => (
              <WorkSample
                key={sample.siteName}
                href={sample.slug}
                siteName={sample.siteName}
              />
            ))}
          </ul>
        </div>

        <Image
          src='/img/hero-1.webp'
          alt="portrait of Morgan O'Shaughnessey, front end web developer"
          width={400}
          height={600}
        />
      </div>
    </section>
  );
}
