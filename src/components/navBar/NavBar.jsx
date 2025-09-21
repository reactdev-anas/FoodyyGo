import React, { useContext } from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router';
import { DataContext } from '../context/UseContext';

const NavBar = () => {
  const { bookMark, cartItems } = useContext(DataContext);

  return (
    <>
      <nav className="relative flex flex-wrap sm:flex-nowrap justify-between items-center p-4 sm:p-6 md:p-7 mx-4 lg:p-7 lg:mx-6 sm:mx-6 xl:mx-6 font-[cursive]">
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl   ">.FoodyGo</h2>

        {/* Nav Items */}
        <ul className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6">
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <span className="absolute -top-2 -right-2 bg-blue-600 px-1 rounded-full text-white text-xs sm:text-sm">
              {cartItems.length}
            </span>
            <PiShoppingCartThin
              fontSize="25px"
              className="text-gray-700 ml-4 cursor-pointer"
            />
          </Link>

          {/* Bookmark */}
          <Link to="/bookMark" className="relative flex items-center">
            <span className="absolute -top-2 -right-2 bg-blue-600 px-1 rounded-full text-white text-xs sm:text-sm">
              {bookMark.length}
            </span>
            <CiBookmark
              fontSize="25px"
              className="text-gray-700 ml-4 cursor-pointer"
            />
          </Link>

          
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
