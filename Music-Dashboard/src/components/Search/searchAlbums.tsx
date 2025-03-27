import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../Utilities/types";

const SearchAlbums: React.FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <div>
            <h2>Album</h2>
            <ul>
                {albums.slice(0, 6).map((album, index) => (
                    <li key={index}>
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