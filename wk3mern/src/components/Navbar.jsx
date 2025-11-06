import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">MyApp</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Tasks</Link>
          <Link to="/api" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">API Data</Link>
          {/* Add further links if needed */}
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="...">
      {/* existing links */}
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 border rounded text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}