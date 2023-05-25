import { useState, useEffect } from 'react';

import { getData } from '../api/foodApi';
import { endpoints } from '../api/foodApi';

import Input from '../components/Input';
import CartFoodItem from '../components/CartFoodItem';
import Button from '../components/Button';

const Cart = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await getData(endpoints.food);
      setFood(response);
    };

    fetchFood();
  }, []);

  return (
    <>
      <div className='flex gap-5 p-5'>
        <div className='h-fit basis-[40%] rounded border bg-slate-50 py-5'>
          <Input type='text' id='name' title='Name' />
          <Input type='email' id='email' title='Email' />
          <Input type='tel' id='phone' title='Phone' />
          <Input type='text' id='address' title='Address' />
        </div>
        <div className='mb-24 h-[100vh] basis-[60%] overflow-y-scroll rounded border p-5'>
          <ul className='flex flex-col gap-8'>
            {food.map((food, index) => (
              <CartFoodItem
                key={index}
                imageUrl={food.imageUrl}
                title={food.title}
                price={food.price}
              />
            ))}
          </ul>

          <div className='my-5 flex items-center justify-end gap-5'>
            <p>Total price: 999</p>
            <Button title='Submit' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
