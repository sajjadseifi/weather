import React, { FC } from "react";
import styles from './KeyValueSpan.module.css'

interface KeyValueSpanProps { 
    keyS: string
    valueS: any
}

const KeyValueSpan : FC<KeyValueSpanProps> = (props) => {
    return (
        <span className={styles.KeyValueSpan}>
            <span className={styles.KeyS}>{props.keyS} : </span>
            <span className={styles.ValueS}>{props.valueS}</span>
        </span>
    )
}

export default KeyValueSpan;