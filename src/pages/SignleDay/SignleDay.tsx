import React, { FC } from "react";
import qs from 'qs'
import styles from './SingleDay.module.css'
import WtheaderDeg from "../../components/ui/WtheaderDeg";
import { choseWheatherIcon } from "../../constants/wheather-icon/chose-wheather";
import { WheatherStatus } from "../../constants/enum/wheather-status.enum";
import Card from "../../components/card/Card";
import { CardType } from "../../components/card/card-type";
import Forcast from "./components/Forcast/Forcast";
import { forcastData } from "./components/Forcast/forcast-data-dummy";
import CardTitle from "../../components/CardTitle/CardTitle";
import AirCondition from "./components/AirCondition/AirCondition";

export type SignleDayType = 'TODAY' | 'TOMORROW'

interface SignleDayProps {
    flag:SignleDayType
}

const SignleDay : FC<SignleDayProps> = (props) =>{

    return (
        <div className={styles.SignleDay}>
            <div className={styles.Top}>
                <div className={styles.DegAndCityWrapper}>
                    <div className={styles.CityWrapper}>
                        <h2 className={styles.City}>Madrid</h2>
                        <span className={styles.Chance}>Chance of rain : 0%</span>
                    </div>
                    <div className={styles.DegWrapper}>
                        <WtheaderDeg value={50} />
                    </div>
                </div>
                <div className={styles.IconWraper}>
                    <img src={choseWheatherIcon(WheatherStatus.Sunny,{})}/>
                </div>
            </div>
            <div className={styles.Forcast}>
                <Forcast flag={props.flag} forcasts={forcastData} />
                <AirCondition
                changeOfRain={0}
                realFeel={30}
                uv={3}
                wind="0.2 km/h"
                
                />
            </div>
        </div>
    )
}

export default SignleDay;