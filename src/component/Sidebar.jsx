import React from 'react';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-gray-100 h-screen p-4'>
      <SidebarButton to="/">Home</SidebarButton>
      <SidebarButton to="/todo">Todo App</SidebarButton>
      <SidebarButton to="/login">Login</SidebarButton>
    </div>
  );
};

export default Sidebar;
