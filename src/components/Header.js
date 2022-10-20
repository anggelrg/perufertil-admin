const Header = () => {
  return (
    <>
      <nav className="flex items-center bg-white shadow-md p-4">
        <div className="brand">
          <img className="h-14" src="/logo.png" alt="" />
        </div>

        <ul className="ml-10">
          <li>
            <a href="/products">Productos</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
