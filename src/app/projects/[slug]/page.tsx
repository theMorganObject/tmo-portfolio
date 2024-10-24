import NewProjectDetail from '@/components/gallery/project/NewProjectDetail';
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
      <NewProjectDetail id={`projects/${params.slug}`} data={portfolioData} />
    </section>
  );
}
