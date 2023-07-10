import React from "react";
import PokemonCard from "../../../components/PokemonCard/PokemonCard";
import {Pokemon} from "../../../types/Pokemon";
import styles from "./pokemon.module.scss"
import {openGraphImageDefault} from "../../../utils/shared-meta";

export const metadata = {
    title: "Pokemon list",
    openGraph: {
        ...openGraphImageDefault,
        title: "Pokemon list",
        description: "List of pokemons"
    }
}
async function getData() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    const pokemons = Promise.all(data.results.map(async (pokemon: Pokemon) =>{
        const result= await fetch(pokemon.url)
        return await result.json()
    }))

    return await pokemons
    // return res.json()
}

const Pokemons = async () => {
    const pokemons : Pokemon[] = await getData();
    return (
        <div className={styles.pokemons}>

            <p>Here is the list of pokemons:</p>
            <div className={styles.list}>
                {pokemons.map((pokemon) =>{
                    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                })}
            </div>

        </div>
    );
};

export default Pokemons;