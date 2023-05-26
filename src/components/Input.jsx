import React from 'react';

const Input = ({type, id, title, value}) => {
  return (
    <div className='flex flex-col p-5'>
      <label htmlFor={id} className='mb-2'>
        {title}
      </label>
      <input type={type} id={id} value={value} className='rounded-md border p-1 outline-none focus:ring' />
    </div>
  );
};

export default Input;
