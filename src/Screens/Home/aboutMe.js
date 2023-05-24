import React from "react";
import {styles} from "./styles";
import photoL from "../../Assets/Photo Laia.png"
const AboutMe = () => {
    return (
        <div style={styles.aboutmeMainContainer}>
            <img style={{marginRight:'100px'}} src={photoL}/>
            <div style={styles.aboutmeSecondaryContainer}>
                <p style={styles.aboutmeText1}>ABOUT ME</p>
                <p style={styles.aboutmeText2}>As a front-end developer, I have always had a passion for creating visually stunning and user-friendly websites. My journey into the world of web development began with my interest in HTML and CSS. I was fascinated by how these two technologies could be used to create beautiful and functional websites.
                    As my knowledge of web development grew, I began learning different programming languages, including JavaScript, Java, and PHP. These languages allowed me to create more dynamic and interactive websites.
                    My passion for front-end development led me to learn and work with React, one of the most popular and powerful front-end frameworks available today.
                    I am constantly exploring new tools and techniques to improve my skills and stay ahead of the curve.</p>
            </div>
        </div>
    )
}

export default AboutMe;