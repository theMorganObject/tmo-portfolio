import ProjectDetail from '@/components/gallery/project/ProjectDetail';
import { portfolioData } from '../../../../lib/portfolioData';

type RouteParams = { slug: string };

export function generateStaticParams(): Array<RouteParams> {
  const allProjects = portfolioData;
  return allProjects.map((project) => ({
    slug: project.slug.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  return (
    <section className='min-h-screen font-sans py-6'>
      <ProjectDetail id={`projects/${slug}`} data={portfolioData} />
    </section>
  );
}
