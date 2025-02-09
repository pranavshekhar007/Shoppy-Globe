import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">🏠 Welcome to Shoppy-Globe</h1>
        <p className="text-lg max-w-xl">
          Discover premium products at unbeatable prices with a seamless shopping experience.
        </p>
        <Link
          to="/products"
          className="mt-6 bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 text-lg font-semibold"
        >
          🛍️ Shop Now
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🌟 Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-6 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold mb-2">🚀 Fast Delivery</h3>
            <p className="text-gray-600">We ensure quick delivery within 2-3 business days.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure Payment</h3>
            <p className="text-gray-600">Your transactions are safe with our secure payment gateway.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold mb-2">💯 Quality Products</h3>
            <p className="text-gray-600">We offer high-quality products from top brands.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
