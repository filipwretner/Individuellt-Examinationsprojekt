import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { getAlbumDetails } from "../Redux/Reducers/albumSlice";
import { Song } from "../Utilities/types";

const AlbumDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const album = useSelector((state: RootState) => state.album.album);

    useEffect(() => {
        if (id) {
            dispatch(getAlbumDetails({ artist: "artistName", album: id }));
        }
    }, [id, dispatch]);

    return (
        <div>
            {album ? (
                <>
                    <h2>{album.title}</h2>
                    <p>{album.artist.name}</p>
                    <img src={album.cover} alt={album.title} />
                    <ul>
                        {album.songs.map((song: Song, index: number) => (
                            <li key={index}>
                                {song.name}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Laddar...</p>
            )}
        </div>
    );
};

export default AlbumDetails;