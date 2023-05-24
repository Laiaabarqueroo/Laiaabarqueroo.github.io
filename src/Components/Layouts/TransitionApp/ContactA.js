import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-ContactMe.png";
import backgroundImage2 from "../../../Assets/App-ContactMe1.png";
import TransitionApp from "./TransitionApp";

const ContactA = () => {

    return (
        <div>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/FormContact"
            />
        </div>
    );
};

export default ContactA;
