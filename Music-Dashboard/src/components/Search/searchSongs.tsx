import React from "react";
import { Song } from "../../Utilities/types";
import AddButton from "../Global/AddButton";

const SearchSongs: React.FC<{ songs: Song[] }> = ({ songs }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Låtar</h2>
            {songs.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {songs.slice(0, 6).map((song, index) => (
                        <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                            <p className="font-semibold text-gray-700">{song.name}</p>
                            <p className="text-sm text-gray-500">{song.artist.name}</p>
                            <AddButton song={song} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Inga låtar hittades</p>
            )}
        </div>
    );
};

export default SearchSongs;