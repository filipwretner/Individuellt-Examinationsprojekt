import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMusic } from "../../Redux/Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const TrendingMusic: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const trendingMusic = useSelector((state: RootState) => state.home.trending);

    useEffect(() => {
        dispatch(getTrendingMusic());
    }, [dispatch]);

    return (
        <div>
            <h2>Populär Musik</h2>
            {trendingMusic ? (   
            <ul>
            {trendingMusic.tracks?.track?.slice(0, 10).map((song: any) => (
                <li key={song.name}>
                    {song.name} {song.artist.name}
                </li>
            ))}
            </ul>
            ) : (
                <p>Laddar...</p>
            )}
        </div>
    );
};

export default TrendingMusic;