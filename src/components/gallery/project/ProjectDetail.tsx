'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjectObject {
  id: number;
  siteName: string;
  aboutText: string;
  href: string;
  imagePath: string;
  alt: string;
}

interface ProjectDetailProps {
  project: string;
  data: Array<ProjectObject>;
}

function ProjectDetail({ project, data }: ProjectDetailProps) {
  const router = useRouter();
  const curProject = data.find((obj) => project === obj.id.toString());

  if (!curProject) {
    return (
      <div className='flex justify-center mt-24 text-red-6 xs:text-xl md:text-2xl md:mt-32'>
        No project found for ID {project}
      </div>
    );
  }

  const { siteName, aboutText, href, imagePath, alt } = curProject;

  const handleBack = () => {
    router.back();
  };
  return (
    <article className='flex flex-col justify-center items-center p-4 mt-20'>
      <h2 className='font-reey text-xl text-lime-7 tracking-wider mb-10 xs:text-3xl'>
        {siteName}
      </h2>
      <h3 className='text-blue-0 text-base mb-2 xs:text-lg xs:p-4 sm:text-lg sm:max-w-screen-sm'>
        {aboutText}
      </h3>
      <Image
        src={imagePath}
        alt={alt}
        width={200}
        height={200}
        className='mb-4'
      />
      <div className='flex justify-center gap-4 mb-4'>
        <button
          onClick={handleBack}
          className='-skew-x-9 bg-blue-8/20 py-3 px-4 text-base font-semibold text-blue-0 hover:bg-blue-0/90 hover:text-blue-9'
        >
          Go Back
        </button>
        <Link href={href} target='_blank' rel='noopener noreferrer'>
          <button className='-skew-x-9 bg-blue-8/90 py-3 px-4 text-base font-semibold text-blue-0 hover:bg-blue-0/90 hover:text-blue-9'>
            Visit Site
          </button>
        </Link>
      </div>
    </article>
  );
}

export default ProjectDetail;
