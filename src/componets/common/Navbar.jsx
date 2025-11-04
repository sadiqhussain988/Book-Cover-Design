import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#e4b37d] text-white py-4 px-8 flex justify-between items-center shadow-md">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide">
        Strong Hearts & Hounds
      </h1>

      {/* Menu Links */}
      <div className="flex space-x-6 text-lg">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#author" className="hover:underline">
          Author
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
