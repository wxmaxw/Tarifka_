import React from "react";
import LottieView from "lottie-react-native";

function Error(){
    return <LottieView style={{flex:1}} source={require("../../assets/ErrorAnimation.json")} autoPlay />;
}

export default Error;