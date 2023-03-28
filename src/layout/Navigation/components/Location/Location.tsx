import React from "react";
import { HiLocationMarker } from 'react-icons/hi'
import styles from './Location.module.css'

const Location = () => {
    return (
        <div className={styles.Location}>
            <span className={styles.Icon}><HiLocationMarker color="white" /></span>
            <span className={styles.City}>Seattle,</span>
            <span className={styles.Country}>Australia</span>
        </div>
    )
}

export default Location;