import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header className="mb-5">
        <Header />
      </header>

      <main>{children}</main>

      {/* <footer>footer</footer> */}
    </>
  );
};

export default Layout;
