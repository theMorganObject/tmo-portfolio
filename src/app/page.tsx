import Image from 'next/image';
import { portfolioData } from '../../lib/portfolioData';
import WorkSample from '../components/WorkSample';

export default function Home() {
  return (
    <section className='min-h-screen font-sans flex items-center justify-center px-4'>
      <div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-2xl'>
        {/* Text Section */}
        <div className='md:w-1/2'>
          <h2 className='font-serif text-2xl mb-4'>Hi, I'm Morgan!</h2>
          <p className='mb-4'>
            I&apos;m a front-end developer, tech enthusiast, and a digital
            nomad. I am an American citizen based in the US. I typically work
            Eastern time, though I am flexible based on project and team
            preferences.
          </p>
          <p className='mb-4'>
            Here is a select portfolio of my recent projects:
          </p>

          <ul className='2xs:text-xs sm:text-base md:text-xl lg:text-2xl'>
            {portfolioData.map((sample) => (
              <WorkSample
                key={sample.siteName}
                href={sample.slug}
                siteName={sample.siteName}
              />
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2 flex justify-center'>
          <Image
            src='/img/hero-1.webp'
            alt="portrait of Morgan O'Shaughnessey, front end web developer"
            width={400}
            height={600}
            className='rounded-md'
          />
        </div>
      </div>
    </section>
  );
}
