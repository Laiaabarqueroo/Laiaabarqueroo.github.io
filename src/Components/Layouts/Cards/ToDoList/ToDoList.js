import React from "react";
import { styles } from "./styles";
import HardSkills from "../../../Atoms/ToDoList/HardSkills";
import SoftSkills from "../../../Atoms/ToDoList/SoftSkills";

const ToDoList = () => {
return (
    <div style={styles.mainContainer}>
        <h1 style={styles.titleContainer}>SKILLS</h1>
        <div style={styles.cardsContainer}>
            <HardSkills></HardSkills>
            <SoftSkills></SoftSkills>
        </div>
    </div>
);
};
export default ToDoList;