import React, { FC, useState } from "react";
import CardTitle from "../../../../components/CardTitle/CardTitle";
import KeyValueIcon from "../../../../components/ui/KeyValueIcon";
import styles from './AirCondition.module.css'
import { FaWind,FaTemperatureLow } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { IoMdSunny } from 'react-icons/io'

import WtheaderDeg from "../../../../components/ui/WtheaderDeg";
import Title from "../../../../components/title/Title";
import Button from "../../../../components/ui/Button";

interface AirConditionProps {
    realFeel : number
    wind : string
    changeOfRain : number
    uv : number
}

const AirCondition : FC<AirConditionProps> = (props) => {
    const [seeMore,setSeeMore] = useState(false)


    return (
        <div className={styles.AirCondition}>
            <CardTitle title={
                <div className={styles.Header}>
                    <Title>air condition</Title>
                    <div>
                        <Button 
                            title={seeMore ? 'See more':'Close Details'} 
                            color={seeMore ? "cornflowerblue":"crimson"}
                            onClick={()=>setSeeMore(prv=>!prv)}
                         />
                    </div>
                </div>
            }>
                <ul className={styles.AirCondGrid}>
                    <li><KeyValueIcon _key="Real Feel" _value={<WtheaderDeg value={props.realFeel} />} icon={FaTemperatureLow} /></li>
                    <li><KeyValueIcon _key="Wind" _value={props.wind} icon={FaWind} /></li>
                    <li><KeyValueIcon _key="Chance of rain" _value={props.changeOfRain + "%"} icon={MdWaterDrop} /></li>
                    <li><KeyValueIcon _key="UV Index" _value={props.uv} icon={IoMdSunny} /></li>
                </ul>
                {!seeMore && 
                    <ul className={styles.AirCondGrid}>
                        <li><KeyValueIcon _key="Real Feel" _value={<WtheaderDeg value={props.realFeel} />} icon={FaTemperatureLow} /></li>
                        <li><KeyValueIcon _key="Wind" _value={props.wind} icon={FaWind} /></li>
                        <li><KeyValueIcon _key="Chance of rain" _value={props.changeOfRain + "%"} icon={MdWaterDrop} /></li>
                        <li><KeyValueIcon _key="UV Index" _value={props.uv} icon={IoMdSunny} /></li>
                    </ul>
                }

            </CardTitle>
        </div>
    )
}

export default AirCondition;