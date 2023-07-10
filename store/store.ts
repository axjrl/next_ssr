import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import favorites from "./favorites";

export type RootState = {
    favorites: ReturnType<typeof favorites>
}
const store = configureStore({
        reducer: {
            favorites
        },
        devTools: true,
    });


export default store