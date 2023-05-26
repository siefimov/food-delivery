import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import { decrease, clear } from '../features/counterSlice';

import Input from '../components/Input';
import CartFoodItem from '../components/CartFoodItem';
import Button from '../components/Button';

import { addOrder } from '../features/orderSlice';
import { endpoints } from '../features/orderSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const totalPrc = useSelector((state) => state.cart.cart);
  console.log(totalPrc);
  const totalPrice = 12;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    dispatch(decrease());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clear());
  };

  const handleSubmit = (cart) => {
    const order = {
      endpoint: endpoints.orders,
      body: cart,
    };
    dispatch(addOrder(order));
  };

  const cartFood = useSelector((state) => state.cart.cart);
  console.log(cartFood);

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
          <ul className='mb-8 flex flex-col gap-8'>
            {cartFood.length > 0
              ? cartFood.map((food, index) => (
                  <CartFoodItem
                    key={index}
                    imageUrl={food.food.imageUrl}
                    title={food.food.title}
                    price={food.food.price}
                    onClick={() => handleRemoveFromCart(food.id)}
                    food={food.price}
                  />
                ))
              : 'Your Cart is empty.'}
          </ul>

          <div className='flex items-center justify-between'>
            <Button title='Clear Cart' onClick={handleClearCart} />
            <div className='my-5 flex items-center justify-end gap-5'>
              <p className='text-2xl '>Total price: ${totalPrice}</p>
              <Button title='Submit' onClick={() => handleSubmit(cartFood)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
