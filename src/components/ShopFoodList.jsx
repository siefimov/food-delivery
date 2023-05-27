import { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { endpoints } from '../api/foodApi';

import ShopFoodItem from './ShopFoodItem';
import { increase, setTotalPrice } from '../features/counterSlice';
import { addToCart } from '../features/cartSlice';

import { getFood, filterFood } from '../features/foodSlice';

const ShopFoodList = ({ selectedBrand }) => {
  const [selectedFood, setSelectedFood] = useState([]);
  console.log(selectedFood);

  const dispatch = useDispatch();

  const handleSelectedFood = (foodItem) => {
    setSelectedFood((selectedFood) => [...selectedFood, foodItem]);
    dispatch(increase());
    dispatch(addToCart(foodItem));
    dispatch(setTotalPrice(foodItem));
  };

  const filteredFood = useSelector((state) => state.food.filteredFood);
  console.log(filteredFood);
  // useEffect(()=>{
  //   dispatch(getFood(endpoints.food))
  // },[])

  useEffect(() => {
    dispatch(getFood(endpoints.food));
    dispatch(filterFood(selectedBrand));
  }, [dispatch, selectedBrand]);

  return (
    <div className='flex h-[90vh] basis-[75%] justify-center overflow-y-auto rounded border bg-slate-50 px-12 py-12'>
      {filteredFood.length > 0 ? (
        <ul className='flex flex-wrap justify-center gap-14 '>
          {filteredFood?.map((foodItem, index) => (
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
        <p className='mx-auto text-3xl'>Please, choose the Shop!</p>
      )}
    </div>
  );
};

export default ShopFoodList;
