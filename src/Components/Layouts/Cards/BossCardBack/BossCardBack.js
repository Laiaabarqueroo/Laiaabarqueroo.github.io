/*
import React, { useState } from "react";
import { styles } from "./styles";
import BossCard from "../../../Atoms/BossCard/BossCard";
import Card1 from "../../../../Assets/Joan.png";
import Card2 from "../../../../Assets/Manel.png";
import Card3 from "../../../../Assets/avatar_joel.png";

const BossCardBack = () => {
    const cards = [
        {
            text:
                "Crec que la Laia demostra un grau alt de passió i dedicació per la programació. He treballat amb ella PHP i React en projectes d’alta complexitat i se n’ha sortit sense problemes. Sempre s’ha mostrat disposada a aprendre i a créixer com a professional de la tecnologia.",
            icon: Card1,
        },
        {
            text:
                "Laia ha sabido adaptarse a todos los retos que le hemos presentado desde un enfoque muy profesional. Destaca especialmente su actitud frente a los problemas y al empeño frente a tecnologías con las que no ha trabajado antes.",
            icon: Card2,
        },
        {
            text:
                "En este tiempo que llevo trabajando con Laia, puedo decir que ha demostrado ser una gran desarrolladora y sobre todo tener mucha curiosidad e interés por seguir aprendiendo cada día! Ha trabajado en multiples proyectos con varias tecnologías desde PHP hasta React, y se ha sabido desenvolver sin problemas en todos ellos. Sin duda una gran profesional!",
            icon: Card3,
        },
    ];

    return (
        <div style={styles.mainContainer}>
            {cards.map((item, index) => (
                <div
                    key={item.text}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <BossCard
                        text={item.text}
                        subtitle={item.subtitle}
                        icon={index === hoveredIndex ? item.colorIcon : item.icon}
                        className={hoveredIndex === index ? "open" : ""}
                    />
                </div>
            ))}
        </div>
    );
};

export default BossCardBack;
*/
