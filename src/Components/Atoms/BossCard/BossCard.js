import React from "react";
import { styles } from "./styles";

const BossCard = ({ text, subtitle, icon, onClick, index }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div style={styles.card}>
            <img src={icon} alt={text} style={styles.imageContainer} />
            <div style={styles.content}>
                <h2 style={styles.name}>{text}</h2>
                <p style={styles.subtitle}>{subtitle}</p>
                <button onClick={() => onClick(index)}></button>
            </div>
        </div>
    );
};


export default BossCard;
