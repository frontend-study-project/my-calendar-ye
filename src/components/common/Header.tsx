const Header = () => {
  return (
    <header className="relative z-50 w-full h-14 border-b border-b-stone-200">
      <h1 className="w-full max-w-[1200px] mx-auto  px-10 py-2 h-full">
        <a href="/" className="block h-full">
          <img src="/logo.png" alt="my calendar" className="max-h-full" />
        </a>
      </h1>
    </header>
  );
};

export default Header;
