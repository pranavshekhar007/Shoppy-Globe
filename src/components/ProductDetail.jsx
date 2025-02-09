import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === Number(id));

  // Fetch product details when component mounts
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-lg font-semibold text-blue-500">Loading product details...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-500 text-lg">Product not found.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-50 flex justify-center items-center bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mt-4">${product.price}</p>

        {/* Add to Cart or Quantity Controls */}
      {cartItem ? (
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              if (cartItem.quantity > 1) {
                dispatch(updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 }));
              } else {
                dispatch(removeFromCart(product.id));
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
          >
            −
          </button>
          <span className="text-lg font-semibold text-gray-800">{cartItem.quantity}</span>
          <button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              dispatch(updateQuantity({ id: product.id, quantity: cartItem.quantity + 1 }));
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-200"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            dispatch(addToCart(product));
          }}
          className="mt-3 w-full bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          🛒 Add to Cart
        </button>
      )}
      <Link to="/products">
      <button className="mt-3 w-full bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
        Back 
      </button>
      </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
