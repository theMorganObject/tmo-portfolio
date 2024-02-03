import Image from 'next/image';

function ArrowPrompt() {
  return (
    <div>
      <span
        className='ml-2 font-reey text-red-8'
        style={{ fontFamily: '"Reey", sans-serif' }}
      >
        click me
      </span>
      <Image
        src='/hand-drawn-arrow.svg'
        alt='Click me arrow'
        width={80}
        height={80}
        style={{
          transform: 'rotate(-45deg)',
          filter:
            'invert(20%) sepia(100%) saturate(7500%) hue-rotate(5deg) brightness(100%) contrast(105%)',
        }}
      />
    </div>
  );
}

export default ArrowPrompt;
