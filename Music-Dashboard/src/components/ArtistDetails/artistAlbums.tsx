import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../Utilities/types";

const ArtistAlbums: React.FC<{ albums: Album[] | null }> = ({ albums }) => {
    return (
        <div>
            <h2>Albums</h2>
            <div>
                {Array.isArray(albums) && albums.length > 0 ? (
                    albums.map((album, index) => (
                        <div key={index}>
                            <Link to={`/album/${encodeURIComponent(album.name)}`}>
                                {album.name} - {album.artist.name}
                            </Link>
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