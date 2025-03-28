import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { getAlbumDetails } from "../Redux/Reducers/albumSlice";
import { Song } from "../Utilities/types";
import AddButton from "../Components/Global/AddButton";

const AlbumDetails: React.FC = () => {
    const { artist: encodedArtist, album: encodedAlbum } = useParams<{ artist: string; album: string }>();
    const artist = encodedArtist ? decodeURIComponent(encodedArtist) : "";
    const album = encodedAlbum ? decodeURIComponent(encodedAlbum) : "";
    const dispatch = useDispatch<AppDispatch>();
    const currentAlbum = useSelector((state: RootState) => state.album.album);

    useEffect(() => {
        if (artist && album) {
            dispatch(getAlbumDetails({ artist, album }));
        }
    }, [artist, album, dispatch]);

    return (
        <div>
            {currentAlbum ? (
                <>
                    <h2 className="text-2xl font-bold">{currentAlbum.title}</h2>
                    <p className="text-gray-600">{currentAlbum.artist}</p>
                    <ul className="mt-4 space-y-2">
                        {currentAlbum.tracks && currentAlbum.tracks.length > 0 ? (
                            currentAlbum.tracks.map((song: Song, index: number) => (
                                <li
                                    key={index}
                                    className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
                                >
                                    <p className="font-semibold text-gray-700">{song.name}</p>
                                    <AddButton song={song} />
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500">No tracks available for this album.</p>
                        )}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AlbumDetails;