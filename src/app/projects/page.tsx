import Gallery from '@/components/gallery/Gallery';

export default function Projects() {
  return (
    <section className='min-h-screen bg-blue-12 font-sans'>
      <h2 className='flex justify-center font-reey text-blue-0 text-4xl pt-32 mb-16 md:text-5xl md:mb-20'>
        All Projects
      </h2>
      <div className='flex justify-center'>
        <Gallery />
      </div>
    </section>
  );
}
