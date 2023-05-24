import React from "react";
import {styles} from "./styles";

const Apps = ({icon}) => {
    return (
        <div>
            <img style={styles.imgStyle} src={icon} alt={''}/>
        </div>
    )
}

export default Apps;