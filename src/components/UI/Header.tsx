// Header.tsx
import Nav from './Nav';

function Header() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <header className='sticky top-0 flex flex-col items-center justify-center bg-gray-100 z-50 shadow-md px-4 py-4 md:py-6 lg:py-8'>
      <h1 className='font-serif text-gray-900 text-2xl mb-4 2xs:mb-6 xs:text-3xl md:text-4xl md:mb-8'>
        {fullName}
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
