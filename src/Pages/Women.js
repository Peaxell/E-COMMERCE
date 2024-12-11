
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faWhatsapp, faShoppingBag } from '@fortawesome/free-brands-svg-icons';
import { CartContext } from '../context/CartContext';

import { useCart } from '../components/cartProvider';

// Import your actual product images
import product1 from './Image/wm10.jpg';
import product2 from './Image/wm2.jpg';
import product3 from './Image/wm3.jpg';
import product4 from './Image/wm11.jpg';
import product5 from './Image/wm5.jpg';
import product6 from './Image/wm11.jpg';
import product7 from './Image/wm7.jpg';
import product8 from './Image/wm8.jpg';
import product9 from './Image/wm9.jpg';
import product10 from './Image/wm1.jpg';
import product11 from './Image/wm4.jpg';
import product12 from './Image/wm12.jpg';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const PromoSectionW = () => {
  const { addToCart } = useCart(); // Access addToCart function from context

  // Array of product details with images, descriptions, and prices
  const products = [
    { id: 1, image: product1, thumbnails: [product1, product2, product3, product4], name: "Floral Summer Dress", price: "$49", description: "A lovely floral summer dress perfect for any occasion." },
    { id: 2, image: product2, thumbnails: [product2, product3, product4, product1], name: "Casual Blouse", price: "$35", description: "A simple yet stylish casual blouse." },
    { id: 3, image: product3, thumbnails: [product3, product4, product1, product2], name: "Elegant Evening Gown", price: "$120", description: "An elegant evening gown that makes a statement." },
    { id: 4, image: product4, thumbnails: [product4, product1, product2, product3], name: "Chic Denim Jacket", price: "$85", description: "A trendy denim jacket to complement any outfit." },
    { id: 5, image: product5, thumbnails: [product5, product6, product7, product8], name: "Striped Cotton T-shirt", price: "$25", description: "A comfortable cotton t-shirt with stripes." },
    { id: 6, image: product6, thumbnails: [product6, product7, product8, product5], name: "Classic Leather Jacket", price: "$150", description: "A classic leather jacket for a timeless look." },
    { id: 7, image: product7, thumbnails: [product7, product8, product5, product6], name: "Comfortable Lounge Pants", price: "$40", description: "Perfect pants for lounging in comfort." },
    { id: 8, image: product8, thumbnails: [product8, product5, product6, product7], name: "Vintage Sunglasses", price: "$60", description: "Stylish vintage sunglasses." },
    { id: 9, image: product9, thumbnails: [product9, product10, product11, product12], name: "Stylish Handbag", price: "$90", description: "A handbag that combines style and functionality." },
    { id: 10, image: product10, thumbnails: [product10, product11, product12, product9], name: "High-Waist Jeans", price: "$70", description: "High-waist jeans for a trendy look." },
    { id: 11, image: product11, thumbnails: [product11, product12, product9, product10], name: "Knitted Sweater", price: "$55", description: "A cozy knitted sweater for chilly days." },
    { id: 12, image: product12, thumbnails: [product12, product9, product10, product11], name: "Silk Scarf", price: "$30", description: "A soft and luxurious silk scarf." }
  ];

  return (
    <div className="px-8 pt-24 py-2">
      <div className="animated-gradient rounded-lg py-11 p-8 text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-600">FLAT 5% OFF</h2>
        <p className="text-lg font-semibold text-gray-700 mb-6 mt-2">5 Hours 30 Mins</p>
        <a  href="#wm"   className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
          Explore now
        </a>
      </div>

      <h2 className="text-3xl text-center font-bold text-gray-800 mb-4 relative pb-6">
      Popular in Women
         <span className="absolute left-1/2 bottom-0 w-40 h-1 bg-blue-500 rounded transform -translate-x-1/2"></span>
     </h2>
      <div className="text-gray-700 mb-4">Showing 1 - 12 out of 54 Products</div>

      <div id='wm' className="  grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <Link to={`/productWM/${product.id}`}>
              <img
                src={product.image}
                alt={product.description}
                className="object-cover h-96 w-full rounded-lg"
              />
            </Link>
            <h3 className="text-lg font-semibold mt-4">{product.description}</h3>
            <p className="text-gray-500 mt-2">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <a  href="#wm"   className="sticky left-1/1.2 bottom-o">
          <FontAwesomeIcon  className='text-6xl' icon={faChevronCircleUp}/>
        </a>
    </div>
  );
};

export default PromoSectionW;
