import React, { useEffect } from "react";
import backgroundImage1 from "../../../Assets/App-Projects.png";
import backgroundImage2 from "../../../Assets/App-Projects1.png";
import TransitionApp from "./TransitionApp";

const ContactA = () => {

    return (
        <div>
            <h1>Second Component</h1>
            <TransitionApp
                backgroundImage1={backgroundImage1}
                backgroundImage2={backgroundImage2}
                redirectPath="/Projects"
            />
        </div>
    );
};

export default ContactA;
