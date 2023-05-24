import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import CardFrontEnd from "../../Components/Layouts/Cards/CardFront-end/CardFront-end";
import { styles } from "./styles";
import CardBackEnd from "../../Components/Layouts/Cards/CardBack-end/CardBackEnd";
import HomeI from "../../Components/Layouts/HomeI/HomeI";
import OthersCards from "../../Components/Layouts/Cards/OthersCards/OthersCards";

const Tech = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const groups = [
        {
            title: "FRONT-END",
            content: <CardFrontEnd />,
        },
        {
            title: "BACK-END",
            content: <CardBackEnd />,
        },
        {
            title: "OTHERS",
            content: <OthersCards />,
        },
    ];

    const transitions = useTransition(activeIndex, {
        key: activeIndex,
        from: { transform: "translateY(100%)", opacity: 0 },
        enter: { transform: "translateY(0%)", opacity: 1 },
        leave: { transform: "translateY(100%)", opacity: 0 },
        config: { duration: 500 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % groups.length);
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <HomeI>
            <div style={styles.mainContainer}>
                {transitions((style, index) => (
                    <animated.div
                        key={index}
                        style={{ ...styles.groupContainer, ...style }}
                    >
                        <div style={styles.titleContainer}>
                            <h1>{groups[index].title}</h1>
                        </div>
                        <div style={styles.contentContainer}>
                            {groups[index].content}
                        </div>
                    </animated.div>
                ))}
            </div>
        </HomeI>
    );
};

export default Tech;
