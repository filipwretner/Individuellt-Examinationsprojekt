import React from "react";
import { Song } from "../../Utilities/types";

const ArtistSongs: React.FC<{ songs: Song[] | null }> = ({ songs }) => {
    return (
        <div>
            <h2>Top Songs</h2>
            {Array.isArray(songs) && songs.length > 0 ? (
                <ul>
                    {songs.slice(0, 6).map((song, index) => (
                        <li key={index}>
                            {song.name} - {song.artist.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No songs found</p>
            )}
        </div>
    );
};

export default ArtistSongs;