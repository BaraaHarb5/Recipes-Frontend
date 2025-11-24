import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(value.trim());
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
        w-full max-w-xl mx-auto
        flex items-center gap-3
        bg-white p-3
        rounded-2xl shadow-md
        hover:shadow-xl
        transition-all duration-300
        ring-1 ring-gray-200
        focus-within:ring-2 focus-within:ring-blue-500
      "
        >
         
            <FiSearch className="text-gray-500 text-xl ml-2" />

         
            <input
                className="
          flex-1
          bg-transparent
          outline-none
          text-gray-700
          placeholder-gray-400
          text-lg
        "
                placeholder="Search recipes..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

      
            <button
                className="
          bg-blue-600
          text-white
          px-5 py-2
          rounded-xl
          font-medium
          hover:bg-blue-700
          active:scale-95
          transition-all duration-300
        "
            >
                Search
            </button>
        </form>
    );
}
