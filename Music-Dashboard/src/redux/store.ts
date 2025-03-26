import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice";
import musicReducer from "./musicSlice";

const store = configureStore({
    reducer: {
        playlist: playlistReducer,
        music: musicReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;