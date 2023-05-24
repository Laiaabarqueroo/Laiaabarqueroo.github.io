import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import background from "../../Assets/BackgroundHome.png";

const Header = () => {
    return (
        <div>
            <div style={styles.headerMainContainer}>
                <div style={styles.headerSecondaryContainer}>
                    <div style={styles.headerText}>
                        <p>
                            LAIA
                            <br />
                            BARQUERO
                            <br />
                            BORQUE
                        </p>
                    </div>
                    <img style={styles.headerImg} src={background} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
