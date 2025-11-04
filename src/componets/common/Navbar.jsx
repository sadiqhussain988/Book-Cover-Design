import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#/" },
    { name: "About", href: "#about" },
    { name: "Author", href: "#author" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#e4b37d] backdrop-blur-md"
          : "bg-[#e4b37d]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xl md:text-2xl font-semibold tracking-tight">
            <span className="text-amber-700">Strong with</span>{" "}
            <span className="text-white">Hearts & Hounds</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
             className="text-white font-medium border-b border-transparent hover:border-b-white transition-colors duration-200"

            >
              {link.name}
            </a>
          ))}
         <button
          className="border border-white px-6 py-3 rounded-full font-semibold text-white hover:bg-[#e4b37d]/10"
        >
           Pre Order
        </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-amber-700 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="flex flex-col px-6 py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-amber-700 transition"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-amber-700 transition duration-200">
              Pre-Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
