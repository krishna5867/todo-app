import React from 'react';
import SidebarButton from './common/SidebarButton';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-gray-100 p-4'>
      <SidebarButton to="/">Home</SidebarButton>
      <SidebarButton to="/todo">Todo App</SidebarButton>
      <SidebarButton to="/login">Login</SidebarButton>
      <SidebarButton to="/calculator">Calculator</SidebarButton>
      <SidebarButton to="/useFetch">useFetch Photos</SidebarButton>
      <SidebarButton to="/carousel">Carousel</SidebarButton>
      <SidebarButton to="/counter">Counter App</SidebarButton>
    </div>
  );
};

export default Sidebar;
