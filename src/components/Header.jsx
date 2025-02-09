import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0 left-0 w-full z-50">
      <Link to="/" className="text-xl font-bold hover:text-gray-300">
        🛍 Shoppy-Globe
      </Link>

      <nav className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
      </nav>

      <Link to="/cart" className="relative">
        <FiShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </Link>
    </header>
  );
}

export default Header;
