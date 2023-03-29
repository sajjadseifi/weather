import React, { FC } from "react";
import CardTitle from "../../../../components/CardTitle/CardTitle";
import { SignleDayType } from "../../SignleDay";
import { IForcast } from "./forcast.interface";
import styles from './Forcast.module.css'
import ForcastItem from "./ForcastItem";

interface ForcastProps {
    flag : SignleDayType
    forcasts:IForcast[]
}

const Forcast : FC<ForcastProps> = (props) => { 
    const forcatsJsx = props.forcasts.map(ForcastItem)

    return <CardTitle title={`${props.flag}'s forcast`}>
        <ul className={styles.ForcastGrid}>{forcatsJsx}</ul>
    </CardTitle>
}

export default Forcast