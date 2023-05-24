import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import BossCardFront from "../BossCardFront/BossCard-Front";
import BossCardBack from "../BossCardBack/BossCardBack";
const BossCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div style={styles.mainContainer}>
            <h1 style={styles.titleContainer}>OUR INCREDIBLE TEAM</h1>
            <div style={styles.secondaryContainer}>
                <BossCardFront></BossCardFront>
            </div>
        </div>
    );
};

export default BossCards;