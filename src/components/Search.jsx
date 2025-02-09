import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../utils/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="🔍 Search for products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full md:w-1/2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      />
    </div>
  );
}

export default Search;
