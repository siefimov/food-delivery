import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getData } from '../api/foodApi';
import { endpoints } from '../api/foodApi';

import ShopFoodItem from './ShopFoodItem';
import { increase, setTotalPrice } from '../features/counterSlice';
import { addToCart } from '../features/cartSlice';

const ShopFoodList = ({ selectedBrand }) => {
  const [food, setFood] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  console.log(selectedFood);

  const dispatch = useDispatch();

  const handleSelectedFood = (foodItem) => {
    setSelectedFood((selectedFood) => [...selectedFood, foodItem]);
    dispatch(increase());
    dispatch(addToCart(foodItem));
    dispatch(setTotalPrice(foodItem))
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
    <div className='flex h-[90vh] basis-[75%] justify-center overflow-y-auto rounded border bg-slate-50 px-12 py-12'>
      {food.length > 0 ? (
        <ul className='flex flex-wrap justify-center gap-14 '>
          {food?.map((foodItem, index) => (
            <ShopFoodItem
              key={index}
              imageUrl={foodItem.imageUrl}
              title={foodItem.title}
              brand={foodItem.brand}
              price={foodItem.price}
              onClick={() => handleSelectedFood(foodItem)}
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
