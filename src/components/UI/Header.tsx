import Nav from './Nav';

function Header() {
  const fullName = "Morgan O'Shaughnessey";

  return (
    <>
      <header className='fixed top-0 left-0 right-0 flex flex-col items-center justify-center py-8'>
        <h1 className='text-gray-950 text-xl md:text-2xl lg:text-3xl mb-4'>
          {fullName}
        </h1>
        <Nav />
      </header>
    </>
  );
}

export default Header;
