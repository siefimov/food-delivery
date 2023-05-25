import React from 'react';

import ShopSideBar from '../components/ShopSideBar';
import FoodList from '../components/FoodList';

const Shop = () => {
  return (
    <div className='m-5 flex gap-5 '>
      <ShopSideBar />
      <FoodList />
    </div>
  );
};

export default Shop;
