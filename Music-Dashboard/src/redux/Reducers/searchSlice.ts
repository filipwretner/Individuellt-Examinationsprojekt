import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MusicState } from '../../Utilities/types';
import { fetchSearchResults } from "../../Utilities/API/searchApi";


const initialState: MusicState = {
  similarSongs: null,
  trending: null,
  searchResults: null,
  artist: null,
  artistSongs: null,
  album: null,
  status: "idle",
}

export const searchForMusic = createAsyncThunk("search/searchForMusic", async (query: string) => {
    return await fetchSearchResults(query);
});

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchForMusic.fulfilled, (state, action) => {
            state.searchResults = action.payload;
        });
    },
});

export default searchSlice.reducer;