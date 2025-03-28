import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingArtists } from "../../Redux/Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const TrendingArtists: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const trendingArtists = useSelector((state: RootState) => state.home.trendingArtists);

    useEffect(() => {
        dispatch(getTrendingArtists());
    }, [dispatch]);

    return (
        <div className="p-6 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Heta Artister</h2>
            {trendingArtists ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {trendingArtists.artists.artist.slice(0, 12).map((artist: any) => (
                        <div
                            key={artist.name}
                            className="p-4 border rounded-lg hover:shadow-lg transition-shadow text-center"
                        >
                            <Link to={`/artist/${encodeURIComponent(artist.name)}`}>
                                <p className="font-semibold text-gray-700">{artist.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Laddar...</p>
            )}
        </div>
    );
};

export default TrendingArtists;