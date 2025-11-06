import React from 'react';

const Navbar = () => {
  // Added "Skills" and "Education"
  const navLinks = ["About", "Skills","Experience", "Education", "Projects", "Research", "Contact"];

  return (
    <nav className="bg-[#0F172A] bg-opacity-80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-8 flex justify-between items-center h-20">
        <a href="#" className="text-2xl font-italic hover:text-blue-400 transition-colors">
          AI/ML ENGINEER | DATA SCIENTIST
        </a>
        <div className="hidden lg:flex space-x-6"> {/* Changed to lg for more space */}
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg text-gray-300 hover:text-violet-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;