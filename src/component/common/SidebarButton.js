import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarButton = ({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <button
        className={`w-full p-4 text-lg font-medium ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default SidebarButton;
