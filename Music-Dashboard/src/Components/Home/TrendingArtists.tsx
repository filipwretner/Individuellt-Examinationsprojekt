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
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Heta Artister</h2>
            {trendingArtists ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingArtists.artists.artist.slice(0, 12).map((artist: any) => (
                        <li key={artist.name} className="p-4 border rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between">
                            <Link to={`/artist/${encodeURIComponent(artist.name)}`}>
                                <p className="font-semibold text-gray-700">{artist.name}</p>
                            </Link>
                        </li>
            ))}
                </ul>
            ) : (
                <p className="font-semibold text-gray-700">Laddar...</p>
            )}
        </div>
    );
};

export default TrendingArtists;