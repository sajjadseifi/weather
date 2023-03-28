import React, { FC } from "react";
import styles from './CardGrid.module.css'

import { IChildProps } from "../../constants/interfaces/Children.interface";


const CardGrid : FC<IChildProps> = ({children}) => { 
    let list = []
    if(children instanceof Array)
    {
        list = [...children]
    }
    else
    {
        list = [children]
    } 
    return <div className={styles.CardGrid}>
        <ul className={styles.List}>
            {list.map((ch)=><li className={styles.ListItem}>{ch}</li>)}
        </ul>
    </div>
}
export default CardGrid;