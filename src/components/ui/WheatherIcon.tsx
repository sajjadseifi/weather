import React, { FC } from "react";
import { wheatherIcon } from "../../constants/wheather-icon/weather-icon";
import styles from './WtheaderDeg.module.css'


interface WtheaderIconProps { 
    src:any;
    size?:number
}

const WtheaderIcon : FC<WtheaderIconProps> = (props) => {
    return (
        <div className={styles.WtheaderIcon}>
            <img 
                src={props.src} 
                className={styles.WtheaderDeg}
                {...(props.size ? {
                    width:props.size,
                    height:props.size,
                }:{})}
            />
        </div>
    )
}

export default WtheaderIcon;