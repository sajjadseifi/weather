import React, { FC } from "react";
import styles from './Card.module.css'
import { CardType } from "./card-type";

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    cardType:CardType
    style?: any
    children? : any
}

const Card : FC<CardProps> = (props) => { 
    const classType = styles[props.cardType]
    const cardClass = [styles.Card,classType,props.className].join(' ')
    return (
        <div className={cardClass} style={props.style} {...(props as any)}>
            {props.children}
        </div>
    )
}


export default Card;