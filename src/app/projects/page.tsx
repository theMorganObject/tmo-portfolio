import Gallery from '@/components/gallery/Gallery';

export default function Projects() {
  return (
    <section className='min-h-screen bg-blue-12 font-sans'>
      <h2 className='pt-28 flex justify-center font-reey text-blue-0 text-3xl xs:text-4xl md:text-5xl md:pb-4'>
        All Projects
      </h2>
      <div className='mt-10 flex justify-center'>
        <Gallery />
      </div>
    </section>
  );
}
