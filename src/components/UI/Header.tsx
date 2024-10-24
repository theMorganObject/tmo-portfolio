import Nav from './Nav';

function Header() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <>
      <header className='fixed top-0 left-0 right-0 flex flex-col items-center justify-center py-4 bg-gray-0 z-50 shadow-md 2xs:pb-5 md:py-6 lg:py-8'>
        <h1 className='font-serif text-gray-950 text-2xl mb-5 2xs:mb-6 xs:text-3xl md:text-4xl'>
          {fullName}
        </h1>
        <Nav />
      </header>
    </>
  );
}

export default Header;
