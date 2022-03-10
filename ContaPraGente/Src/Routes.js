import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Src/Pages/Login/Login";
import Cadastro from "../Src/Pages/Cadastro/Cadastro";
import Home from "../Src/Pages/Home/Home";


const Stack = createNativeStackNavigator ();

export default function Routes ( ) {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options= {{ title: 'Login', headerStyle:{ backgroundColor: 'grey' } }} />

        <Stack.Screen name='Cadastro' component={Cadastro}/>
        
        <Stack.Screen name='Home' component={Home}/>

    </Stack.Navigator>
 
  );
}