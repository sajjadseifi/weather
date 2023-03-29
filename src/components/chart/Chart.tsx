import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from './Chart.module.css'
import { data } from "./d";

ChartJS.register(...registerables);

const Chart = () => {
    return (
        <div className={styles.ChartWrapper}>
            <Bar 
                className={styles.Chart}
                data={data}
                options={{
                    scales:{
                        y: {
                            max : 100,
                            reverse:true,
                            type:'category',
                            labels:['','Heavy','Sunny','Rainy']
                        }
                    }
                }}
            />
        </div>
    )
}

export default Chart;