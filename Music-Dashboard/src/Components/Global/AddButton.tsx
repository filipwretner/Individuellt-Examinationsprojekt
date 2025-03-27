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
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
            Add to Playlist
        </button>
    );
};

export default AddButton;