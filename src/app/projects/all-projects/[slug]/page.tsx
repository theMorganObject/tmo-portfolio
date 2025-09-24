// TODO: rebuild this page with new styling https://trello.com/c/nHqjH8nM

import ProjectDetail from '@/components/gallery/project/ProjectDetail';
import { workSamples } from '../../../../../lib/worksamples';

type RouteParams = { slug: string };

export function generateStaticParams(): Array<RouteParams> {
  return workSamples.map((project) => ({
    slug: project.id.toString(),
  }));
}

// Next 15: params is a Promise
export default async function Page({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  return (
    <section className='min-h-screen bg-blue-12 font-sans pt-10'>
      <ProjectDetail id={slug} data={workSamples} />
    </section>
  );
}
