import React from "react";
import { SafeAreaView,Text,FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";

import CategoriesCard from "../../components/CategoriesCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import styles from "./Categories.style";


const Categories =({navigation}) => {
    const categories_apiUrl = process.env.EXPO_PUBLIC_API_CATEGORIES_URL;  //.env den url i aldım

    const {data,error,loading} =useFetch(categories_apiUrl);  //useFetch ile useState , useEffect kalabalığını kaldırdım
                                                            //Loading ve error olmadan çalıştıramamıştım
    
    const handleCategorySelect = (strCategory) =>{           //Bir sonraki gidecek sayfa için olan kısım
        console.log("Selected Category: " , strCategory)    //id denince olmadı gitmesini istediğim parametreleri gönderdim
        navigation.navigate("MealsScreen",{strCategory});  //categories_apiUrl deki isimleri 
    };
    
    
    const renderCategory = ({item}) => (   //FlatList için olan kısım burası da
    <CategoriesCard         //Card'lar halinde döneceği için categories ismi url'de böyle belirtildiğinden bunların 
    categories = {item}   //hepsi birer item oldu on select fonk. ile handleCatSelect e gönderdim ama item.strCategory
    onSelect ={() => handleCategorySelect(item.strCategory)} />); // çünk, isimler buydu ve ben isimleri dönsün istedim 
    // ve isimleri gönderdim

    

    if(error){            //Lottie animasyon paketleri için
        return <Error/>
    }
    
    if(loading){
        return <Loading/>
    }
    

    return(
        <SafeAreaView style={styles.container}>   
            <FlatList data={data.categories} renderItem={renderCategory}/> 
        </SafeAreaView>
    );

    /*data.categories diye belirtmezsen dönmedi categories zaten jsonda verilen isim bunlar array tipinde galiba 
    zaten bizde array tuttuk data useState'ini Chat null tutmamı önerdi. stil vermeyi unutma çalışmıyor*/
};

export default Categories;


