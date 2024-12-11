import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/cartProvider';

// Import product images
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

const ProductDetailM = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

  const products = [
    { id: 1, image: product1, thumbnails: [product1, product2, product3], name: "Casual T-Shirt", price: "$20", fullDescription: "A comfortable, casual t-shirt for everyday wear." },
    { id: 2, image: product2, thumbnails: [product2, product3, product4], name: "Slim Fit Jeans", price: "$45", fullDescription: "Stylish and trendy slim-fit jeans, perfect for a modern look." },
    { id: 3, image: product3, thumbnails: [product3, product4, product5], name: "Formal Blazer", price: "$80", fullDescription: "A premium quality blazer, ideal for formal occasions." },
    { id: 4, image: product4, thumbnails: [product4, product5, product6], name: "Cotton Hoodie", price: "$30", fullDescription: "Soft and warm cotton hoodie for casual comfort." },
    { id: 5, image: product5, thumbnails: [product5, product6, product7], name: "Leather Jacket", price: "$150", fullDescription: "Premium leather jacket, offering both style and durability." },
    { id: 6, image: product6, thumbnails: [product6, product7, product8], name: "Polo Shirt", price: "$25", fullDescription: "A classic polo shirt for a clean and preppy look." },
    { id: 7, image: product7, thumbnails: [product7, product8, product9], name: "Classic Chinos", price: "$40", fullDescription: "Versatile chinos that go with everything for a sharp look." },
    { id: 8, image: product8, thumbnails: [product8, product9, product10], name: "Sweatshirt", price: "$35", fullDescription: "Cozy sweatshirt for casual lounging or layering." },
    { id: 9, image: product9, thumbnails: [product9, product10, product11], name: "Cargo Pants", price: "$50", fullDescription: "Stylish cargo pants with plenty of pocket space." },
    { id: 10, image: product10, thumbnails: [product10, product11, product12], name: "Denim Jacket", price: "$60", fullDescription: "A timeless denim jacket with a modern fit." },
    { id: 11, image: product11, thumbnails: [product11, product12, product1], name: "Running Shorts", price: "$18", fullDescription: "Lightweight running shorts for comfortable workouts." },
    { id: 12, image: product12, thumbnails: [product12, product1, product2], name: "Graphic Tee", price: "$22", fullDescription: "A fun graphic tee with a unique design." }
  ];

  const productM = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(productM?.image);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...productM, size: selectedSize });
    alert(`${productM.name} (Size: ${selectedSize}) added to your cart.`);
  };

  if (!productM) {
    return (
      <div className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-bold text-red-600">Product not found!</h2>
        <p className="text-gray-600 mt-4">The product you're looking for doesn't exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24 h-screen overflow-hidden flex items-center">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full h-full">
        {/* Thumbnail Gallery */}
        <div className="w-full lg:w-1/5 flex lg:flex-col gap-4 overflow-y-auto">
          {productM.thumbnails.map((thumbnail, index) => (
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
            alt={productM.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/5 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{productM.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-red-600">{productM.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{productM.fullDescription}</p>

          {/* Size Selection */}
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

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition mb-4"
          >
            ADD TO CART
          </button>

          {/* Product Meta Info */}
          <div className="text-gray-500">
            <p>
              <strong>Category:</strong> Men's Clothing
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

export default ProductDetailM;
