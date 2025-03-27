import React from "react";
import { Song } from "../../Utilities/types";

const SearchSongs: React.FC<{ songs: Song[] }> = ({ songs }) => {
    return (
        <div>
            <h2>Låtar</h2>
            <ul>
                {songs.slice(0, 6).map((song, index) => (
                    <li key={index}>
                        {song.name} - {song.artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchSongs;