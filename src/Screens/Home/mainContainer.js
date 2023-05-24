import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Skills from "../../Components/Layouts/Apps/Skills";
import Tech from "../../Components/Layouts/Apps/Tech";
import Interships from "../../Components/Layouts/Apps/Internships";
import Contact from "../../Components/Layouts/Apps/Contact";
import Projects from "../../Components/Layouts/Apps/Projects";
import Travels from "../../Components/Layouts/Apps/Travels";
import AboutMe from "./aboutMe";

    const MainContainer = () => {
        const [appStyles, setAppStyles] = useState(styles);
        const [positionIndex, setPositionIndex] = useState(0);
        const [animationCount, setAnimationCount] = useState(0);
        const [isMouseOver, setIsMouseOver] = useState(false);


        useEffect(() => {
            const interval = setInterval(moveComponents, 5000);
            return () => clearInterval(interval);
        }, []);

        function moveComponents() {
            if (isMouseOver) return
            const components = [
                "appsTech",
                "appsSkills",
                "appsProjects",
                "appsTravels",
                "appsInterships",
                "appsContact"
            ];

            const updatedStyles = { ...styles };

            components.forEach((component, index) => {
                const newPosition = positionIndex === 0 ? (index + 1) * -180 : (index + 1) * -150;
                updatedStyles[component] = {
                    ...updatedStyles[component],
                    transition: "transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                    transform: `translateX(${newPosition}px) rotateY(360deg)`
                };
            });

            setAppStyles(updatedStyles);
            setPositionIndex(positionIndex === 0 ? 1 : 0);
            setAnimationCount((prevCount) => prevCount + 1);
        }

        useEffect(() => {
            if (animationCount === 2) {
                setTimeout(() => {
                    const originalStyles = { ...styles };
                    const components = [
                        "appsTech",
                        "appsSkills",
                        "appsProjects",
                        "appsTravels",
                        "appsInterships",
                        "appsContact"
                    ];

                    components.forEach((component) => {
                        originalStyles[component] = {
                            ...originalStyles[component],
                            transition: "transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                            transform: "translateX(0)"
                        };
                    });

                    setAppStyles(originalStyles);
                    setPositionIndex(0);
                    setAnimationCount(0);
                }, 10000);
            }
        }, [animationCount]);

        return (
            //TODO Que cunado pases el mouse se pare
        <div  onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
        >
            <div style={styles.mainContainer}>
                <div style={styles.mainSecondaryContainer}>
                    <p style={styles.textSecondaryContainer}>Skills</p>
                    <div style={styles.myAppsMainContainer}>
                        <div style={appStyles.appsTech}>
                            <Tech />
                        </div>
                        <div style={appStyles.appsSkills}>
                            <Skills />
                        </div>
                        <div style={appStyles.appsProjects}>
                            <Projects />
                        </div>
                        <div style={appStyles.appsTravels}>
                            <Travels />
                        </div>
                        <div style={appStyles.appsInterships}>
                            <Interships />
                        </div>
                        <div style={appStyles.appsContact}>
                            <Contact />
                        </div>
                    </div>
                </div>
                <AboutMe />
            </div>
        </div>
    );
};

export default MainContainer;
