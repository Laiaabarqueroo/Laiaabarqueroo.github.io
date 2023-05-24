import { colors } from "../../../../Theme/colors";

export const styles = {
    mainContainer: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
    },
    titleContainer: {
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
    cardsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",

        "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "stretch",
        },
    },
};
