import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
    },
    image:{
        minHeight: Dimensions.get("window").height/3,
        minWidth: Dimensions.get("window").width,
        resizeMode:"cover",
      
    },
    body_container:{
        justifyContent:"flex-start",
        borderColor:"black",
        borderBottomWidth: 1,        // Çerçevenin kalınlığını belirler
        borderColor: 'lightgrey', // Çerçevenin rengini belirler
        padding:5,
        margin:5,
    },
    title:{
        fontSize:25,
        color:"darkred",
        fontWeight:"bold",
    },
    country:{
        fontSize:20,
        fontWeight:"bold",
        color:"darkred",
    },
    desc:{
        padding:10,
    },
});