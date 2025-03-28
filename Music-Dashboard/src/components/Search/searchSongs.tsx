import React from "react";
import { Song } from "../../Utilities/types";
import AddButton from "../Global/AddButton";

const SearchSongs: React.FC<{ songs: Song[] }> = ({ songs }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Låtar</h2>
            {songs.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {songs.slice(0, 6).map((song, index) => (
                        <div  key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-gray-700">{song.name}</p>
                                <p className="text-sm text-gray-500">{song.artist.name}</p>
                            </div>
                            <AddButton song={song} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Inga låtar hittades</p>
            )}
        </div>
    );
};

export default SearchSongs;
