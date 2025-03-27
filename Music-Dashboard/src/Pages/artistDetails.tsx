import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { getArtistAlbums, getArtistSongs } from "../Redux/Reducers/artistSlice";
import ArtistSongs from "../Components/ArtistDetails/artistSongs";
import ArtistAlbums from "../Components/ArtistDetails/artistAlbums";

const ArtistDetails: React.FC = () => {

    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const artist = useSelector((state: RootState) => state.artist.artistAlbums);
    const artistSongs = useSelector((state: RootState) => state.artist.artistSongs);

    console.log(artist);

    useEffect(() => {

        if (id) {
            dispatch(getArtistAlbums(id));
            dispatch(getArtistSongs(id));
        }
    }, [id, dispatch]);

    return (
        <div>
            {artist ? (
                <>
                  <h2>{artist.name}</h2>
                  <ArtistSongs songs={artistSongs} />
                  <ArtistAlbums albums={artist.albums} />
                </>
            ) : (
                <p>Laddar...</p>
            )}
        </div>
    );
};

export default ArtistDetails;