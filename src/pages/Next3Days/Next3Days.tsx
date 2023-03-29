import React, { useState } from "react";
import CardGrid from "../../components/card/CardGrid";
import Chart from "../../components/chart/Chart";
import OtherDay from "./components/OtherDay";
import SelectedDay from "./components/SelectedDay";
import { next3DayDummyData } from "./dummy-data";
import styles from './Next3Days.module.css'

const Next3Days = ()=> {
    const [selected,setSelected]  = useState(0);

    const onSelectClick = (index:number) => {
        setSelected(prv => {
            if (index < 0) return prv;
            if (index >= next3DayDummyData.length) return prv;

            return index
        })
    }

    return (
        <div className={styles.Next3Days}>
            <div className={styles.Content}>
                <CardGrid>
                    {next3DayDummyData.map((props,index)=> {
                        if (selected == index) {
                            return  <SelectedDay  {...props} />
                        }
                        else {
                            return  <OtherDay onClick={() => onSelectClick(index)} {...props} />   
                        }
                    })}
                </CardGrid>
            </div>
            <div className={styles.Side}>
                <Chart/>
            </div>
        </div>
    )
}

export default Next3Days;