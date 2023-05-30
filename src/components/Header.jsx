import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const setActive = ({ isActive }) => (isActive ? 'text-sky-600' : '');

const Header = () => {
  const counter = useSelector((state) => state.cart.cart.length);

  return (
    <div className='relative w-full bg-slate-200 px-12 py-5'>
      <NavLink to='/' className={setActive}>
        Shop
      </NavLink>
      <span className='mx-10'> | </span>
      <NavLink to='cart' className={setActive}>
        Shopping Cart
      </NavLink>
      {counter > 0 ? (
        <span className='absolute top-3 rounded-full border border-sky-400 px-2  text-[red]'>
          {counter}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;
