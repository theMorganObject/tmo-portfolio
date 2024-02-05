import Image from 'next/image';

export default function TOOTGE() {
  return (
    <section className='min-h-screen flex flex-col items-center bg-gold-9 text-gold-13 p-4'>
      <h2 className='flex justify-center font-reey text-md xs:text-lg sm:text-3xl pt-32 mb-10 mx:mb-14'>
        The Order of the Golden Extrovert
      </h2>
      <div className='flex flex-col items-center justify-between max-w-screen-md mx-auto px-8 space-y-8 sm:space-y-8 sm:space-x-8 md:flex-row-reverse md:gap-8'>
        <p className='text-center sm:text-left'>
          The Order of the Golden Extrovert is an informal society that was
          founded on December 18th, 2023. Inspired by my dog, Cashew (pictured)
          TOOTGE members devote themselves to the habit, practice, and loving
          discipline of ensuring that all of their interations with others are
          of the utmost quality and enjoyment for all parties involved. --{' '}
          <span className='font-reey text-lime-13'>
            Morgan O&apos;Shaughnessey
          </span>
          <br />
          <br /> Morgan O&apos;Shaughnessey
          <br /> TOOTGE -- 5th class.
        </p>
        <Image
          src='/img/tootge-hero.png'
          alt='A photo of Cashew the Dog, founder of The Order Of The Golden Extrovert'
          className='w-full md:max-w-xs lg:max-w-sm flex-shrink-0'
          width={300}
          height={378}
        />
      </div>
    </section>
  );
}
