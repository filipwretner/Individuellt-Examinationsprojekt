import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchSimilarSongs, fetchTrendingMusic} from "../../Utilities/API/homeApi";

const initialState: MusicState = {
  similarSongs: null,
  trending: null,
  searchResults: null,
  artistAlbums: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const getSimilarSongs = createAsyncThunk("home/getSimilarSongs", async () => {
    return await fetchSimilarSongs();
});

export const getTrendingMusic = createAsyncThunk("trending/getTrendingMusic", async () => {
    return await fetchTrendingMusic();
});

const homeSlice = createSlice({
    name: "similarSongs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getSimilarSongs.fulfilled, (state, action) => {
            state.similarSongs = action.payload;
        })
        .addCase(getTrendingMusic.fulfilled, (state, action) => {
            state.trending = action.payload;
        });
    },
});

export default homeSlice.reducer;