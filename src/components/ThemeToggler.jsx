import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
