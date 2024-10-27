'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './project-detail.module.css';

import ProjectFeature from './ProjectFeature';
import Skill from '../Skill';
import { skillsMapping } from '../../../../lib/skillsMapping';

function ProjectDetail({ id, data }: { id: string; data: any }) {
  const router = useRouter();
  const curProject = data.find((obj: any) => id === obj.slug);

  if (!curProject) {
    return (
      <div className='flex justify-center mt-24 text-red-6 2xs:text-xl md:text-2xl md:mt-32'>
        No project found for ID {id}
      </div>
    );
  }

  const { siteName, href, aboutText, skills, heroImage, feature1, feature2 } =
    curProject;

  const skillData = skills.map((skill: any) => ({
    skill,
    //@ts-ignore,
    ...skillsMapping[skill],
  }));

  const handleBack = () => {
    router.back();
  };

  return (
    <article className='flex flex-col justify-center items-center p-4 mt-20'>
      <header>
        <h2 className='font-serif text-3xl tracking-wider mb-12 2xs:text-3xl'>
          {siteName}
        </h2>
      </header>

      {/* Overview Section */}
      <section aria-labelledby='about'>
        {/* Hidden heading for screen readers */}
        <h3 id='about' className='sr-only'>
          About
        </h3>{' '}
        <p className='text-base mb-12 2xs:text-lg 2xs:p-4 sm:text-lg sm:max-w-screen-sm'>
          {aboutText}
        </p>
      </section>

      {/* Tech Stack Section */}
      <section aria-labelledby='tech-stack'>
        <h3
          id='tech-stack'
          className='font-serif text-xl tracking-wide text-center mb-8'
        >
          Tech Stack
        </h3>
        <div className='flex flex-wrap gap-2 mb-12'>
          {skillData.map((skill: any) => (
            <Skill
              background={skill.background}
              skill={skill.skill}
              icon={skill.icon}
              key={skill.skill}
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
          className={`py-3 px-4 text-base font-semibold ${styles.trapezoidButtonInverted}`}
        >
          Go Back
        </button>

        <Link
          href={href}
          aria-label={`Visit the ${siteName} website`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div
            className={`py-3 px-4 text-base font-semibold ${styles.trapezoidButton}`}
          >
            Visit Site
          </div>
        </Link>
      </nav>
    </article>
  );
}

export default ProjectDetail;
