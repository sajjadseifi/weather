import React, { FC } from "react";
import styles from './Input.module.css'

interface InputProps  { 
    icon?:any
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const Input : FC<InputProps> = (props) => {
    return (
        <div className={styles.Input}>
            <div className={styles.Icon}>{props.icon}</div>
            <div className={styles.TextField}>
                <input type="text" {...props.input} />
            </div>
        </div>
    )
}

export default Input;