import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../Utilities/types";

const ArtistAlbums: React.FC<{ albums: Album[] | null }> = ({ albums }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.isArray(albums) && albums.length > 0 ? (
                    albums.map((album, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <Link 
                                to={`/album/${encodeURIComponent(album.artist.name)}/${encodeURIComponent(album.name)}`} 
                                className="block text-center text-lg font-semibold text-blue-600 hover:text-blue-800"
                            >
                                {album.name}
                            </Link>
                            <p className="text-sm text-gray-500 text-center mt-2">{album.artist.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No albums found</p>
                )}
            </div>
        </div>
    );
};

export default ArtistAlbums;