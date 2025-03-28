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
            className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0"
        >
            +
        </button>
    );
};

export default AddButton;