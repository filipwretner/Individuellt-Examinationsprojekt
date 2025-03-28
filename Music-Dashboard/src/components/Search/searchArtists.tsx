import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "../../Utilities/types";

const SearchArtists: React.FC<{ artists: Artist[] }> = ({ artists }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Artister</h2>
            {artists.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.slice(0, 6).map((artist, index) => (
                    <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                    <Link to={`/artist/${encodeURIComponent(artist.name)}`}>
                        {artist.name}
                    </Link>
                    </li>
                ))}
                </ul>
            ) : (
                <p className="text-gray-500">Inga artister hittades</p>
            )}
        </div>
    );
};

export default SearchArtists; 

