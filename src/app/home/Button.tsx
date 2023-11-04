import React from 'react';

const Button = (props:any ) => {
    const {val, value} = props;
  return (
    <a
      href={value}
      className="animate-gradient inline-block rounded-lg bg-gray-900 from-pink-500 via-red-500 to-yellow-500 bg-[400% 400%] p-0.5 animation-duration-6s hover:bg-gradient-to-r dark:bg-gray-800"
    >
      <span className="block rounded-md bg-red px-5 py-3 text-sm font-medium text-red-900 dark:bg-gray-900 dark:text-white">
        {val}
      </span>
    </a>
  );
};

export default Button;