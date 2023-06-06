import  { useContext } from 'react';
import { ThemeContext } from '../../Provider/ThemeProvider';

const ThemeToggle = () => {
  const {isDarkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div
          className={`w-12 h-6 rounded-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`}
        >
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            onChange={toggleTheme}
          />
          <div
            className={`transform transition-all duration-300 ease-in-out w-6 h-6 rounded-full ${
              isDarkMode ? 'translate-x-6 bg-white' : 'translate-x-0 bg-black'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
