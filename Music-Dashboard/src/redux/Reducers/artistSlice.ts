import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchArtistAlbums, fetchArtistSongs } from "../../Utilities/API/artistApi";


const initialState: MusicState = {
  similarSongs: null,
  trendingSongs: null,
  trendingArtists: null,
  searchResults: null,
  artistAlbums: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const getArtistAlbums = createAsyncThunk("artist/getArtistAlbums", async (artist: string) => {
    return await fetchArtistAlbums(artist);
});

export const getArtistSongs = createAsyncThunk("artist/getArtistSongs", async (artist: string) => {
    return await fetchArtistSongs(artist);
});

const artistSlice = createSlice({
    name: "artist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArtistAlbums.fulfilled, (state, action) => {
                state.artistAlbums = action.payload;
            })
            .addCase(getArtistSongs.fulfilled, (state, action) => {
                state.artistSongs = action.payload;
            });
    },
});

export default artistSlice.reducer;