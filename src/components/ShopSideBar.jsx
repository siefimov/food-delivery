import React from 'react';

import ShopItem from './ShopBrand';
import { shopItem } from '../api/api';

const ShopSideBar = () => {
  return (
    <div className='flex basis-[25%] flex-col items-center gap-3 rounded border bg-slate-50 px-5 pt-5 pb-12 h-fit'>
      <h2 className='mb-3 font-bold'>Shops:</h2>
      {shopItem.map((shop, index) => (
        <ShopItem key={index} title={shop} />
      ))}
    </div>
  );
};

export default ShopSideBar;
