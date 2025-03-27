import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchResults } from "../../Utilities/API/searchApi";


const initialState = {
    searchResults: {
        tracks: [],
        albums: [],
        artists: [],
    },
    status: "idle",
};

export const searchForMusic = createAsyncThunk("search/searchForMusic", async (query: string) => {
    return await fetchSearchResults(query);
});

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchForMusic.pending, (state) => {
                state.status = "loading";
            })
            .addCase(searchForMusic.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.searchResults = action.payload;
            })
            .addCase(searchForMusic.rejected, (state) => {
                state.status = "failed";
            });
    },
});;

export default searchSlice.reducer;