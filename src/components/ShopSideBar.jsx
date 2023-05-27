import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getShops, selectShop } from '../features/shopSlice';
import ShopBrand from './ShopBrand';
import { endpoints } from '../api/foodApi';

const ShopSideBar = ({ setSelectedBrand }) => {
  const [selectedBrand, updateSelectedBrand] = useState('');

  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops.shops);

  useEffect(() => {
    dispatch(getShops(endpoints.brands));
  }, [dispatch]);

  const handleSelectShop = (shop) => {
    setSelectedBrand(shop);
    dispatch(selectShop(shop));
    updateSelectedBrand(shop);
  };

  return (
    <div className='flex h-fit basis-[25%] flex-col items-center gap-3 rounded border bg-slate-50 px-5 pb-12 pt-5'>
      <h2 className='mb-3 font-bold'>Shops:</h2>
      {shops.map((shop, index) => (
        <ShopBrand
          key={index}
          title={shop}
          onClick={() => handleSelectShop(shop)}
          isSelected={selectedBrand}
        />
      ))}
    </div>
  );
};

export default ShopSideBar;
