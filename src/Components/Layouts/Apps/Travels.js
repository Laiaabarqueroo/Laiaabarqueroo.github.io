import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import travels from "../../../Assets/Travels.png";
import {styles} from "./styles";
const Travels = () => {

    const links = [
        {
            route: '/travels',
            icon: travels,
        }
    ]

    return (
        <div style={styles.mainContainer}>

            {links.map(item => {
                return <Apps route={item.route} icon={item.icon}/>
            })}
        </div>
    )
}

export default Travels;