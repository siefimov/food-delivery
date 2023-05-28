import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromCart, clearCart, getCarts } from '../features/cartSlice';
import { decrease, clear, clearTotalOrderSum, downTotalOrderSum } from '../features/counterSlice';
import { addOrder } from '../features/orderSlice';

import CartFoodItem from '../components/CartFoodItem';
import Button from '../components/Button';
import UserForm from '../components/UserForm';
import Map from '../components/Map';
import MapContainer from '../components/MapContainer';

const Cart = () => {
  const dispatch = useDispatch();
  const cartFood = useSelector((state) => state.cart.cart);
  const orderSum = useSelector((state) => state.counter.totalPrice);

  const [qtyItems, setQtyItems] = useState({});
  const [total, setTotal] = useState(0);

  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: '',
    address: '',
  });

  const handleUserData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemoveFromCart = (id, price) => {
    dispatch(removeFromCart(id));
    dispatch(decrease());
    dispatch(downTotalOrderSum(price));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clear());
    dispatch(clearTotalOrderSum());
    setUser({ name: '', email: '', tel: '', address: '' });
  };

  const handleSubmit = (cart) => {
    const order = {
      orderNumber: new Date(),
      user: {
        name: user.name,
        email: user.email,
        tel: user.tel,
        address: user.address,
      },
      body: cart,
    };
    dispatch(addOrder(order));
    dispatch(clearCart());
    dispatch(clear());
    dispatch(clearTotalOrderSum());
    setUser({ name: '', email: '', tel: '', address: '' });
  };

  const handleUpdateQtyItems = (id, qty) => {
    setQtyItems((prevQtyItems) => {
      const updatedQtyItems = { ...prevQtyItems, [id]: qty };

      // Calculate the updated total based on the new quantities
      const updatedTotal = cartFood.reduce((total, food) => {
        const foodQty = updatedQtyItems[food.id] || 1;
        return total + food.food.price * foodQty;
      }, 0);

      // Update the total state
      setTotal(updatedTotal);

      return updatedQtyItems;
    });
  };

  const handleAddressChange = (event) => {
    setUser({
      ...user,
      address: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(getCarts());
  }, []);

  return (
    <>
      <div className='flex gap-5 p-5'>
        <div className='flex flex-col'>
          {/* <Map /> */}
          <MapContainer address={user.address} handleAddressChange={handleAddressChange}/>
          <UserForm
            name={user.name}
            tel={user.tel}
            email={user.email}
            address={user.address}
            onChange={handleUserData}
          />
        </div>

        <div className='mb-24 h-[100vh] basis-[60%] overflow-y-scroll rounded border p-5'>
          <h2 className='mb-4 text-center text-2xl'>Shopping Cart</h2>
          <ul className='mb-8 flex flex-col gap-8'>
            {cartFood.length > 0
              ? cartFood.map((food, index) => (
                  <CartFoodItem
                    key={index}
                    imageUrl={food.food.imageUrl}
                    title={food.food.title}
                    price={food.food.price}
                    onClick={() => handleRemoveFromCart(food.id, food.food.price)}
                    food={food.price}
                    setQty={(qty) => handleUpdateQtyItems(food.id, qty)}
                    qty={qtyItems[food.id] || 1}
                  />
                ))
              : 'Your Cart is empty.'}
          </ul>

          <div className='flex items-center justify-between'>
            <Button title='Clear Cart' onClick={handleClearCart} />
            <div className='my-5 flex items-center justify-end gap-5'>
              <p className='text-2xl '>Total: ${orderSum}</p>
            </div>
            <Button title='Submit' onClick={() => handleSubmit(cartFood)} />
          </div>
        </div>        
      </div>
      
    </>
  );
};

export default Cart;
