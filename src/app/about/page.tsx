import About from '@/components/about/About';

export default function Page() {
  return (
    <section className='min-h-screen font-sans'>
      <div className='mt-24 px-3 2xs:mt-30 md:mt-32 lg:mt-36 max-w-[800px] w-full mx-auto text-left'>
        <About />
      </div>
    </section>
  );
}
