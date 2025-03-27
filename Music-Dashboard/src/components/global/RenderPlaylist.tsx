import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { removeFromPlaylist } from "../../Redux/Reducers/playlistSlice";

const RenderPlaylist: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const playlist = useSelector((state: RootState) => state.playlist.songs);

    const handleRemove = (songName: string) => {
        if (window.confirm(`Are you sure you want to remove "${songName}" from the playlist?`)) {
            dispatch(removeFromPlaylist(songName));
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Playlist</h2>
            {playlist.length > 0 ? (
                <ul className="space-y-2">
                    {playlist.map((song, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-2 border rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div>
                                <p className="font-semibold text-gray-700">{song.name}</p>
                                <p className="text-sm text-gray-500">{song.artist.name}</p>
                            </div>
                            <button
                                onClick={() => handleRemove(song.name)}
                                className="text-red-500 hover:text-red-700 font-bold"
                            >
                                Remove
                            </button>
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