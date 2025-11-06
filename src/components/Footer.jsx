import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800">
      <div className="container mx-auto px-8 py-6 text-center text-gray-500">
        <p>&copy; {currentYear} Nandini Devaraj. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;