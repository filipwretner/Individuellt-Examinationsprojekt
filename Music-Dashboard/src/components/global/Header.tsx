import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const [query, setQuery ] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);

        if (value.trim() !== "") {
            navigate(`/search?query=${encodeURIComponent(value)}`);
        }
    };

    return (
        <header>
            <button onClick={() => navigate("/")}>Hem</button>

            <input
              type="text"
              placeholder="Sök"
              value={query}
              onChange={handleSearchChange}
            />
        </header>
    );
};

export default Header;