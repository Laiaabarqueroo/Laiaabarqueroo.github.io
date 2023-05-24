import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../../Atoms/Button/Button";
import power from "../../../Assets/icons/power.png";
import { styles } from "./styles";

const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const PowerButton = () => {
    const links = [
        {
            route: "/loader",
            icon: power,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const springProps = useSpring({
        scale: activeIndex === 0 ? 0.9 : 1,
        config: { mass: 1, tension: 300, friction: 10 },
    });

    useInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 2000);

    useEffect(() => {
        if (activeIndex === links.length - 1) {
            const timer = setTimeout(() => {
                setActiveIndex(0);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [activeIndex, links.length]);

    return (
        <div style={styles.mainContainer}>
            {links.map((item, index) => (
                <animated.div key={index} style={index === activeIndex ? springProps : {}}>
                    <Button route={item.route} icon={item.icon} style={styles.powerButton} />
                </animated.div>
            ))}
        </div>
    );
};

export default PowerButton;
