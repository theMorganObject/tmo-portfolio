import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Ensure you have react-icons installed

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className='text-center py-4 text-sm text-gray-600'>
      <div className='flex justify-center gap-4 mb-4'>
        <a
          href='https://www.linkedin.com/in/morgan-o-shaughnessey/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin
            className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            size={32}
          />
        </a>
        <a
          href='https://github.com/theMorganObject'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub
            className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            size={32}
          />
        </a>
      </div>
      &copy; {getCurrentYear()} Morgan O'Shaughnessey. All rights reserved.
    </footer>
  );
}

export default Footer;
