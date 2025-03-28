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
                <div className="flex flex-col gap-2">
                    {similarSongs.similartracks.track.slice(0, 12).map((song: any, index: number) => (
                        <div
                            key={index}
                            className="p-4 border rounded-lg hover:shadow-lg transition-shadow flex items-center justify-between"
                        >
                            <div>
                                <p className="font-semibold text-gray-700">{song.name}</p>
                                <p className="text-sm text-gray-500">{song.artist.name}</p>
                            </div>
                            <AddButton song={song} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Laddar...</p>
            )}
        </div>
    );
};

export default SimilarSongs;