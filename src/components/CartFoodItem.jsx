import React from 'react';

import Input from './Input';

const CartFoodItem = ({ imageUrl, title, price }) => {
  return (
    <li className='flex w-full rounded-xl border bg-white p-5'>
      <div className='mb-5 flex h-[200px] justify-center rounded'>
        <img src={imageUrl} alt='image' className='h-full overflow-hidden rounded' />
      </div>
      <div className='flex flex-col justify-end px-5'>
        <h2 className='mb-5 px-5 text-center font-bold'>{title}</h2>
        <p className='px-5 text-center'>Price: ${price}</p>
        <Input type='number' id='number' />
      </div>
    </li>
  );
};

export default CartFoodItem;
