import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchArtistData, fetchArtistTopSongs } from "../../Utilities/API/artistApi";


const initialState: MusicState = {
  similarSongs: null,
  trending: null,
  searchResults: null,
  artistAlbums: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const getArtistDetails = createAsyncThunk("artist/getArtistDetails", async (artist: string) => {
    return await fetchArtistData(artist);
});

export const getArtistTopSongs = createAsyncThunk("artist/getArtistTopSongs", async (artist: string) => {
    return await fetchArtistTopSongs(artist);
});

const artistSlice = createSlice({
    name: "artist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArtistDetails.fulfilled, (state, action) => {
                state.artistAlbums = action.payload;
            })
            .addCase(getArtistTopSongs.fulfilled, (state, action) => {
                state.artistSongs = action.payload;
            });
    },
});

export default artistSlice.reducer;