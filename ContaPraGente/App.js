import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Routes from "../ContaPraGente/Src/Routes";


const Stack = createNativeStackNavigator ();

export default function App ( ) {
  return (
    <NavigationContainer>

     < Routes />

    </NavigationContainer>
  );
}