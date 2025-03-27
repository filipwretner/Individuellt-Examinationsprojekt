import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarSongs } from "../../Redux/musicSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const SimilarSongs = () => {
    const dispatch = useDispatch<AppDispatch>();
    const similarSongs = useSelector((state: RootState) => state.music.similarSongs);

    useEffect(() => {
        dispatch(getSimilarSongs());
    }, [dispatch]);

    return (
        <div>
            <h2>Nya Album</h2>
            {similarSongs ? (
                <ul>
                    {similarSongs.similartracks?.track?.slice(0, 10).map((song: any) => (
                        <li key={song.id}>
                            {song.name} {song.artists[0].name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Laddar...</p>
            )}
        </div>
    );
};

export default SimilarSongs;