import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../Utilities/types";

const SearchAlbums: React.FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Album</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {albums.slice(0, 6).map((album, index) => (
                    <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        <Link to={`/album/${encodeURIComponent(album.title)}`}>
                            {album.title} - {album.artist.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchAlbums;