import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-Interships.png";
import backgroundImage2 from "../../../Assets/App-Interships1.png";
import TransitionApp from "./TransitionApp";

const IntershipsA = () => {

    return (
        <div>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/IntershipsB"
            />
        </div>
    );
};

export default IntershipsA;
