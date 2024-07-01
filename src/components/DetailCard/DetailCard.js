import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./DetailCard.style";


const DetailCard = ({meals}) =>{
    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri: meals.strMealThumb}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{meals.strMeal}</Text>
                <Text style={styles.country}>{meals.strArea}</Text>
            </View>
            <Text style={styles.desc}>{meals.strInstructions}</Text>
        </View>
    );
};

export default DetailCard;