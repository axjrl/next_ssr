import React from 'react';
import Image from "next/image";
import {Pokemon} from "../../types/Pokemon";
import styles from "./PokemonCard.module.scss"
import Link from "next/link";
import {useDispatch} from "react-redux";
import Add from "./add";
const PokemonCard = ({pokemon}: {pokemon: Pokemon}) => {
    return (
        <Link as={`/pokemon/${pokemon.id}`} href={`/pokemon/${pokemon.id}`} data-testid="pokemon-card" className={styles.card}>
           <Image
               width={120}
               height={120}
               src={pokemon.sprites.front_default}
               alt={"Pokemon card"}
                priority={true}
           />
            <div className={styles.info}>
                <p className={styles.name}>{pokemon.name.toUpperCase()}</p>
                <Add pokemon={pokemon}/>
            </div>
            <div className={styles.heart}>
                <Image src={"/heart.png"} alt={"heart"} width={36} height={36}/>
                <p className={styles.hp}>{pokemon.stats[0].base_stat}</p>
            </div>
        </Link>
    );
};
export default PokemonCard;
