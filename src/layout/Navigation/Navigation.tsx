import React, { FC } from "react";
import Search from "./components/Search/Search";
import styles from './Navigation.module.css';

interface NavigationProps {

}

const Navigation : FC<NavigationProps> = (props) =>{
    return (
        <header className={styles.NavigationHeader}>
            <nav className={styles.Navigation}>
                <ul className={styles.Container}>
                    <li>Location</li>
                    <li><Search/></li>
                    <li>Theme Swiching</li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation