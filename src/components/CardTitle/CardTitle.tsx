import React, { FC } from "react"
import Card from "../card/Card"
import { CardType } from "../card/card-type"
import Title from "../title/Title"
import styles from './CardTitle.module.css'

interface CardTitleProps {
    title:string | any
    children?:any   
}

const CardTitle : FC<CardTitleProps> = (props) => {
    const isStr = typeof props.title === 'string'
    return (
        <Card cardType={CardType.DARK} >
            <div className={styles.CardContainer}>
            {
            isStr ? 
                <Title className={styles.CardTitle}>{props.title}</Title>
                :
                props.title
            }
            <section className={styles.Content}>
            {props.children}
            </section>
            </div>
        </Card>
    )
} 

export default CardTitle;