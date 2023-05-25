import React from 'react';

import ShopSideBar from '../components/ShopSideBar';
import GoodsList from '../components/GoodsList';

const Shop = () => {
  return (
    <div className='flex m-5'>
      <ShopSideBar />
      <GoodsList />
    </div>
  );
};

export default Shop;
