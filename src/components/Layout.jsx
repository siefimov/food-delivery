import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
