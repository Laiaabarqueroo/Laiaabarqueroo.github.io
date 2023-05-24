import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import contact from "../../../Assets/Contact.png";
import {styles} from "./styles";
const Contact = () => {

    const links = [
        {
            route: '/contact',
            icon: contact,
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

export default Contact;