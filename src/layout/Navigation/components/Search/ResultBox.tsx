import React, { FC } from "react";
import styles from './ResultBox.module.css'
import {IoMdCloseCircle} from 'react-icons/io'
interface SearchItem {
    city:string;
    country:string;
}

interface ResultBoxProps {
    items:SearchItem[]
    setShow:(flag:boolean)=>void
}

const ResultBox : FC<ResultBoxProps> = (props) => {
    return (
        <div className={styles.ResultBox}>
            <div className={styles.Holder}>
                <div className={styles.CloseBtn}>
                    <IoMdCloseCircle color="red" onClick={()=>props.setShow(false)}/>
                </div>
                <ul className={styles.Grid}>
                    {props.items.map(({city,country})=><li 
                    
                    onClick={()=> props.setShow(false)}
                    className={styles.Item}>
                        <span>{country}</span>
                        <span>,</span>
                        <span>{city}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default ResultBox;