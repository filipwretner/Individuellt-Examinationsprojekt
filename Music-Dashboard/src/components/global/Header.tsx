import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);

        if (value.trim() !== "") {
            navigate(`/search?query=${encodeURIComponent(value)}`);
        }
    };

    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
                <button
                    onClick={() => navigate("/")}
                    className="text-2xl font-bold hover:text-gray-200 transition-colors cursor-pointer"
                >
                    Music Dashboard
                </button>

                <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Sök efter låtar eller artister..."
                        value={query}
                        onChange={handleSearchChange}
                        className="w-full sm:w-72 px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;