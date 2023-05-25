import React from 'react';

import ShopSideBar from '../components/ShopSideBar';
import ShopFoodList from '../components/ShopFoodList';

const Shop = () => {
  return (
    <div className='m-5 flex gap-5 '>
      <ShopSideBar />
      <ShopFoodList />
    </div>
  );
};

export default Shop;
