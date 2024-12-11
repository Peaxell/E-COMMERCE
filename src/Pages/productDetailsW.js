import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/cartProvider';

// Import product images
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

const ProductDetailW = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

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
    { id: 12, image: product12, thumbnails: [product12, product9, product10, product11], name: "Silk Scarf", price: "$30", description: "A soft and luxurious silk scarf." },
  ];

  const productWM = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(productWM?.image || '');
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize && !["Vintage Sunglasses", "Stylish Handbag", "Silk Scarf"].includes(productWM.name)) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...productWM, size: selectedSize || "N/A" });
    alert(`${productWM.name} added to your cart${selectedSize ? ` (Size: ${selectedSize})` : ''}.`);
  };

  if (!productWM) {
    return (
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-bold text-red-600">Product not found!</h2>
        <p className="text-gray-600 mt-4">The product you're looking for doesn't exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24 h-screen flex flex-col items-center">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
        {/* Thumbnail Gallery */}
        <div className="w-full lg:w-1/5 flex lg:flex-col gap-4 overflow-y-auto">
          {productWM.thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(thumbnail)}
              className={`w-full lg:w-auto h-24 object-cover rounded-lg cursor-pointer ${
                selectedImage === thumbnail ? 'border-2 border-red-500' : 'border'
              }`}
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={selectedImage}
            alt={productWM.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{productWM.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-red-600">{productWM.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{productWM.description}</p>

          {!["Vintage Sunglasses", "Stylish Handbag", "Silk Scarf"].includes(productWM.name) && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Size</h3>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition ${
                      selectedSize === size ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition mb-4"
          >
            ADD TO CART
          </button>

          <div className="text-gray-500">
            <p>
              <strong>Category:</strong> Fashion & Accessories
            </p>
            <p>
              <strong>Tags:</strong> Fashion, Casual, Comfortable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailW;
