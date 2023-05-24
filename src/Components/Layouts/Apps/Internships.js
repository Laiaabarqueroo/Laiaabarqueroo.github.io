import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import intership from "../../../Assets/Interships.png";
import {styles} from "./styles";
const Interships = () => {

    const links = [
        {
            route: '/interships',
            icon: intership,
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

export default Interships;