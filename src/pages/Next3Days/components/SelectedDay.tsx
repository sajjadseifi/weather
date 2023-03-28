import React, { FC } from "react";
import Card from "../../../components/card/Card";
import { CardType } from "../../../components/card/card-type";
import KeyValueSpan from "../../../components/ui/KeyValueSpan";
import WtheaderIcon from "../../../components/ui/WheatherIcon";
import WtheaderDeg from "../../../components/ui/WtheaderDeg";
import { WheatherBase } from "../../../constants/interfaces/wheather-base.interface";
import { choseWheatherIcon } from "../../../constants/wheather-icon/chose-wheather";
import { DateToPmOrAm } from "../../../core/utils/date";
import styles from './SelectedDay.module.css'

interface SelectedDayProps extends WheatherBase { 
    date:Date;
    pressure:string;
    windNe:string;
    realFeel?:number;
    sunRise?:Date;
    sunSet?:Date;
    humidity:number;
    onClick?: React.MouseEventHandler<HTMLDivElement>

}

const SelectedDay : FC<SelectedDayProps> = (props) => {
    return (
        <Card 
            style={{cursor:'pointer'}} 
            cardType={CardType.SKY} 
            onClick={props.onClick}
        >
            <div className={styles.Head}>
                <span>{props.day}</span>
                <span className={styles.SpaceHead}></span>
                <span>{DateToPmOrAm(props.date)}</span>
            </div>
            <div className={styles.Content}>
                <div  className={styles.TopContent}>
                    <WtheaderDeg
                        className={styles.WDeg}
                        value={props.wheatherDegC}
                    />
                    <WtheaderIcon 
                        size={80} 
                        src={choseWheatherIcon(props.wheatherStatus,{deg:props.wheatherDegC})} 
                    />
                </div>
                <table>
                    <tr>
                        <td>{props.realFeel && <KeyValueSpan keyS="Real Feel" valueS={props.realFeel} />}</td>
                        <td><KeyValueSpan keyS="Wind N-E" valueS={props.windNe} /></td>
                    </tr>
                    <tr>
                        <td><KeyValueSpan keyS="Pressure" valueS={props.pressure} /></td>
                        <td><KeyValueSpan keyS="Handity" valueS={props.humidity} /></td>
                        
                    </tr>
                    <tr>
                        <td><KeyValueSpan keyS="SunRise" valueS={DateToPmOrAm(props.sunRise!)} /></td>
                        <td><KeyValueSpan keyS="SunSet" valueS={DateToPmOrAm(props.sunSet!)} /></td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}

export default SelectedDay;