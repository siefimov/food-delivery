import { useState, useEffect } from 'react';

import { getData } from '../api/foodApi';
import { endpoints } from '../api/foodApi';

import ShopFoodItem from './ShopFoodItem';

const ShopFoodList = ({ selectedBrand }) => {
  const [food, setFood] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  console.log(selectedFood);

  const handleSelectedFood = (food) => {
    setSelectedFood((selectedFood) => [...selectedFood, food]);
  };

  useEffect(() => {
    const fetchFood = async () => {
      if (selectedBrand) {
        const response = await getData(endpoints.food); 
        const filteredFood = response.filter((item) => item.brand === selectedBrand);

        setFood(filteredFood);
      } else {
        setFood([]);
      }
    };

    fetchFood();
  }, [selectedBrand]);

  return (
    <div className='flex justify-center h-[90vh] basis-[75%] overflow-y-auto rounded border bg-slate-50 px-12 py-12'>
      {food.length > 0 ? (
        <ul className='flex flex-wrap justify-center gap-14 '>
          {food?.map((food, index) => (
            <ShopFoodItem
              key={index}
              imageUrl={food.imageUrl}
              title={food.title}
              brand={food.brand}
              price={food.price}
              onClick={() => handleSelectedFood(food)}
            />
          ))}
        </ul>
      ) : (
        <p className='mx-auto'>Please, choose the Shop!</p>
      )}
    </div>
  );
};

export default ShopFoodList;
