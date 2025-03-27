import React from "react";
import { Song } from "../../Utilities/types";

const ArtistSongs: React.FC<{ songs: Song[] | null }> = ({ songs }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Songs</h2>
            {Array.isArray(songs) && songs.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {songs.slice(0, 6).map((song, index) => (
                        <li
                            key={index}
                            className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <p className="font-semibold text-gray-700">{song.name}</p>
                            <p className="text-sm text-gray-500">{song.artist.name}</p>
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