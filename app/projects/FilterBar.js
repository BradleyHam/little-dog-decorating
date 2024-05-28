'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const textOpacity = 'opacity-70'
const textSize = 'text-sm'
const CustomDropdown = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL CATEGORIES');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left mt-[20px] w-[100%] max-w-[300px]" ref={dropdownRef}>
      <div className='border border-gray-500 mb-[20px]'>
        <button
          type="button"
          className={`inline-flex items-center justify-between w-full  px-4 py-2 bg-white text-sm tracking-wide font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ${textOpacity} ${textSize}`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedCategory}
          <FaChevronDown />
        </button>
        
      {isOpen && (
        <div className="origin-top-right  w-[100%] mt-0  bg-white ">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${textOpacity} ${textSize}`}
                role="menuitem"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>

    </div>
  );
};

export default CustomDropdown;
