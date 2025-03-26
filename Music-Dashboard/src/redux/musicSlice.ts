import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../Utilities/types';
import { 
    fetchNewReleases,
    fetchTrendingMusic,
    fetchSearchResults,
    fetchArtistData,
    fetchArtistTopSongs,
    fetchAlbumData 
} from '../Utilities/apiClient';

const initialState: MusicState = {
  newReleases: null,
  trending: null,
  searchResults: null,
  artist: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const getNewReleases = createAsyncThunk("music/getNewReleases", async () => {
  return await fetchNewReleases();
})

export const getTrendingMusic = createAsyncThunk("music/getTrending", async () => {
    return await fetchTrendingMusic();
});

export const searchForMusic = createAsyncThunk("music/search", async (query: string) => {
    return await fetchSearchResults(query);
});

export const getArtistDetails = createAsyncThunk("music/getArtist", async (artist: string) => {
    return await fetchArtistData(artist);
});

export const getArtistTopSongs = createAsyncThunk("music/getArtistTopSongs", async (artist: string) => {
    return await fetchArtistTopSongs(artist);
});

export const getAlbumDetails = createAsyncThunk("music/getAlbum", async ({ artist, album }: { artist: string, album: string }) => {
    return await fetchAlbumData(artist, album);
});

const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getNewReleases.fulfilled, (state, action) => {
            state.newReleases = action.payload;
          })
          .addCase(getTrendingMusic.fulfilled, (state, action) => {
            state.trending = action.payload;
          })
          .addCase(searchForMusic.fulfilled, (state, action) => {
            state.searchResults = action.payload;
          })
          .addCase(getArtistDetails.fulfilled, (state, action) => {
            state.artist = action.payload;
          })
          .addCase(getArtistTopSongs.fulfilled, (state, action) => {
            state.artistSongs = action.payload;
          })
          .addCase(getAlbumDetails.fulfilled, (state, action) => {
            state.album = action.payload;
          });
    },
});

export default musicSlice.reducer;
