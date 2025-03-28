import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarSongs } from "../../Redux/Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";
import AddButton from "../Global/AddButton";

const SimilarSongs: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const similarSongs = useSelector((state: RootState) => state.home.similarSongs);

    useEffect(() => {
        dispatch(getSimilarSongs());
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Eftersom du lyssnade på Tesseract - War of Being</h2>
            {similarSongs ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {similarSongs.similartracks.track.slice(0, 12).map((song, index) => (
                        <li
                            key={index}
                            className="flex flex-col items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <p className="font-semibold text-gray-800">{song.name}</p>
                            <p className="text-sm text-gray-500">{song.artist.name}</p>
                            <AddButton song={song}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Laddar...</p>
            )}
        </div>
    );
};

export default SimilarSongs;