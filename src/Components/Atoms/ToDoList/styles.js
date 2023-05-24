import { colors } from "../../../Theme/colors";

export const styles = {
    mainContainer: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
    },
    taskList: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 0px 10px rgba(0, 0, 0, 0.2)",
        margin: "10px",
        padding: "20px",
        maxWidth: "700px",
        width: "100%",
    },
    ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    li: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "15px",
        color: "black",
        fontSize: "18px",
        border: `1px solid ${colors.primary}`,
        borderLeft: `8px solid ${colors.primary}`,
        borderRadius: "10px",
        backgroundColor: "white",
        width: "100%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
};
