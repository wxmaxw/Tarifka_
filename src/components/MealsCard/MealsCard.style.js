import { StyleSheet, Dimensions } from "react-native";




export default StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        flex:1,
        flexDirection:"row", //satır satır böldüm
        alignItems:"flex-end", //hepsini flex-end de başlattı
        //alignItems:"center",
        //justifyContent: "center",
    },

    image: {
        minHeight:Dimensions.get("window").height/4,
        minWidth:Dimensions.get("window").width/3,
        borderRadius:15,
        resizeMode:"cover",
        flex:1, // ontainerın içindeki ayarlardak dolayı küçülmesin diye flex:1
    },
    body_container:{
        position: 'absolute',
        bottom: 1, // Metni fotoğrafın altına ayarlamak için burayı ayarlayabilirsiniz
        left: 1,  //eğer bunu vermezsem container küçülüyor
        right: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Şeffaf bir arka plan ekleyebilirsiniz
        padding: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },

    title: {
        fontSize: 20,
        color:"white",
        textAlign:"right",
        fontWeight:"bold",
    },
});
