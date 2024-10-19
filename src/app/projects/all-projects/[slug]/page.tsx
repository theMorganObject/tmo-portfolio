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
      <ProjectDetail project={params.slug} data={workSamples} />
    </section>
  );
}
