import React from "react";
import { Artist } from "../../Utilities/types";

const SearchArtists: React.FC<{ artists: Artist[] }> = ({ artists }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Artister</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.slice(0, 6).map((artist, index) => (
                    <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        {artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchArtists;