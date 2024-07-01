import React from "react";
import { View,Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoriesCard.style";

const CategoriesCard = ({categories,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: categories.strCategoryThumb}}
                />
                <View style={styles.body_container}>
                    
                    <Text style={styles.title}>{categories.strCategory}</Text>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoriesCard;