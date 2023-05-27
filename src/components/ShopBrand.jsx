import React, { useMemo } from 'react';

const ShopBrand = ({ title, onClick, isSelected }) => {
  const result = title === isSelected;

  return (
    <button
      disabled={isSelected ? !result : result}
      onClick={onClick}
      className={`w-[80%] cursor-pointer rounded-xl border px-7 py-3 text-center hover:bg-sky-200 disabled:bg-slate-50 ${
        result ? 'bg-sky-300' : 'bg-sky-100'
      }
      `}
    >
      {title}
    </button>
  );
};

export default ShopBrand;
