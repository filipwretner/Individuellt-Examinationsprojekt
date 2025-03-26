import React from "react";
import { Artist } from "../../Utilities/types";

const SearchArtists: React.FC<{ artists: Artist[] }> = ({ artists }) => {
    return (
        <div>
            <h2>Artister</h2>
            <ul>
                {artists.slice(0, 6).map((artist, index) => (
                    <li key={index}>
                        {artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchArtists;