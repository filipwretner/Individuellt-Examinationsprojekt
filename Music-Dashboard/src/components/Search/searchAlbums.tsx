import React from "react";
import { Album } from "../../Utilities/types";

const SearchAlbums: React.FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <div>
            <h2>Album</h2>
            <ul>
                {albums.slice(0, 6).map((album, index) => (
                    <li key={index}>
                        {album.title} - {album.artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchAlbums;