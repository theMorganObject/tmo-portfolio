import Gallery from '@/components/gallery/Gallery';

export default function Projects() {
  return (
    <section className='min-h-screen bg-blue-12 font-sans pt-10'>
      <h2 className='mt-20 flex justify-center font-reey text-3xl text-blue-1'>
        All Projects
      </h2>
      <div className='mt-10 flex justify-center'>
        <Gallery />
      </div>
    </section>
  );
}
