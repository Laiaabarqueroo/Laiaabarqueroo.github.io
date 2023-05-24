import React from "react";
import Apps from "../../Atoms/Apps/Apps";
import projects from "../../../Assets/Projects.png";
import {styles} from "./styles";
const Projects = () => {

    const links = [
        {
            route: '/tech',
            icon: projects,
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

export default Projects;