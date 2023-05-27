import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTotalPrice } from '../features/counterSlice';
import Input from './Input';

const CartFoodItem = ({ imageUrl, title, price, onClick, setQty }) => {
  const dispatch = useDispatch();

  const [qtyItems, setQtyItems] = useState(1);
  const [totalValue, setTotalValue] = useState(price);

  const handleChange = (event) => {
    const newQty = event.target.value;
    setTotalPrice(totalValue);
    setQtyItems(newQty);
    setQty(newQty);
  };

  const increaseValue = () => {
    setQtyItems((qtyItems) => (qtyItems += 1));
    setTotalValue((prevValue) => prevValue + price);
  };

  const decreaseValue = () => {
    setQtyItems((qtyItems) => (qtyItems -= 1));
    setTotalValue((prevValue) => prevValue - price);
  };

  return (
    <li className='relative flex w-full rounded-xl border bg-slate-50 p-5'>
      <div
        onClick={onClick}
        title='Delete'
        className='absolute right-4 rounded-full border px-3 py-1 text-[red] hover:cursor-pointer hover:border-[red]'
      >
        X
      </div>
      <div className='mb-5 flex h-[200px] justify-center rounded'>
        <img src={imageUrl} alt='image' className='h-full overflow-hidden rounded' />
      </div>
      <div className='flex flex-col justify-end px-5'>
        <h2 className='mb-5 px-5 text-center font-bold'>{title}</h2>
        <p className='px-5 text-center'>Price: ${price}</p>
        <p className='px-5 text-center'>
          Total: <span className='font-bold'>{totalValue}</span>
        </p>
        <div className='relative'>
          <Input type='text' id='number' value={qtyItems} onChange={handleChange} />
          <span
            className='absolute right-3 top-5 h-6 w-6 cursor-pointer rounded-[50%] border bg-slate-200 px-2'
            onClick={increaseValue}
          >
            +
          </span>
          <span
            className='absolute bottom-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border bg-slate-200 px-2'
            onClick={() => decreaseValue()}
          >
            -
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartFoodItem;
