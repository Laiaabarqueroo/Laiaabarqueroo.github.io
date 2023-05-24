import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-Travels.png";
import backgroundImage2 from "../../../Assets/App-Travels1.png";
import TransitionApp from "./TransitionApp";

const TravelsA = () => {

    return (
        <div>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/MyTravels"
            />
        </div>
    );
};

export default TravelsA;
