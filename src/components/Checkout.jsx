import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const deliveryFee = cartItems.length > 0 ? 5 : 0;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPrice = subtotal + deliveryFee;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">🛒 Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty. Add items before proceeding.</p>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="mb-6">
            {cartItems.map((item) => (
              <div key={item.productId} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-green-600 font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Order Summary</h3>
            <div className="flex justify-between text-lg font-semibold text-gray-700">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-700 mt-2">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 mt-4 border-t pt-4">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <div className="mt-6 text-center">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300">
              💳 Proceed to Payment
            </button>
          </div>

          {/* Back to Cart */}
          <div className="mt-6 text-center">
            <Link to="/cart" className="text-blue-500 hover:underline">← Back to Cart</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
