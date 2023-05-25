import React from 'react';

import Button from './Button';

const ShopFoodItem = ({ imageUrl, title, price }) => {
  return (
    <li className='w-full h-fit max-w-sm rounded-xl border p-5 bg-white'>
      <div className='mb-5 flex h-[200px] justify-center rounded'>
        <img src={imageUrl} alt='image' className='h-full overflow-hidden rounded' />
      </div>
      <h2 className='mb-5 font-bold'>{title}</h2>
      <p>${price}</p>
      <div className='flex justify-end'><Button title='add to Cart' /></div>
    </li>
  );
};

export default ShopFoodItem;
