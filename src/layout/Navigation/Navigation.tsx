import React, { FC } from "react";
import Location from "./components/Location/Location";
import Search from "./components/Search/Search";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import styles from './Navigation.module.css';

interface NavigationProps {

}

const Navigation : FC<NavigationProps> = (props) =>{
    return (
        <header className={styles.NavigationHeader}>
            <nav className={styles.Navigation}>
                <ul className={styles.Container}>
                    <li><Location/></li>
                    <li><Search/></li>
                    <li>
                        {/* <ThemeChanger/> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation