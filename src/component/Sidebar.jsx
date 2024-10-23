import React from 'react';
import SidebarButton from './common/SidebarButton';

const sidebarButtonElements = [
  {
    path: "/",
    content: "Home"
  },
  {
    path: "/todo",
    content: "Todo App"
  },
  {
    path: "/login",
    content: "Login"
  },
  {
    path: "/useFetch",
    content: "useFetch Photos"
  },
  {
    path: "/carousel",
    content: "Carousel"
  },
  {
    path: "/accordion",
    content: "Accordion"
  },
]
const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-4 bg-gray-100 p-4'>
      {
        sidebarButtonElements.map((item) => (
          <SidebarButton key={item.path} to={item.path}>{item.content}</SidebarButton>
        ))
      }
    </div>
  );
};

export default Sidebar;
