import ProjectDetail from '@/components/gallery/project/ProjectDetail';
import { portfolioData } from '../../../../lib/portfolioData';

export function generateStaticParams() {
  const allProjects = portfolioData;

  return allProjects.map((project) => ({
    slug: project.slug.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className='min-h-screen font-sans pt-10'>
      <ProjectDetail id={`projects/${params.slug}`} data={portfolioData} />
    </section>
  );
}
