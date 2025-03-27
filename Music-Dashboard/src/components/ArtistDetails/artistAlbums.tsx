import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../Utilities/types";

const ArtistAlbums: React.FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <div>
            <h2>Albums</h2>
            <div>
                {albums.map((album, index) => (
                    <div key={index}>
                        <Link to={`/album/${encodeURIComponent(album.title)}`}>
                            {album.title} - {album.artist.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistAlbums;