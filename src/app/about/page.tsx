import About from '@/components/about/About';

export default function Page() {
  return (
    <section className='flex items-center justify-center w-full h-full'>
      <div className='max-w-[800px] w-full mx-auto text-left px-4'>
        <About />
      </div>
    </section>
  );
}
