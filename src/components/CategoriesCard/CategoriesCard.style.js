import { StyleSheet,Dimensions } from "react-native";

const deviceSize= Dimensions.get('window');



//Buraları değiştir 

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 10,
        flexDirection: 'row',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,


        
    },
    image:{
        //width: 100,
        //borderRadius: 50, // fotoğrafı yuvarlar
        //minHeight:100,
        resizeMode: 'contain',
        minHeight:Dimensions.get('window').height/8,
        minWidth:Dimensions.get('window').width/3,
         
    },
    body_container:{
        flex:1,
        padding:5,
        backgroundColor:"white",
        justifyContent:"center",  //text yazısını ortaladı
        borderBottomRightRadius:10,
        borderTopRightRadius:10,

        
    },
    title:{
        fontSize: 20,
    },
});