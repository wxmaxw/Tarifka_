import React from "react";
import { SafeAreaView, Text, Image, FlatList } from "react-native";

import styles from "./Meals.style";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealsCard from "../../components/MealsCard/MealsCard";



const Meals= ({route,navigation}) =>{
    const {strCategory} = route.params  /*route bizim parametre taşımamızı sağlayan yapı, navigation da tekrar başka bir
    sayfaya gideceğimiz yönlendireceğimiz için lazım*/ 


    const mealsUrl = process.env.EXPO_PUBLIC_API_MEALS_URL + strCategory; //url de eksik parça vardı route.params'la çektiğimiz kısım
    const {loading, error, data} = useFetch(mealsUrl);
    

    const handleMealsSelect = (strMeal) =>{   //bunu düzeltecem id ile gitmyeceğiz
        navigation.navigate("DetailScreen" ,{strMeal})
        console.log("Selected Meal:" ,strMeal);
    };

    const renderMeals = ({ item }) => (
        <MealsCard
          meals={item}
          onSelect={() => handleMealsSelect(item.idMeal)} //item.idMeal varken çalışıyordu
        />
    );
    if (!data || !data.meals) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Yemek bulunamadı</Text>
            </SafeAreaView>
        );
    }
      

    if(error){
        return <Error/>;
    }

    if(loading){
        return <Loading/>;
    }

    


    return(
        <SafeAreaView style={styles.container}>  
            <FlatList data={data.meals} renderItem={renderMeals}/>
        </SafeAreaView>
    );

    /*Bir öncekinde category idi şimdi meals verildiği için öyle kullandık
    */
};

export default Meals;