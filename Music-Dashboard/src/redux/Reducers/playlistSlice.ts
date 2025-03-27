import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../Utilities/types";

interface PlaylistState {
    songs: Song[];
}

const initialState: PlaylistState = {
    songs: [],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addToPlaylist: (state, action: PayloadAction<Song>) => {
            const exists = state.songs.find(song => song.name === action.payload.name && song.artist.name === action.payload.artist.name);
            if (!exists) {
                state.songs.push(action.payload);
            }
        },
        removeFromPlaylist: (state, action: PayloadAction<string>) => {
            state.songs = state.songs.filter(song => song.name !== action.payload);
        },
    },
});

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;

