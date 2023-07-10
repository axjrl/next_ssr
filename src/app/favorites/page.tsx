"use client"
import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import PokemonCard from "../../../components/PokemonCard/PokemonCard";
import Head from "next/head";

const Favorites = () => {
    const liked = useSelector((state : RootState) =>state.favorites.liked)
    return (
        <div>
            <p>Here is your favorite Pokemons</p>
            <div>
                {liked.map((pokemon=>{
                    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                }))}
            </div>
        </div>
    );
};

export default Favorites;