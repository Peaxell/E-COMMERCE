const products = [
    {
      id: 1,
      image: 'image1.jpg', // Replace with actual image paths
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 2,
      image: 'image2.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 3,
      image: 'image3.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 4,
      image: 'image4.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 5,
      image: 'image5.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 6,
      image: 'image6.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 7,
      image: 'image7.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
    {
      id: 8,
      image: 'image8.jpg',
      name: 'Boys Orange Colourblocked Hooded Sweatshirt',
      price: 77,
      originalPrice: 120,
    },
  ];
  
  function NewCollections() {
    return (
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">New Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-md font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default NewCollections;