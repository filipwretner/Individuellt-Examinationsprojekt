import React from "react";
import { Song } from "../../Utilities/types";
import AddButton from "../Global/AddButton";

const ArtistSongs: React.FC<{ songs: Song[] | null }> = ({ songs }) => {
    return (
        <div>
            <h2>Top Songs</h2>
            {Array.isArray(songs) && songs.length > 0 ? (
                <ul>
                    {songs.slice(0, 6).map((song, index) => (
                        <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        <p className="font-semibold text-gray-700">{song.name}</p>
                        <p className="text-sm text-gray-500">{song.artist.name}</p>
                        <AddButton song={song} />
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