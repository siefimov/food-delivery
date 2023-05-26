import React, { useState, useEffect } from 'react';

import { getData } from '../api/foodApi';
import ShopBrand from './ShopBrand';
import { endpoints } from '../api/foodApi';

const ShopSideBar = ({ setSelectedBrand }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, updateSelectedBrand] = useState('');

  
  useEffect(() => {
    const fetchBrands = async () => {
      const res = await getData(endpoints.brands);
      setBrands(res);
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    updateSelectedBrand(brand);
  };

  return (
    <div className='flex h-fit basis-[25%] flex-col items-center gap-3 rounded border bg-slate-50 px-5 pb-12 pt-5'>
      <h2 className='mb-3 font-bold'>Shops:</h2>
      {brands.map((shop, index) => (
        <ShopBrand key={index} title={shop} onClick={() => handleBrandClick(shop)} isSelected={selectedBrand === shop} />
      ))}
    </div>
  );
};

export default ShopSideBar;
