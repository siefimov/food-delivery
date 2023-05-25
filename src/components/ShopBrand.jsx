import React from 'react';

const ShopBrand = ({ title }) => {
  return (
    <div className='w-[80%] cursor-pointer rounded-xl border bg-sky-50 px-7 py-3 text-center hover:bg-sky-100'>
      {title}
    </div>
  );
};

export default ShopBrand;
