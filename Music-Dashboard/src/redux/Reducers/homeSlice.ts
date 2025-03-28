import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchSimilarSongs, fetchTrendingMusic, fetchTrendingArtists} from "../../Utilities/API/homeApi";

const initialState: MusicState = {
  similarSongs: null,
  trendingSongs: null,
  trendingArtists: null,
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

export const getTrendingArtists = createAsyncThunk("trending/getTrendingArtists", async () => {
    return await fetchTrendingArtists();
});

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getSimilarSongs.fulfilled, (state, action) => {
            state.similarSongs = action.payload;
        })
        .addCase(getTrendingMusic.fulfilled, (state, action) => {
            state.trendingSongs = action.payload;
        })
        .addCase(getTrendingArtists.fulfilled, (state, action) => {
            state.trendingArtists = action.payload;
        });
    },
});

export default homeSlice.reducer;