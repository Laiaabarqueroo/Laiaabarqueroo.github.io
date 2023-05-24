import React from "react";
import { useToast } from '@chakra-ui/react';
import PowerButton from "../../Components/Layouts/Apps/PowerButton";
import {styles} from "./styles";

const Open = () => {
        const toast = useToast();
    return (
        <div style={styles.mainContainer}>
            <p style={styles.text}>Click on the power button to start your experience</p>
            <PowerButton></PowerButton>
            <div>
            </div>
        </div>
    )
}

export default Open;