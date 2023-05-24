import React, { useState } from "react";
import { styles } from "./styles";
import BossCard from "../../../Atoms/BossCard/BossCard";
import Card1B from "../../../../Assets/Joan_b&w.png";
import Card2B from "../../../../Assets/manel_b&w.png";
import Card3B from "../../../../Assets/joel_b&w.jpeg";
import Card1 from "../../../../Assets/Joan.png";
import Card2 from "../../../../Assets/Manel.png";
import Card3 from "../../../../Assets/avatar_joel.png";

const BossCardFront = ({ onCardClick }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const links = [
        {
            text: "Joan",
            subtitle: "CTO Co-founder",
            icon: Card1B,
            colorIcon: Card1,
            opinion:
                "Crec que la Laia demostra un grau alt de passió i dedicació per la programació. He treballat amb ella PHP i React en projectes d’alta complexitat i se n’ha sortit sense problemes. Sempre s’ha mostrat disposada a aprendre i a créixer com a professional de la tecnologia.",
        },
        {
            text: "Manel",
            subtitle: "Co-founder",
            icon: Card2B,
            colorIcon: Card2,
            opinion:
                "Laia ha sabido adaptarse a todos los retos que le hemos presentado desde un enfoque muy profesional. Destaca especialmente su actitud frente a los problemas y al empeño frente a tecnologías con las que no ha trabajado antes.",
        },
        {
            text: "Joel",
            subtitle: "CEO Co-founder",
            icon: Card3B,
            colorIcon: Card3,
            opinion:
                "En este tiempo que llevo trabajando con Laia, puedo decir que ha demostrado ser una gran desarrolladora y sobre todo tener mucha curiosidad e interés por seguir aprendiendo cada día! Ha trabajado en múltiples proyectos con varias tecnologías desde PHP hasta React, y se ha sabido desenvolver sin problemas en todos ellos. Sin duda una gran profesional!",
        },
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleCardClick = (index) => {
        debugger;
        const selectedCard = links[index];
        setSelectedCard(selectedCard);
        onCardClick(selectedCard, index);
    };

    const handleCardLeave = () => {
        setSelectedCard(null);
    };


    return (
        <div style={styles.mainContainer}>
            <div style={styles.cardsContainer}>
                {links.map((item, index) => (
                    <div
                        key={item.text}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <BossCard
                            text={item.text}
                            subtitle={item.subtitle}
                            icon={index === hoveredIndex ? item.colorIcon : item.icon}
                            onClick={handleCardClick}
                            index={index}
                        />
                    </div>
                ))}
            </div>
            {selectedCard && (
                <div style={styles.selectedCardContainer}>
                    <div style={styles.selectedCardImageContainer}>
                        <img
                            src={links.icon}
                            alt={links.text}
                            style={styles.selectedCardImage}
                        />
                    </div>
                    <div style={styles.selectedCardOpinionContainer}>
                        <p style={styles.selectedCardOpinion}>{links.opinion}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default BossCardFront;




