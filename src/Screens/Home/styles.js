import {colors} from "../../Theme/colors";



export const styles = {
    headerMainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    headerSecondaryContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
    },

    navbar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "transparent",
        padding: "20px",
        zIndex: 1,

        "@media (max-width: 768px)": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: "10px",
            },
    },
    navbarList: {
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        justifyContent: "flex-end",

        "@media (max-width: 768px)": {
            justifyContent: "center",
        },
    },
    navbarItem: {
        marginLeft: "20px",

        "@media (max-width: 768px)": {
            margin: "0 10px",
        },
    },

    headerText: {
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Playfair Display SC, serif",
        fontSize: 120,
        fontWeight: "bolder",
        color: "rgba(0, 3, 14, 0.75)",
        textAlign: "center",
        width: "80%",

        "@media (max-width: 768px)": {
            fontSize: 80,
            width: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        "@media (max-width: 480px)": {
            fontSize: 60,
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
        },
    },



    headerImg: {
        display: "flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },

    mainContainer: {
        marginTop: "20px",
    },
    mainSecondaryContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: "60px",
    },
    textSecondaryContainer: {
        display: "flex",
        color: colors.primary,
        fontWeight: "bolder",
        fontSize: "24px",
        marginLeft: "270px",
    },

    MyappsMainContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        marginTop: "20px",
    },
    appsTech: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(60deg)",
    },
    appsSkills: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(120deg)",
    },
    appsProjects: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(180deg)",
    },
    appsTravels: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(240deg)",
    },
    appsInterships: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(300deg)",
    },
    appsContact: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        transform: "rotate(360deg)",
    },
    aboutmeMainContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        marginTop: "80px",
    },
    aboutmeSecondaryContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: "700px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    aboutmeText1: {
        display: "flex",
        fontSize: "50px",
        fontFamily: "Playfair Display SC serif",
    },
    aboutmeText2: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px",
    },
    myAppsMainContainer:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        width: '100%'
    },

    myAppsSecondaryContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },

    skillsContainer:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '60px'
    },
    TextContainer: {
        display: 'flex',
        marginRight:32,

    },
    skillsText:{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            width: "50%",
            height: "50%",
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            padding: "0 20px",
            borderRadius: "10px",
            marginBottom:50,

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
    programmingMainContainer:{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        marginTop: '20px',
        marginBottom: '150px',
        justifyContent: 'center'
    },

    myAppsT:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(1.5)',
        margin: '0 150px',
    },
    myAppsS:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'scale(1.5)',
        margin: '0 150px'
    },
    myAppsP:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'scale(1.5)',
        margin: '0 150px'
    },
    programmingSecondaryContainer:{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        marginTop: '20px',
        marginBottom: '150px',
        justifyContent: 'center'
    },
    myAppsTr:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(1.5)',
        margin: '0 150px'
    },
    myAppsI:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(1.5)',
        margin: '0 150px'
    },
    myAppsC:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(1.5)',
        margin: '0 150px'
    },

}