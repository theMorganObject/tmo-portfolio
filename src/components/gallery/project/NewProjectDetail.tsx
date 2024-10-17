'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ProjectFeature from './ProjectFeature';
import Skill from '../Skill';
import { skillsMapping } from '../../../../lib/skillsMapping';

function NewProjectDetail() {
  const router = useRouter();

  // TODO: move all data to util file for all project data once this design NewProjectDetail component has been implementned for all projects

  const siteName = 'Klic.gg';
  const href = 'http://www.alpha.klic.gg/';

  const aboutText =
    'A video multi-streaming platform similar to Twitch, with unique features that empower users to be their own multi-stream live editors. As the Frontend Technical Lead, I led a team of 3 developers in a 6-month platform-wide refactor that improved page speed and performance by 89%. Throughout 12 sprint cycles, I collaborated with the Product Owner to implement new features such as monetization, channel analytics, and admin roles, while also addressing critical data-security vulnerabilities and improving code quality standards.';

  const skills = ['TypeScript', 'Next.js', 'GraphQL', 'Agile Methodologies'];
  const skillData = skills.map((skill) => ({
    skill,
    //@ts-ignore
    ...skillsMapping[skill],
  }));

  const heroImage = {
    imagePath: '/img/portfolio/klic/1.png',
    alt: 'klic homepage',
    width: 1536,
    height: 960,
  };

  const feature1 = {
    name: 'Channel Page',
    text: "I led a channel page redesign, focusing on implementing reusable components and eliminating outdated, commented-out code. I collaborated closely with backend engineers to optimize data fetching, consolidated duplicate components from the landing page into a single, reusable module, and worked alongside a designer to ensure the design aligned with the product manager's specifications. Additionally, I played a key role in unifying data naming conventions across the stack, enhancing maintainability and consistency.",
    image: {
      imagePath: '/img/portfolio/klic/2.png',
      alt: 'channel page',
      width: 480,
      height: 300,
    },
  };

  const feature2 = {
    name: 'Analytics Page',
    text: "I spearheaded the analytics redesign, one of the platform's capstone features, following the completion of a platform-wide refactor and performance optimizations. This feature was built from the ground up, spanning several sprints where I served as the technical voice between product and design. I worked closely with the backend engineer to ensure data naming standards aligned with those agreed upon in design meetings. The project progressed from the initial design draft to the final mock-up, though it has yet to be connected to the back-end.",
    image: {
      imagePath: '/img/portfolio/klic/3.png',
      alt: 'analytics page',
      width: 480,
      height: 300,
    },
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <article className='flex flex-col justify-center items-center p-4 mt-20'>
      <header>
        <h2 className='font-reey text-3xl text-lime-4 tracking-wider mb-12 2xs:text-3xl'>
          {siteName}
        </h2>
      </header>

      {/* Overview Section */}
      <section aria-labelledby='about'>
        {/* Hidden heading for screen readers */}
        <h3 id='about' className='sr-only'>
          About
        </h3>{' '}
        <p className='text-blue-0 text-base mb-12 2xs:text-lg 2xs:p-4 sm:text-lg sm:max-w-screen-sm'>
          {aboutText}
        </p>
      </section>

      {/* Tech Stack Section */}
      <section aria-labelledby='tech-stack'>
        <h3
          id='tech-stack'
          className='font-reey text-xl text-lime-4 tracking-wide text-center mb-8'
        >
          Tech Stack
        </h3>
        <div className='flex flex-wrap gap-2 mb-12'>
          {skillData.map((props) => (
            <Skill
              background={props.background}
              skill={props.skill}
              icon={props.icon}
              key={props.skill}
            />
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section aria-labelledby='hero-image'>
        {/* Hidden heading for screen readers */}
        <h3 id='hero-image' className='sr-only'>
          Project Hero Image
        </h3>{' '}
        <Image
          src={heroImage.imagePath}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          className='mb-20'
        />
      </section>

      {/* Features Section */}
      <section aria-labelledby='features'>
        <h3 id='features' className='sr-only'>
          Features
        </h3>
        <ProjectFeature
          name={feature1.name}
          text={feature1.text}
          image={feature1.image}
        />
        <ProjectFeature
          name={feature2.name}
          text={feature2.text}
          image={feature2.image}
          reverse={true}
        />
      </section>

      {/* Bottom Navigation */}
      <nav
        aria-label='Project Navigation'
        className='flex justify-center gap-4 mb-4'
      >
        <button
          onClick={handleBack}
          className='-skew-x-9 bg-blue-8/20 py-3 px-4 text-base font-semibold text-blue-0 hover:bg-blue-0/90 hover:text-blue-9'
        >
          Go Back
        </button>
        <Link
          href={href}
          aria-label={`Visit the ${siteName} website`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='-skew-x-9 bg-blue-8/90 py-3 px-4 text-base font-semibold text-blue-0 hover:bg-blue-0/90 hover:text-blue-9'>
            Visit Site
          </div>
        </Link>
      </nav>
    </article>
  );
}

export default NewProjectDetail;
