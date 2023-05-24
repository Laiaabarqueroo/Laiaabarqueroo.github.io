
export const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "300px",
        height: "300px",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        margin: "20px",

        '@media (max-width: 768px)': {
            width: "100%",
            height: "auto",
            flexDirection: "row",
            margin: "20px 0",
        },
    },
    imageContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,

        '@media (max-width: 768px)': {
            width: "150px",
            height: "150px",
        },
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",

        '@media (max-width: 768px)': {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px 0 0 10px",
        },
    },
    content: {
        padding: "8px",
        background: "rgba(59,177,179,0.57)",
        position: "relative",
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

        '@media (max-width: 768px)': {
            padding: "20px",
            background: "rgba(59,177,179,0.57)",
            position: "relative",
            zIndex: 1,
            flex: 1,
            borderRadius: "0 10px 10px 0",
        },
    },
    name: {
        fontSize: "20px",
        fontWeight: "bold",
        margin: "0 0 8px",
        color: "rgb(255,255,255)",

        '@media (max-width: 768px)': {
            fontSize: "16px",
        },
    },
    subtitle: {
        fontSize: "20px",
        margin: "0 0 8px",
        color: "rgb(255,255,255)",

        '@media (max-width: 768px)': {
            fontSize: "16px",
        },
    },

};
