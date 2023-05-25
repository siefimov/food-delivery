import React, { useState, useEffect } from 'react';

import { getData } from '../api/foodApi';
import ShopItem from './ShopBrand';
import { endpoints } from '../api/foodApi';

const ShopSideBar = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await getData(endpoints.brands);
      setBrands(res);
    };

    fetchBrands();
  }, []);

  return (
    <div className='flex h-fit basis-[25%] flex-col items-center gap-3 rounded border bg-slate-50 px-5 pb-12 pt-5'>
      <h2 className='mb-3 font-bold'>Shops:</h2>
      {brands.map((shop, index) => (
        <ShopItem key={index} title={shop} />
      ))}
    </div>
  );
};

export default ShopSideBar;
