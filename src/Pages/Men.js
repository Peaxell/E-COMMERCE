import React from 'react';
import { Link } from 'react-router-dom';




import { useCart } from '../components/cartProvider';

// Import your actual product images
import product1 from './Image/men1.jpg';
import product2 from './Image/men2.jpg';
import product3 from './Image/men3.jpg';
import product4 from './Image/men4.jpg';
import product5 from './Image/men5.jpg';
import product6 from './Image/men6.jpg';
import product7 from './Image/men7.jpg';
import product8 from './Image/men8.jpg';
import product9 from './Image/men9.jpg';
import product10 from './Image/men10.jpg';
import product11 from './Image/men11.jpg';
import product12 from './Image/men12.jpg';

const PromoSectionM = () => {
  const { addToCart } = useCart(); // Access addToCart function from context

  // Array of product details with images, descriptions, and prices
  const products = [
    { id: 1, image: product1, description: "Casual T-Shirt", price: "$20", fullDescription: "A comfortable, casual t-shirt for everyday wear." },
    { id: 2, image: product2, description: "Slim Fit Jeans", price: "$45", fullDescription: "Stylish and trendy slim-fit jeans, perfect for a modern look." },
    { id: 3, image: product3, description: "Formal Blazer", price: "$80", fullDescription: "A premium quality blazer, ideal for formal occasions." },
    { id: 4, image: product4, description: "Cotton Hoodie", price: "$30", fullDescription: "Soft and warm cotton hoodie for casual comfort." },
    { id: 5, image: product5, description: "Leather Jacket", price: "$150", fullDescription: "Premium leather jacket, offering both style and durability." },
    { id: 6, image: product6, description: "Polo Shirt", price: "$25", fullDescription: "A classic polo shirt for a clean and preppy look." },
    { id: 7, image: product7, description: "Classic Chinos", price: "$40", fullDescription: "Versatile chinos that go with everything for a sharp look." },
    { id: 8, image: product8, description: "Sweatshirt", price: "$35", fullDescription: "Cozy sweatshirt for casual lounging or layering." },
    { id: 9, image: product9, description: "Cargo Pants", price: "$50", fullDescription: "Stylish cargo pants with plenty of pocket space." },
    { id: 10, image: product10, description: "Denim Jacket", price: "$60", fullDescription: "A timeless denim jacket with a modern fit." },
    { id: 11, image: product11, description: "Running Shorts", price: "$18", fullDescription: "Lightweight running shorts for comfortable workouts." },
    { id: 12, image: product12, description: "Graphic Tee", price: "$22", fullDescription: "A fun graphic tee with a unique design." }
  ];

  return (
    <div   className="px-8 pt-24 py-2">
      <div className="animated-gradient rounded-lg py-11 p-8 text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-600">FLAT 5% OFF</h2>
        <p className="text-lg font-semibold text-gray-700 mb-6 mt-2">5 Hours 30 Mins</p>
        <a  href="#men"   className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
          Explore now
        </a>
      </div>

      <h2 className="text-3xl text-center font-bold text-gray-800 mb-4 relative pb-6">
        Popular in Men
        <span className="absolute left-1/2 bottom-0 w-40 h-1 bg-blue-500 rounded transform -translate-x-1/2"></span>
      </h2>
      <div className="text-gray-700 mb-4">Showing 1 - 12 out of 54 Products</div>

      <div id="men" className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <Link to={`/productM/${product.id}`}>
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
    </div>
  );
};

export default PromoSectionM;
