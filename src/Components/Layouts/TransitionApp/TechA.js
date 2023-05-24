import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-Tech.png";
import backgroundImage2 from "../../../Assets/App-Tech1.png";
import TransitionApp from "./TransitionApp";

const TechA = () => {

    return (
        <div>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/Technology"
            />
        </div>
    );
};

export default TechA;