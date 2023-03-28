import React from "react";
import Card from "../components/card/Card";
import { CardType } from "../components/card/card-type";
import CardGrid from "../components/card/CardGrid";

const Next3Days = ()=>{
    return (
        <div>
            <CardGrid>
                <Card cardType={CardType.SKY}>1</Card>
                <Card cardType={CardType.DARK}>2</Card>
                <Card cardType={CardType.DARK}>3</Card>
                <Card cardType={CardType.DARK}>3</Card>
            </CardGrid>
        </div>
    )
}

export default Next3Days;