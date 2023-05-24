import React from "react";
import {styles} from "./styles";

const Apps = ({icon, route}) => {
    return (
        <a href={route} style={styles.mainContainer}>
            <img style={styles.imgStyle} src={icon} alt={''}/>
        </a>
    )
}

export default Apps;