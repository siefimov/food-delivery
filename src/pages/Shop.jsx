import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getFilteredFood } from '../features/foodSlice';

import ShopSideBar from '../components/ShopSideBar';
import ShopFoodList from '../components/ShopFoodList';

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredFood());
  }, []);
  return (
    <div className='m-5 flex gap-5 '>
      <ShopSideBar setSelectedBrand={setSelectedBrand} />
      <ShopFoodList selectedBrand={selectedBrand} />
    </div>
  );
};

export default Shop;
