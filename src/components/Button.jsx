import React from 'react';

const Button = ({ title }) => {
  return (
    <button className='rounded-2xl border-sky-700 bg-sky-100 px-6 py-2 text-sky-700 hover:bg-sky-200'>
      {title}
    </button>
  );
};

export default Button;
