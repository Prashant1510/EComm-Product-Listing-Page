import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const links = ["Home", "Bag", "Sneakers", "Belt", "Contact"];

  return (
    <nav className="w-full bg-white shadow-sm p-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo of the page */}
        <div className="flex items-center gap-2">
          <div className="bg-sky-500 p-2 rounded-full">
            <span className="block w-3 h-3 bg-white rotate-45 mx-auto"></span>
          </div>
          <span className="text-lg font-bold text-gray-900">E-Comm</span>
        </div>

        {/* Links of the page */}
        <ul className="hidden md:flex items-center gap-20 font-medium">
          {links.map((link, id) => (
            <li
              key={id}
              className={`uppercase text-sm tracking-wider cursor-pointer  ${
                link === "Home"
                  ? "text-sky-500 font-semibold"
                  : "text-gray-800 hover:text-sky-500"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Cart section */}
        <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <ShoppingCart size={20} className="text-gray-700" />
          <span>Items</span>
          <span className="text-gray-400">$0.00</span>
        </div>
      </div>
    </nav>
  );
}
