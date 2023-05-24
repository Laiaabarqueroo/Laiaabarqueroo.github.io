import React, { useState } from 'react';
import { styles } from "../HomeI/styles";
import { animated, useSpring } from 'react-spring';
import Home from "../../../Assets/icons/home.png";
const HomeI = ({ children }) => {
    const [animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        setAnimate(true);
        setTimeout(() => {
            window.location.href = '/Home';
        }, 1000);
    };

    const animationProps = useSpring({
        height:'100%',
        width:'100%',
        transform: animate ? 'translateY(calc(-100% - 20px))' : 'translateY(0%)',
        opacity: animate ? 0 : 1,
        config: { duration: 1000 },
    });

    return (
        <div style={styles.buttonContainer}>
            <animated.div style={animationProps}>
                <button style={styles.buttons} onClick={handleButtonClick}>
                    <img src={Home} alt="Descripción de la imagen" />
                </button>
                {children}
            </animated.div>
        </div>
    );
};

export default HomeI;
