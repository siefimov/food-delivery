import React from 'react';

import Input from './Input';

const CartFoodItem = ({ imageUrl, title, price }) => {
  return (
    <li className='flex w-full rounded-xl border bg-white p-5'>
      <div className='mb-5 flex h-[200px] justify-center rounded'>
        <img src={imageUrl} alt='image' className='h-full overflow-hidden rounded' />
      </div>
      <div className='px-5 flex flex-col justify-end'>
        <h2 className='mb-5 font-bold px-5 text-center'>{title}</h2>
        <p className='px-5 text-center'>Price: ${price}</p>
        <Input type='number' id='number' />
      </div>
    </li>
  );
};

export default CartFoodItem;
