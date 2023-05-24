import React from "react";
import { Progress } from '@chakra-ui/react'
import {styles} from "./styles";
import {useEffect} from "react";
const Loader = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = "/Home";
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={styles.mainContainer}>
            <div style={styles.SecondaryContainer}>
                <p style={{color:"white"}}>Loading...</p>
                <Progress value={84} colorScheme='pink' size='lg' isIndeterminate style={styles.progressContainer}/>
            </div>
        </div>

    )
}

export default Loader;