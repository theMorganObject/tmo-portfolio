import Gallery from '@/components/gallery/Gallery';

export default function Projects() {
  return (
    <section className='pt-10 min-h-screen bg-blue-3/20'>
      <h2 className='mt-20 flex justify-center font-reey text-3xl text-lime-9/90'>
        All Projects
      </h2>
      <div className='mt-10 flex justify-center'>
        <Gallery />
      </div>
    </section>
  );
}
