import React from 'react';
import img from './Image/shop2.jpg';
import product1 from './Image/kid1.jpg';
import product2 from './Image/kid2.jpg';
import product3 from './Image/kid3.jpg';
import product4 from './Image/kid4.jpg';
import product5 from './Image/men5.jpg';
import product6 from './Image/men4.jpg';
import product7 from './Image/men10.jpg';
import product8 from './Image/men2.jpg';
import product9 from './Image/wm9.jpg';
import product10 from './Image/wm2.jpg';
import product11 from './Image/wm7.jpg';
import product12 from './Image/wm1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const NewCollectionsBanner = () => {
  const products = [
    { image: product1, description: "Striped T-Shirt", price: "$18" },
    { image: product2, description: "Denim Overalls", price: "$25" },
    { image: product3, description: "Printed Hoodie", price: "$30" },
    { image: product4, description: "Graphic Tee", price: "$15" },
    { image: product5, description: "Cotton Shorts", price: "$12" },
    { image: product6, description: "Floral Dress", price: "$22" },
    { image: product7, description: "Kids' Jacket", price: "$35" },
    { image: product8, description: "Summer Hat", price: "$10" },
    { image: product9, description: "Jogger Pants", price: "$20" },
    { image: product10, description: "Colorful Sneakers", price: "$40" },
    { image: product11, description: "Warm Beanie", price: "$8" },
    { image: product12, description: "Long Sleeve Shirt", price: "$18" },
  ];

  // Split products into three rows
  const rows = [
    { path: '/Kids', products: products.slice(0, 4) },
    { path: '/Men', products: products.slice(4, 8) },
    { path: '/Women', products: products.slice(8, 12) },
  ];

  return (
    <div  className="relative items-center justify-between bg-gradient-to-b from-pink-200 to-white pt-32 px-4 sm:px-8 py-1">
      {/* Header Section */}
      <div className="relative flex flex-col-reverse sm:flex-row items-center justify-between bg-gradient-to-b from-pink-200 to-white pt-32 pb-32 px-4 sm:px-8">
        <div className="max-w-lg ml-0 sm:ml-10 text-center sm:text-left mb-12 sm:mb-0">
          <p className="text-sm font-semibold text-gray-600 uppercase">New Arrivals Only</p>
          <h1 className="text-4xl mb-10 sm:text-5xl font-bold text-gray-900 mt-2">New 👋 Collections</h1>
          {/* Add anchor link to button */}
          <a href="#collections" className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold  rounded-full hover:bg-red-600 transition-colors">
            Latest Collection →
          </a>
        </div>
        <div className="relative w-64 sm:w-80 h-64 sm:h-80 mb-8 sm:mb-0">
          <img src={img} alt="Model" className="object-cover rounded-full w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-10"></div>
        </div>
      </div>

      {/* Product Grid Section with an id for scrolling */}
      <div id="collections" className="px-4 sm:px-8 py-10">
        <div className="text-gray-700 mb-4">Showing 1 - 12 out of 54 Products</div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <a href={row.path} className="hover:text-red-500 transition-colors">
                {row.path.replace('/', '').replace('-', ' ').toUpperCase()}
              </a>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {row.products.map((product, index) => (
                <a key={index} href={row.path} className="bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="object-cover h-64 w-full rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-4">{product.description}</h3>
                  <p className="text-gray-500 mt-2">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-purple-200 to-white text-center py-10">
        {/* Subscription Section */}
        <div className="mb-8">
          <h2 className="text-4xl pb-4 font-bold text-gray-800">Get Exclusive Offers On Your Email</h2>
          <p className="text-gray-600 pb-4 mt-2">Subscribe to our newsletter and stay updated.</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Your email id"
              className="border border-gray-300 rounded-l-4xl maxx:w-72 px-4 py-3 w-96 focus:outline-none"
            />
            <button onClick={() => alert("Subscrided Successfully ...")} className="bg-black text-white px-6 py-2 rounded-r-4xl  hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-12 h-18  flex justify-center items-center ">
              <span className="text-red-500 text-5xl font-bold"><FontAwesomeIcon icon={faShoppingBag}/></span>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">SHOPPER</h3>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Company
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Offices
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300">
            <FontAwesomeIcon icon={faPinterest}/>
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300">
            <FontAwesomeIcon icon={faInstagram}/>
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300">
            <FontAwesomeIcon icon={faWhatsapp}/>
          </button>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm">Copyright © 2024 - All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default NewCollectionsBanner;
