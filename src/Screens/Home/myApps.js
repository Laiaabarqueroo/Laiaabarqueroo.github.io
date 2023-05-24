import React from "react";
import {styles} from "./styles";
import Skills from "../../Components/Layouts/Apps/Skills";
import Tech from "../../Components/Layouts/Apps/Tech";
import Interships from "../../Components/Layouts/Apps/Internships";
import Contact from "../../Components/Layouts/Apps/Contact";
import Projects from "../../Components/Layouts/Apps/Projects";
import Travels from "../../Components/Layouts/Apps/Travels";

const MyApps = () => {
    return (
        <div style={styles.myAppsMainContainer}>
            <div style={styles.myAppsSecondaryContainer}>
                <div style={styles.skillsContainer}>
                    <p style={styles.skillsText}>EXPLORE MY WORLD</p>
                </div>
                <div style={styles.programmingMainContainer}>
                    <div style={styles.myAppsT}>
                        <Tech></Tech>
                        <p style={styles.TextContainer}>Tech</p>
                    </div>
                    <div style={styles.myAppsS}>
                        <Skills></Skills>
                         <p style={styles.TextContainer}>Skills</p>
                    </div>
                    <div style={styles.myAppsP}>
                        <Projects></Projects>
                         <p style={styles.TextContainer}>Projects</p>
                    </div>
                </div>
                <div style={styles.programmingSecondaryContainer}>
                    <div style={styles.myAppsTr}>
                        <Travels></Travels>
                         <p style={styles.TextContainer}>Travels</p>
                    </div>
                    <div style={styles.myAppsI}>
                        <Interships></Interships>
                         <p style={styles.TextContainer}>Interships</p>
                    </div>
                    <div style={styles.myAppsI}>
                        <Contact></Contact>
                         <p style={styles.TextContainer}>Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default MyApps;