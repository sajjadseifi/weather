import React, { FC } from "react";
import styles from './WtheaderDeg.module.css'


interface WtheaderDegProps { 
    value:number
    className?:string
    style?:object
}

const WtheaderDeg : FC<WtheaderDegProps> = (props) => {
    return (
        <div className={[styles.WtheaderDeg,props.className].join(' ')}
        style={props.style?props.style:{}}
        >
            <span>{props.value}</span>
        </div>
    )
}

export default WtheaderDeg;