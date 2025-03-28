import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { removeFromPlaylist } from "../../Redux/Reducers/playlistSlice";

const RenderPlaylist: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const playlist = useSelector((state: RootState) => state.playlist.songs);

    const [songToRemove, setSongToRemove] = useState<string | null>(null);

    const handleRemove = (songName: string) => {
        dispatch(removeFromPlaylist(songName));
        setSongToRemove(null);
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-lg h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📜 Playlist</h2>
            {playlist.length > 0 ? (
                <ul className="space-y-3 overflow-y-auto flex-grow">
                    {playlist.map((song, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-3 border rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div>
                                <p className="font-semibold text-gray-700">{song.name}</p>
                                <p className="text-sm text-gray-500">{song.artist.name}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                {songToRemove === song.name ? (
                                    <>
                                        <button
                                            onClick={() => handleRemove(song.name)}
                                            className="text-red-500 hover:text-red-700 font-bold"
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            onClick={() => setSongToRemove(null)}
                                            className="text-gray-500 hover:text-gray-700 font-bold"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setSongToRemove(song.name)}
                                        className="text-red-500 hover:text-red-700 font-bold"
                                    >
                                        🗑 Remove
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No songs in the playlist</p>
            )}
        </div>
    );
};

export default RenderPlaylist;