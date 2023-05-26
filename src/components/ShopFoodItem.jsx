import React from 'react';

import Button from './Button';

const ShopFoodItem = ({ imageUrl, title, price, brand, onClick }) => {
  return (
    <li className='h-fit w-full max-w-xs rounded-xl border bg-white p-5'>
      <div className='mb-5 flex h-[200px] justify-center rounded'>
        <img src={imageUrl} alt='image' className='h-full w-full overflow-hidden rounded' />
      </div>
      <div className='flex justify-between'>
        <h2 className='mb-5 font-bold'>{title}</h2>
        <span className='text-sky-600'>{brand}</span>
      </div>
      <p>${price}</p>
      <div className='flex justify-end'>
        <Button title='add to Cart' onClick={onClick} />
      </div>
    </li>
  );
};

export default ShopFoodItem;
