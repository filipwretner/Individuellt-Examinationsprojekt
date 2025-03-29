import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "../../Utilities/types";

const SearchArtists: React.FC<{ artists: Artist[] }> = ({ artists }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2 text-center">Artister</h2>
            {artists.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {artists.slice(0, 8).map((artist, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow h-full flex items-center justify-center text-center">
                            <Link to={`/artist/${encodeURIComponent(artist.name)}`}>
                                {artist.name}
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Inga artister hittades</p>
            )}
        </div>
    );
};

export default SearchArtists;

