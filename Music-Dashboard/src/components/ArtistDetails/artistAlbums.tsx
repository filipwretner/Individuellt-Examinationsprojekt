import React from "react";
import { Album } from "../../Utilities/types";

const ArtistAlbums: React.FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <div>
            <h2>Albums</h2>
            <div>
                {albums.map((album, index) => (
                    <div key={index}>
                        <h3>{album.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistAlbums;