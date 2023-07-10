import { createSlice } from "@reduxjs/toolkit";
import {Pokemon} from "../types/Pokemon";

export interface AuthState {
    liked: Array<Pokemon>;
}


const initialState: AuthState = {
    liked: [],
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites(state, action) {
            state.liked = [...state.liked, action.payload];
        },
        deleteFromFavorites(state, action : {payload: Pokemon}) {
            state.liked = state.liked.filter((pokemon) => pokemon.id != action.payload.id);
        },
    },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;