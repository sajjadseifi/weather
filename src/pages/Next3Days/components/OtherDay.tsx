import React, { FC } from "react";
import Card from "../../../components/card/Card";
import { CardType } from "../../../components/card/card-type";
import WtheaderIcon from "../../../components/ui/WheatherIcon";
import WtheaderDeg from "../../../components/ui/WtheaderDeg";
import { WheatherBase } from "../../../constants/interfaces/wheather-base.interface";
import { choseWheatherIcon } from "../../../constants/wheather-icon/chose-wheather";
import styles from './OtherDat.module.css'


interface OtherDayProps extends WheatherBase { 
    onClick?: React.MouseEventHandler<HTMLDivElement>
}


const OtherDay : FC<OtherDayProps> = (props) => {
    const displayDay =  props.day.toString().substring(0,3)
    return (
        <Card 
            style={{cursor:'pointer'}} 
            cardType={CardType.DARK} 
            onClick={props.onClick}        
        >
            <div className={styles.Container}>
                <div className={styles.DayName}>
                    <span>{displayDay}</span>
                </div>
                <div className={styles.IconContainer}>
                    <WtheaderIcon 
                        size={50}
                        src={choseWheatherIcon(props.wheatherStatus,{deg:props.wheatherDegC})} 
                    />
                </div>
                <WtheaderDeg value={props.wheatherDegC}/>
            </div>
        </Card>
    )
}

export default OtherDay;