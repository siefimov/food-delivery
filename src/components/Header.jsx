import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-5 bg-slate-200'>
      <NavLink to='/'>Shop</NavLink>
      <span> | </span>
      <NavLink to='cart'>Shopping Cart</NavLink>
    </div>
  );
};

export default Header;
