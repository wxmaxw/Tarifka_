import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";

import DetailCard from "../../components/DetailCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import styles from "./Detail.style";


const Detail =({route}) =>{
    const {strMeal} = route.params 
    console.log({strMeal});
    
    
    
    const detail_apiUrl = process.env.EXPO_PUBLIC_API_DETAIL_URL+strMeal;
    const {data, loading,error} = useFetch(detail_apiUrl);
    console.log(detail_apiUrl)


    const renderDetail =({item}) =>(
        <DetailCard
        meals={item}/>);
    

    if(error){
        return <Error/>;
    }

    if(loading){
        return <Loading/>;
    }


    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} 
            renderItem={renderDetail}/>
        </SafeAreaView>
    );
};

export default Detail;