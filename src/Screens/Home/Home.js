import React from "react";
import {colors} from "../../Theme/colors";
import Header from "./header";
import MainContainer from "./mainContainer";
import MyApps from "./myApps";
import {styles} from "./styles";
const Home = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
            <Header></Header>
            <MainContainer></MainContainer>
            <MyApps></MyApps>
        </div>
    )
}

export default Home;