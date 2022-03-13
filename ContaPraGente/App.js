import React from "react";
import  {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from "../ContaPraGente/Src/Routes/Routes";


export default function App ( ) {
  return (
    <NavigationContainer>

     <StatusBar backgroundColor= "#38A69D" barStyle="dark-content"/>

     < Routes />

    </NavigationContainer>
  );
}