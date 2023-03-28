import React from "react";
import styles from './ThemeChanger.module.css'

const ThemeChanger = () => {
    return (
        <div className={styles.ThemeChanger}>
            <div className={styles.Swich}>
                <div className={styles.LightMode}>L</div>
                <div className={styles.DarkMode}>D</div>
            </div>
        </div>
    )
}

export default ThemeChanger;