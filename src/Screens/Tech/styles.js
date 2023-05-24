import { colors } from "../../Theme/colors";

export const styles = {
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    cardGroup: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "40px",
        width: "80%",
        maxWidth: "800px",
        opacity: 1,
        transition: "opacity 0.3s ease",
    },
    cardContainer: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        margin: "10px",
    },
    titleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        width: "100%",
        height: "80px",
        color: "white",
        fontSize: "32px",
        fontWeight: "bold",
        padding: "0 20px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        position: "relative",
        opacity: 1,
        transition: "opacity 0.3s ease",
    },
    titleIcon: {
        marginRight: "10px",
    },
    };
