import React from 'react';

const ShopItem = ({ title }) => {
  return <div className='cursor-pointer rounded-xl border w-[80%] text-center px-7 py-3 hover:bg-sky-100'>{title}</div>;
};

export default ShopItem;
