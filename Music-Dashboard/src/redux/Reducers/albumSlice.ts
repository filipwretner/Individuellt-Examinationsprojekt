import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchAlbumData } from "../../Utilities/API/albumApi";

const initialState: MusicState = {
  similarSongs: null,
  trending: null,
  searchResults: null,
  artist: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const getAlbumDetails = createAsyncThunk(
    "album/getAlbumDetails",
    async ({ artist, album }: { artist: string; album: string }) => {
        return await fetchAlbumData(artist, album);
    }
);

const albumSlice = createSlice({
    name: "album",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbumDetails.fulfilled, (state, action) => {
            state.album = action.payload;
        });
    },
});

export default albumSlice.reducer;