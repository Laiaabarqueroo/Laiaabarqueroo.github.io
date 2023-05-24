import React from "react";
import {colors} from "../../../../Theme/colors";
export const styles = {
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: 'white',
    },
    titleContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        width: "80%",
        height: "50px",
        color: "white",
        fontSize: "32px",
        fontWeight: "bold",
        padding: "0 20px",
        borderRadius: "10px",

        "@media (max-width: 768px)": {
            width: "90%",
            fontSize: "28px",
        },
        "@media (max-width: 480px)": {
            width: "100%",
            fontSize: "24px",
            padding: "0 10px",
        },
    },
    secondaryContainer: {
        display: "flex",
    }
}