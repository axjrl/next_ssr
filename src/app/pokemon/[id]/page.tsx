import {Pokemon} from "../../../../types/Pokemon";
import Image from "next/image"
import PokemonAvatar from "../../../../components/PokemonAvatar/PokemonAvatar";
import styles from "./PokemonPage.module.scss";
import {capitalizeFirstLetter} from "../../../../utils/utils";
async function getData(id: string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return res.json()
}

const PokemonPage = async ({params}: { params: { id: string } }) => {
    const pokemon = await getData(params.id)
    return (
        <div className={styles.page}>
            <p className={styles.name}>{pokemon.name.toUpperCase()}</p>

            <div className={styles.info}>
                <PokemonAvatar pokemon={pokemon}/>
                <div className={styles.stats}>
                    {pokemon.stats.map((stat: any) => {
                        return <div key={stat.name} className={styles.stat}>
                            <p className={styles.statName}>{capitalizeFirstLetter(stat.stat.name)}:</p>
                            <p className={styles.value}>{stat.base_stat}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonPage;