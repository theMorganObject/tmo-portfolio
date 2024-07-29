import { featuredProjects } from '../../lib/featuredprojects';
import WorkSample from '../components/WorkSample';

export default function Home() {
  const fullName = "Morgan Padraic O'Shaughnessey";

  return (
    <section className='min-h-screen bg-gray-9 font-sans flex flex-col items-center p-4'>
      <p className='mt-24 mb-4 text-2xs text-red-3 2xs:text-sm 2xs:mt-28 2xs:mb-6 sm:text-base sm:mt-28 sm:mb-8 md:text-lg md:mt-32 md:mb-12 lg:text-xl'>
        Front End Developer | Scrum Master
      </p>
      <h1 className='font-reey text-base text-lime-6 leading-loose mb-8 2xs:text-xl 2xs:mb-10 sm:text-4xl md:text-5xl md:mb-14 lg:text-6xl'>
        {fullName}
      </h1>
      <ul className='grid gap-y-2 grid-rows-4 grid-cols-12 text-2xs 2xs:gap-y-4 sm:text-base md:text-xl lg:text-2xl'>
        {featuredProjects.map((sample, index) => (
          <WorkSample
            key={sample.id}
            href={sample.href}
            siteName={sample.siteName}
            description={sample.description}
            position={index + 1}
          />
        ))}
      </ul>
    </section>
  );
}
