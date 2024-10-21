import { portfolioData } from '../../lib/portfolioData';
import WorkSample from '../components/WorkSample';

export default function Home() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <section className='min-h-screen bg-gray-9 font-sans flex flex-col items-center'>
      <h1 className='font-reey text-2xl text-lime-6 leading-loose mt-32 2xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
        {fullName}
      </h1>
      <ul className='grid grid-rows-4 grid-cols-20 xs:grid-cols-12 gap-y-4 2xs:text-xs px-1.5 mt-12 sm:text-base md:text-xl md:mt-20 lg:text-2xl lg:mt-24'>
        {portfolioData.map((sample, index) => (
          <WorkSample
            key={sample.siteName}
            href={sample.slug}
            siteName={sample.siteName}
            description={sample.featuredDescription}
            position={index + 1}
          />
        ))}
      </ul>
    </section>
  );
}
