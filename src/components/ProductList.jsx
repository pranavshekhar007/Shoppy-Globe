import { useSelector } from "react-redux";
import useProducts from "../utils/useProducts";
import ProductItem from "./ProductItem"; 
import Search from "./Search";

function ProductList() {
  const { data: products, loading, error } = useProducts("http://localhost:5700/api/products"); // Ensure correct API URL
  const searchQuery = useSelector((state) => state.search.query); // Get search query from Redux

  // Ensure products exist and have a title before filtering
  const filteredProducts = products?.filter((product) =>
    product?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  ) || [];

  if (loading) return <p className="text-center text-lg font-semibold text-blue-500">Loading products...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">🛍️ Explore Our Products</h2>

      {/* Search Input */}
      <Search />

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
