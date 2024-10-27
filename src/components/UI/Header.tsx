import Nav from './Nav';

function Header() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <header className='w-full px-4 py-8 bg-white dark:bg-gray-900'>
      <div className='relative w-fit mx-auto'>
        <h1 className='font-serif text-gray-900 dark:text-white text-center text-2xl xs:text-3xl md:text-4xl mb-6'>
          {fullName}
        </h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
