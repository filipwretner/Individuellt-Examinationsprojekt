import React from "react";
import { Link } from "react-router-dom";
import { SearchAlbum } from "../../Utilities/types";

const SearchAlbums: React.FC<{ albums: SearchAlbum[] }> = ({ albums }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2 text-center">Album</h2>
            {albums.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {albums.slice(0, 6).map((album, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow h-full flex items-center justify-center text-center">
                            <Link to={`/album/${encodeURIComponent(album.artist)}/${encodeURIComponent(album.name)}`}>
                                {album.name} - {album.artist}
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Inga album hittades</p>
            )}
        </div>
    );
};

export default SearchAlbums;

