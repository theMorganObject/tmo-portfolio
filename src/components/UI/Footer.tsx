import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Ensure you have react-icons installed

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className='text-center py-4 text-sm text-gray-600'>
      <div className='flex justify-center gap-8 mb-8'>
        <a
          href='https://github.com/theMorganObject'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub
            className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            size={46}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/morgan-o-shaughnessey/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin
            className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            size={46}
          />
        </a>
      </div>
      <div className='mb-8'>
        &copy; {getCurrentYear()} Morgan O'Shaughnessey. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
