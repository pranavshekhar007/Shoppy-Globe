import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../utils/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemTotalPrice = item.price * item.quantity; // Calculate total price for this item

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 transition-all duration-300 border border-gray-200">
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg border"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-green-600 font-bold text-xl">${itemTotalPrice.toFixed(2)}</p> {/* Total Price */}
      </div>

      {/*  Quantity Controls */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          disabled={item.quantity === 1}
          className={`px-4 py-2 rounded-full shadow-md transition-all duration-200 ${
            item.quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          −
        </button>
        <span className="text-lg font-semibold text-gray-800">{item.quantity}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-200"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="ml-4 text-gray-600 px-3 py-2 rounded-lg hover:text-red-600 transition-all duration-300"
      >
        🗑 Remove
      </button>
    </div>
  );
}

export default CartItem;
