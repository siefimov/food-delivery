import { useState, useEffect } from 'react';

import { getData } from '../api/foodApi';
import { endpoints } from '../api/foodApi';

import ShopFoodItem from './ShopFoodItem';

const ShopFoodList = ({ selectedBrand }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      if (selectedBrand) {
        const response = await getData(endpoints.food); //`?brand=${selectedBrand}`
        const filteredFood = response.filter((item) => item.brand === selectedBrand);
        console.log(response);
        setFood(filteredFood);
      } else {
        setFood([]);
      }
    };

    fetchFood();
  }, [selectedBrand]);

  return (
    <div className='flex h-[90vh] basis-[75%] overflow-y-auto rounded border bg-slate-50 px-12 py-12'>
      <ul className='flex flex-wrap justify-center gap-16 '>
        {food?.map((food, index) => (
          <ShopFoodItem
            key={index}
            imageUrl={food.imageUrl}
            title={food.title}
            brand={food.brand}
            price={food.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShopFoodList;
