import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCart } from "./cartProvider";
import {
  faShoppingBag,
  faShoppingCart,
  
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav  className="bg-white shadow-md maxx:px-8 maxx:gap-10 p-4 px-24 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faShoppingBag} className="text-red-500 text-2xl" />
        <span className="text-2xl font-bold text-gray-700">ShopNest</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-700">
          <FontAwesomeIcon className="text-orange-300" icon={menuOpen ? faChevronCircleUp: faChevronCircleDown} />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-row gap-x-9 maxx:absolute maxx:z-50 maxx:top-14 maxx:left-45p maxx:bg-white justify-center maxx:p-9 rounded-br-3xl rounded-bl-3xl ${
          menuOpen ? "flex" : "maxx:hidden"
        }`}
      >
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `text-gray-700 hover:text-purple-700 border-b-2 ${
              isActive ? "border-purple-700 text-purple-700" : "border-transparent"
            }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            `text-gray-700 hover:text-purple-700 border-b-2 ${
              isActive ? "border-purple-700 text-purple-700" : "border-transparent"
            }`
          }
        >
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            `text-gray-700 hover:text-purple-700 border-b-2 ${
              isActive ? "border-purple-700 text-purple-700" : "border-transparent"
            }`
          }
        >
          Women
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            `text-gray-700 hover:text-purple-700 border-b-2 ${
              isActive ? "border-purple-700 text-purple-700" : "border-transparent"
            }`
          }
        >
          Kids
        </NavLink>
      </div>

      {/* Login and Cart Section */}
      <div className="flex items-center space-x-4">
        <NavLink to="/login">
          <button className="border border-gray-300 px-4 py-1 rounded-lg hover:bg-gray-100">Login</button>
        </NavLink>
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
