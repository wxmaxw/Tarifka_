import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals'
import Detail from './src/pages/Detail';

//https://github.com/Agundesli/TarifkaApp/blob/main/.env

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='CategoriesScreen'
        component={Categories} 
        options={{
          title: "Categories",
          headerStyle: {backgroundColor:"white"},
          headerTitleStyle: {color:"#fca503"},
          headerTitleAlign: "center",
          headerTintColor:"purple",
        }}/>
        <Stack.Screen
        name='MealsScreen'
        component={Meals}
        options={{
          title: "Meals",
          headerStyle: {backgroundColor: "white"},
          headerTitleStyle: {color: "#fca503"},
          headerTitleAlign: "center",
          headerTintColor:"#fca503",
        }}/> 
        <Stack.Screen
        name='DetailScreen'
        component={Detail}
        options={{
          title:"Detail",
          headerStyle:{backgroundColor:"white"},
          headerTitleStyle: {color: "#fca503"},
          headerTitleAlign: "center",
          headerTintColor:"#fca503",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;