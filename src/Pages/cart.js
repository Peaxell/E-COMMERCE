import { useCart } from "../components/cartProvider";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0);

  return (
    <div className="container mx-auto  pt-24 px-4 py-8 flex flex-col gap-8">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">Shopping Cart</h1>
      
      {cart.length === 0 ? (
      <p className="text-pink-600 pt-48 text-center text-12xl animate-textPulse">
      Your cart is currently empty.
    </p>
    
      ) : (
        <div className="grid grid-cols-1 gap-6 pb-32"> {/* Padding added to avoid overlap */}
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-transform transform maxx:hover:scale-105 flex items-center gap-4 p-4"
            >
              {/* Image Section */}
              <div className="h-24 w-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-red-600 font-bold">{item.price}</p>
                {item.size && (
                  <p className="text-gray-500 text-sm">
                    <strong>Size:</strong> {item.size}
                  </p>
                )}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="py-2 px-4 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Fixed Order Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-orange-100 shadow-lg border-t py-4 px-6 flex items-center justify-between z-50">
          {/* Price Summary */}
          <div>
            <div className="flex justify-between text-gray-600 text-sm mb-1">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm mb-1">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold text-lg">
              <span>Total:</span>
              <span>${(subtotal + 5).toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            className="py-2 px-6 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
            onClick={() => alert("Proceeding to checkout...")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
