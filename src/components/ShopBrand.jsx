import React from 'react';

const ShopBrand = ({ title, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[80%] cursor-pointer rounded-xl border px-7 py-3 text-center hover:bg-sky-100 ${
        isSelected ? 'bg-sky-300' : 'bg-sky-50'
      }
      `}
    >
      {title}
    </div>
  );
};

export default ShopBrand;
