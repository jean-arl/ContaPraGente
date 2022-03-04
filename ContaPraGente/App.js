import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";


const Stack = createNativeStackNavigator ();

export default function App ( ) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options= {{ title: 'Login', headerStyle:{ backgroundColor: 'grey' } }} />

        <Stack.Screen name='Cadastro' component={Cadastro}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}