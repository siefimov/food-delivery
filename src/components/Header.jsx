import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'text-sky-600' : '');

const Header = () => {
  return (
    <div className='py-5 px-12 bg-slate-200'>
      <NavLink to='/' className={setActive}>Shop</NavLink>
      <span className='mx-10'> | </span>
      <NavLink to='cart' className={setActive}>Shopping Cart</NavLink>
    </div>
  );
};

export default Header;
