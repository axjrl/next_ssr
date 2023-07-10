"use client"
import React from 'react';
import styles from "./PokemonCard.module.scss";
import Provider from "../../store/provider";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites, deleteFromFavorites} from "../../store/favorites";
import {Pokemon} from "../../types/Pokemon";
import {RootState} from "../../store/store";

const Add = ({pokemon}: {pokemon: Pokemon}) => {
    const dispatch = useDispatch()
    const liked = useSelector((state : RootState) =>state.favorites.liked)
    const init = liked.some((p: Pokemon) => p.id === pokemon.id)
    // console.log({pokemon: pokemon.name, init: init, liked: liked})
    function handler (e: any) {
        e.preventDefault();
        dispatch(init ? deleteFromFavorites(pokemon) :addToFavorites(pokemon))
    }
    return (
        <button onClick={(e)=>handler(e)} className={styles.add}>{init ? "DELETE": "ADD"}</button>
   );
};

export default Add;