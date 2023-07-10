'use client'
import {Pokemon} from "../../types/Pokemon";
import Image from "next/image";
import {useState} from "react";
import {inspect} from "util";
import styles from "./PokemonAvatar.module.scss"

const PokemonAvatar = ({pokemon}:{pokemon: Pokemon}) => {
    const [sideHandler, setSideHandler] = useState(true)
    const side = sideHandler ? "/" : "/back/"
    console.log(side)
    return (
        <div className={styles.avatar}>
            <Image priority={true} className={styles.pokemon} width={200} height={200} alt="poke" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${side}${pokemon.id}.png`}/>
            <button onClick={()=>setSideHandler(!sideHandler)} className={styles.left}><Image width={18} height={18} src={"/arrow.svg"} alt={""}/> </button>
            <button onClick={()=>setSideHandler(!sideHandler)} className={styles.right}><Image width={18} height={18} src={"/arrow.svg"} alt={""}/> </button>
        </div>
    );
};

export default PokemonAvatar;