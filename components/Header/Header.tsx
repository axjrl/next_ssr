import React from 'react';
import styles from './Header.module.scss'
import ActiveLink from "../ActiveLink/ActiveLink";
import Provider from "../../store/provider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
const Header = () => {
    const liked = useSelector((state : RootState) =>state.favorites.liked)
    console.log(liked)
    return (
        <header className={styles.header}>
            <nav>
                <ActiveLink className={styles.navLink} href={"/pokemon"} activeClassName={styles.active}>POKEMONS</ActiveLink>
                <ActiveLink className={styles.navLink} href={"/"} activeClassName={styles.active}>HOME</ActiveLink>
                <ActiveLink className={styles.navLink} href={"/favorites"} activeClassName={styles.active}>FAVORITES</ActiveLink>
            </nav>
            <p>{liked.length}</p>
        </header>
    );
};

export default Header;