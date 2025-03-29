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
    const artistAlbums = useSelector((state: RootState) => state.artist.artistAlbums);
    const artistSongs = useSelector((state: RootState) => state.artist.artistSongs);

    useEffect(() => {

        if (id) {
            dispatch(getArtistAlbums(id));
            dispatch(getArtistSongs(id));
        }
    }, [id, dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{id}</h2> 
            <ArtistSongs songs={artistSongs} />
            <ArtistAlbums albums={artistAlbums} /> 
        </div>
    );
};

export default ArtistDetails;