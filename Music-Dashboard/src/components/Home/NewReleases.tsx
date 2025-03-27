import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarSongs } from "../../Redux//Reducers/homeSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const SimilarSongs: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const similarSongs = useSelector((state: RootState) => state.home.similarSongs);

    useEffect(() => {
        dispatch(getSimilarSongs());
    }, [dispatch]);

    console.log(similarSongs);

    return (
        <div>
            <h2>Liknande låtar</h2>
            {similarSongs ? (
                <ul>
                    {similarSongs.similartracks.track.slice(0, 10).map((song, index) => (
                        <li key={index}>
                            {song.name} - {song.artist.name}
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