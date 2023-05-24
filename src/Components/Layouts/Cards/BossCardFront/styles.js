import {colors} from "../../../../Theme/colors";

export const styles = {
    mainContainer: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },


    secondaryContainer: {
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        flexDirection: "column",
    },

    title: {
        color: "secondary",
        marginBottom: 20,
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        marginTop: 20,
    },
    imgStyle: {
        width: 200,
        height: 200,
        objectFit: "contain",
    },
    selectedCardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
    },
    selectedCardImageContainer: {
        display: "flex",
        justifyContent: "flex-start",
    },
    selectedCardImage: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    selectedCardOpinionContainer: {
        display: "flex",
        justifyContent: "flex-end",
    },
    selectedCardOpinion: {
        width: "300px",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "5px",
    },
};

