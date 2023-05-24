import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import skills from "../../../Assets/Skills.png";
import {styles} from "./styles";


const Skills = () => {

    const links = [
        {
            route: '/skills',
            icon: skills,
        }
    ]



    return (
        <div style={styles.mainContainer}>
                {links.map(item => {
                        return <Apps route={item.route} icon={item.icon}  style={{display:'flex',width:'50px'}}/>
                    })}
        </div>
    )
}

export default Skills;