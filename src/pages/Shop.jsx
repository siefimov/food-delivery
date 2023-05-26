import { useState } from 'react';

import ShopSideBar from '../components/ShopSideBar';
import ShopFoodList from '../components/ShopFoodList';

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <div className='m-5 flex gap-5 '>
      <ShopSideBar setSelectedBrand={setSelectedBrand} />
      <ShopFoodList selectedBrand={selectedBrand} />
    </div>
  );
};

export default Shop;
