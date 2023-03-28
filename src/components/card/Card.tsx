import React, { FC } from "react";
import styles from './Card.module.css'
import { CardType } from "./card-type";

interface CardProps {
    style?: any
    children? : any
    cardType:CardType
}

const Card : FC<CardProps> = (props) => { 
    const classType = styles[props.cardType]
    const cardClass = [styles.Card,classType].join(' ')
    console.log(props.cardType,cardClass)
    return (
        <div className={cardClass} style={props.style}>
            {props.children}
        </div>
    )
}


export default Card;