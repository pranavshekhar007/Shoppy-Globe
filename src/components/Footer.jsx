import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">🛍 Shoppy-Globe</h2>
          <p className="mt-2 text-gray-400">
            Your one-stop destination for all your shopping needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="text-gray-400 hover:text-white">Cart</Link></li>
            <li><Link to="/checkout" className="text-gray-400 hover:text-white">Checkout</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-3 gap-4">
            <a href="https://www.linkedin.com/in/pranav-shekhar-905405240/" className="text-gray-400 hover:text-blue-600"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 text-center text-gray-400 text-sm pt-4">
        © {new Date().getFullYear()} Shoppy-Globe. All Rights Reserved. By Pranav Shekhar.
      </div>
    </footer>
  );
}

export default Footer;
