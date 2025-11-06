import React from 'react';

const Badge = ({ children }) => {
  return (
    <span className="bg-blue-400/10 text-blue-300 text-xs font-medium me-2 px-2.5 py-1 rounded-full">
      {children}
    </span>
  );
};

export default Badge;