import React, { FC } from "react";
import styles from './Button.module.css'


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title ?: string
}

const Button : FC<ButtonProps> = (props) => {
    const className = [styles.Button,props.className].join(' ')
    return <button style={{
        backgroundColor : props.color,
        color:'white'
    }} {...props} className={className}>
        {props.title || props.children}
    </button>    
}

export default Button;