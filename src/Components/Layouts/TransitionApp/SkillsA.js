import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-Skills.png";
import backgroundImage2 from "../../../Assets/App-Skills1.png";
import TransitionApp from "./TransitionApp";

const SkillsA = () => {

    return (
        <div>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/Habilities"
            />
        </div>
    );
};

export default SkillsA;