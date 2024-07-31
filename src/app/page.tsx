import { featuredProjects } from '../../lib/featuredprojects';
import WorkSample from '../components/WorkSample';

export default function Home() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <section className='min-h-screen bg-gray-9 font-sans flex flex-col items-center'>
      <p className='text-sm text-red-3 mt-32 sm:text-base md:text-lg lg:text-xl'>
        Front End Developer | Scrum Master
      </p>
      <h1 className='font-reey text-2xl text-lime-6 leading-loose mt-6 2xs:text-3xl sm:text-4xl md:text-5xl md:mt-10 lg:text-6xl lg:mt-12'>
        {fullName}
      </h1>
      <ul className='grid grid-rows-4 grid-cols-20 xs:grid-cols-12 gap-y-4 2xs:text-xs px-1.5 mt-12 sm:text-base md:text-xl md:mt-20 lg:text-2xl lg:mt-24'>
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
