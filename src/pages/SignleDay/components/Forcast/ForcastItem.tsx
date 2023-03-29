import React, { FC } from "react";
import WtheaderDeg from "../../../../components/ui/WtheaderDeg";
import { DateToPmOrAm } from "../../../../core/utils/date";
import { IForcast } from "./forcast.interface";
import styles from './ForcastItem.module.css'
import WheatherIcon from '../../../../components/ui/WheatherIcon'
import { choseWheatherIcon } from "../../../../constants/wheather-icon/chose-wheather";

const ForcastItem :FC<IForcast> = (props) => {
    return (
        <li className={styles.ForcastItem}>
            <div className={styles.PM}>{DateToPmOrAm(props.time)}</div>
            <div className={styles.IconWraper}>
            <WheatherIcon size={60} src={choseWheatherIcon(props.wheatherStatus,{})} />
            </div>
            <WtheaderDeg value={props.wheatherDegC} />
        </li>
    )
}

export default ForcastItem 
