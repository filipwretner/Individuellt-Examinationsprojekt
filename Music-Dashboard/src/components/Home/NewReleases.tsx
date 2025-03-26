import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewReleases } from "../../Redux/musicSlice";
import { RootState, AppDispatch } from "../../Redux/store";

const NewReleases = () => {
    const dispatch = useDispatch<AppDispatch>();
    const newReleases = useSelector((state: RootState) => state.music.newReleases);

    useEffect(() => {
        dispatch(getNewReleases());
    }, [dispatch]);

    return (
        <div>
            <h2>Nya Album</h2>
            {newReleases ? (
                <ul>
                    {newReleases.albums?.album?.slice(0, 10).map((album: any) => (
                        <li key={album.id}>
                            {album.name} {album.artists[0].name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Laddar...</p>
            )}
        </div>
    );
};

export default NewReleases;