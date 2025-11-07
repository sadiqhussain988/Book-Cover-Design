import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logobook.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Author", to: "/author" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-2 md:py-3">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Strong with Hearts and Hounds logo"
            className="h-8 md:h-10 w-auto object-contain hover:opacity-90 transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`relative text-[15px] font-medium transition-all duration-300 group
                ${
                  location.pathname === link.to
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-amber-700 transition-all duration-300 ease-in-out 
                  ${
                    location.pathname === link.to
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}
          <Link to="/order">
            <button className="ml-2 bg-amber-600 text-white px-5 py-1.5 rounded-full font-medium shadow-md hover:bg-amber-700 hover:shadow-lg transition duration-200">
              Pre-Order
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-amber-700 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md shadow-md border-t border-gray-100`}
      >
        <div className="flex flex-col items-center space-y-4 py-5 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`relative w-full text-center py-2 rounded-lg text-[16px] font-medium transition-all duration-300 group
                ${
                  location.pathname === link.to
                    ? "text-amber-700 bg-amber-50"
                    : "text-gray-700 hover:text-amber-700 hover:bg-gray-50"
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-amber-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-lg"></span>
            </Link>
          ))}
          <Link
            to="/order"
            className="w-full bg-amber-600 text-white text-center px-6 py-2 rounded-full font-medium shadow-md hover:bg-amber-700 transition duration-200"
          >
            Pre-Order
          </Link>
        </div>
      </div>
    </nav>
  );
}
