const Header = () => {
  return (
    <header>
      <nav className="relative bg-kiwi100">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          <img src="images/logo.svg" alt="" />
          <div className="relative hidden space-x-8 font-bold lg:flex">
            <a href="#" className="text-white inline-flex items-center">
              <span className="border-2 border-white rounded-full inline-flex justify-center items-center w-6 h-6">
                <i className="fa-solid fa-question fa-xs"></i>
              </span>
            </a>
            <div className="absolute right-0 top-9 w-52 py-2 bg-white rounded-lg shadow-xl">
              <a
                href=""
                className="block px-4 py-2 text-gay-800 hover:bg-gray-200"
              >
                Preguntas Frecuentes
              </a>
              <a
                href=""
                className="block px-4 py-2 text-gay-800 hover:bg-gray-200"
              >
                Mensajes
              </a>
            </div>
            <a href="#" className="text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>

            <a href="#" className="text-white">
              <i className="fa-solid fa-bell"></i>
            </a>

            <a href="#" className="text-white">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </div>
        </div>
      </nav>
      <nav></nav>
    </header>
  );
};

export default Header;
