import React, { FC, useState } from "react";
import styles from './Input.module.css'

interface InputProps  { 
    icon?:any
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    onClick?:(text:string) => any
}

const Input : FC<InputProps> = (props) => {
    const [text,setText] = useState('')

    return (
        <div className={styles.Input}>
            <div 
            
            className={styles.Icon}
            onClick={()=> {
                if (props.onClick){
                    props.onClick(text)
                }
            }}
            >{props.icon}</div>
            <div className={styles.TextField}>
                <input onChange={({target:{value}})=>setText(value)} type="text" {...props.input} />
            </div>
        </div>
    )
}

export default Input;