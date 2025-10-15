import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from "../redux/slice/ProductsSlice"; // ✅ You’ll add this action in your slice

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearchTerm(value)); // ✅ Send search term to Redux
  };

  return (
    <div className=" flex justify-center py-5 ">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        className=" w-[300px] md:w-[600px] px-4 py-2 border border-gray-400 rounded-lg outline-none "
      />
    </div>
  );
}
