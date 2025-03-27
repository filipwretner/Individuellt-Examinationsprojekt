import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./Reducers/playlistSlice";
import homeReducer from "./Reducers/homeSlice";
import searchReducer from "./Reducers/searchSlice";
import artistReducer from "./Reducers/artistSlice";
import albumReducer from "./Reducers/albumSlice";

const store = configureStore({
    reducer: {
        playlist: playlistReducer,
        home: homeReducer,
        search: searchReducer,
        artist: artistReducer,
        album: albumReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;