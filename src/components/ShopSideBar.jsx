import React from 'react';

import ShopItem from './ShopItem';

const ShopSideBar = () => {
  const shopItem = ['Mc Donny', 'CFK', 'Mr Cat'];

  return (
    <div className='rounded border px-5 py-3 flex flex-col justify-center items-center gap-3 basis-[25%]'>
      <h2 className='mb-3 font-bold'>Shops:</h2>
      {shopItem.map((shop, index) => (
        <ShopItem key={index} title={shop}/>
      ))}
    </div>
  );
};

export default ShopSideBar;
