import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { getAlbumDetails } from "../Redux/Reducers/albumSlice";
import { Song } from "../Utilities/types";
import AddButton from "../Components/Global/AddButton";

const AlbumDetails: React.FC = () => {

    const { artist, album } = useParams<{ artist: string; album: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const currentAlbum = useSelector((state: RootState) => state.album.album);

    useEffect(() => {
        if (artist && album ) {
            dispatch(getAlbumDetails({ artist: artist, album: album }));
        }
    }, [artist, album, dispatch]);

    return (
        <div>
            {currentAlbum ? (
                <>
                    <h2>{currentAlbum.title}</h2>
                    <p>{currentAlbum.artist.name}</p>
                    <ul>
                        {currentAlbum.songs.map((song: Song, index: number) => (
                        <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                        <p className="font-semibold text-gray-700">{song.name}</p>
                        <AddButton song={song} />
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