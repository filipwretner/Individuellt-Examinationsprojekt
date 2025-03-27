import React from "react";
import { useDispatch } from "react-redux";
import { addToPlaylist } from "../../Redux/Reducers/playlistSlice";
import { Song } from "../../Utilities/types";

interface AddButtonProps {
    song: Song;
}

const AddButton: React.FC<AddButtonProps> = ({ song }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToPlaylist(song));
    };

    return (
        <button
            onClick={handleAdd}
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg text-center" 
        >
            Add to Playlist
        </button>
    );
};

export default AddButton;