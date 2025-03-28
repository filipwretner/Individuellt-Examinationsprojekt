import React from "react";
import { Link } from "react-router-dom";
import { SearchAlbum } from "../../Utilities/types";

const SearchAlbums: React.FC<{ albums: SearchAlbum[] }> = ({ albums }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Album</h2>
            {albums.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {albums.slice(0, 6).map((album, index) => (
                    <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        <Link to={`/album/${encodeURIComponent(album.artist)}/${encodeURIComponent(album.name)}`}>
                            {album.name} - {album.artist}
                        </Link>
                    </li>
                ))}
                </ul>
            ) : (
                <p className="text-gray-500">Inga album hittades</p>
            )}
        </div>
    );
};

export default SearchAlbums;

