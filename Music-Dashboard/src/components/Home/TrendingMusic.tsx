import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMusic } from "../../Redux/Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";
import AddButton from "../Global/AddButton";

const TrendingMusic: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const trendingMusic = useSelector((state: RootState) => state.home.trendingSongs);

    useEffect(() => {
        dispatch(getTrendingMusic());
    }, [dispatch]);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Populär Musik</h2>
            {trendingMusic ? (
                <div className="flex flex-col gap-2">
                    {trendingMusic.tracks?.track?.slice(0, 12).map((song: any, index: number) => (
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

export default TrendingMusic;