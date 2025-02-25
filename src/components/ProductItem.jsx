import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.productId === product._id); // Match productId

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product._id}`} className="block">
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          className="w-full h-40 object-contain rounded-md mb-3"
        />
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-lg font-bold text-green-600">${product.price}</p>
      </Link>

      {cartItem ? (
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => {
              if (cartItem.quantity > 1) {
                dispatch(updateQuantity({ productId: product._id, quantity: cartItem.quantity - 1 }));
              } else {
                dispatch(removeFromCart({ productId: product._id }));
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
          >
            −
          </button>
          <span className="text-lg font-semibold text-gray-800">{cartItem.quantity}</span>
          <button
            onClick={() => dispatch(updateQuantity({ productId: product._id, quantity: cartItem.quantity + 1 }))}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-200"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart({ productId: product._id, name: product.name, price: product.price, image: product.image }))}
          className="mt-3 w-full bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          🛒 Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductItem;
