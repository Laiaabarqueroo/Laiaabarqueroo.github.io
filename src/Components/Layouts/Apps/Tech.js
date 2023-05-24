import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import tech from "../../../Assets/Tech.png";
import {styles} from "./styles";
const Tech = () => {

    const links = [
        {
            route: '/tech',
            icon: tech,
        }
    ]

    return (
        <div style={styles.mainContainer}>

            {links.map(item => {
                return <Apps route={item.route}  icon={item.icon}/>
            })}
        </div>
    )
}

export default Tech;