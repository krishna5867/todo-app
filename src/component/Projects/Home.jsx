import React from 'react';
import Sidebar from '../Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <div className='w-full h-screen flex bg-gray-50'>
    <div className='w-1/4'>
      <Sidebar />
    </div>

    <div className='ml-1/4 w-3/4 px-10 h-scree overflow-y-auto'>
      {location.pathname === '/' && (
        <h2 className='text-xl font-semibold pt-6'>Welcome!</h2>
      )}
      <Outlet />
    </div>
  </div>
  );
}

export default Home;
