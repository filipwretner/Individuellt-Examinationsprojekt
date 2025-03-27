import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarSongs } from "../../Redux/Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const SimilarSongs: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const similarSongs = useSelector((state: RootState) => state.home.similarSongs);

    useEffect(() => {
        dispatch(getSimilarSongs());
    }, [dispatch]);

    console.log(similarSongs);

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Liknande Låtar</h2>
            {similarSongs ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {similarSongs.similartracks.track.slice(0, 12).map((song, index) => (
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
                <p className="text-gray-500">Laddar...</p>
            )}
        </div>
    );
};

export default SimilarSongs;