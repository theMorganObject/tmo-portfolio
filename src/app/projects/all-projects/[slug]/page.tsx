// TODO: rebuild this page with new styling https://trello.com/c/nHqjH8nM

import ProjectDetail from '@/components/gallery/project/ProjectDetail';
import { workSamples } from '../../../../../lib/worksamples';

export function generateStaticParams() {
  const allProjects = workSamples;

  return allProjects.map((project) => ({
    slug: project.id.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className='min-h-screen bg-blue-12 font-sans pt-10'>
      <ProjectDetail id={params.slug} data={workSamples} />
    </section>
  );
}
