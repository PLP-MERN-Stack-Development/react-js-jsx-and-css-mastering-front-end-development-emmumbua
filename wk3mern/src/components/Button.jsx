import React from 'react';
import classNames from 'classnames'; // you can install or you can just manually build class names

export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyle = 'px-4 py-2 rounded font-medium focus:outline-none transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const btnClass = `${baseStyle} ${variantStyles[variant] ?? variantStyles.primary} ${className}`;

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
