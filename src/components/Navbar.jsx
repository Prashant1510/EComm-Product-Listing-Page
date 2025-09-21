import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  const links = ["Home", "Bag", "Sneakers", "Belt", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm p-3 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo of the page */}
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 p-2 rounded-full">
            <span className="block w-3 h-3 bg-white rotate-45 mx-auto"></span>
          </div>
          <span className="text-lg font-bold text-gray-900">E-Comm</span>
        </div>



        {/* Hamburger Icon for small screens --------------------------------------------------------*/}
        <button
          className="md:hidden ml-auto mr-4 p-2  focus:outline-none focus:ring-2 focus:ring-sky-200"
          onClick={() => setMenuOpen(menuOpen == false ? true : false)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} /> 
        </button>

        {/* Links of the page -------------------------------------------------------*/}
        <ul
          className={`hidden md:flex items-center gap-8 lg:gap-20 font-medium transition-all z-50`}
        >
          {links.map((link, id) => (
            <li
              key={id}
              className={`uppercase text-sm tracking-wider cursor-pointer z-20 ${
                link === "Home"
                  ? "text-sky-500 font-semibold"
                  : "text-gray-800 hover:text-sky-500"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Cart section --------------------------------------------------------*/}
        <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <ShoppingCart size={20} className="text-gray-700" />
          <span>Items</span>
          <span className="text-gray-400">$0.00</span>
        </div>
      </div>

      {/* Mobile menu to show when screen is small-----------------------------------------------*/}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col gap-2 py-4 px-8 font-medium">
            {links.map((link, id) => (
              <li
                key={id}
                className={`uppercase text-sm tracking-wider cursor-pointer py-2 ${
                  link === "Home"
                    ? "text-sky-500 font-semibold"
                    : "text-gray-800 hover:text-sky-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
