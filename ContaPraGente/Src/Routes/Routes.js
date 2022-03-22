import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Home from "../Pages/Home/Home";
import EsqueciMinhaSenha from "../Pages/EsqueciMinhaSenha/EsqueciMinhaSenha";
import Perfil from "../Pages/Perfil/Perfil";


const Stack = createNativeStackNavigator ();

export default function Routes ( ) {
  return (
    <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen name='Login' component={Login} options= {{headerShown: false }} />

        <Stack.Screen name='Cadastro' component={Cadastro}options= {{headerShown: false }} />
        
        <Stack.Screen name='Home' component={Home} options= {{headerShown: false }}/>

        <Stack.Screen name='EsqueciMinhaSenha' component={EsqueciMinhaSenha} options= {{headerShown: false }}/>

        <Stack.Screen name='Perfil' component={Perfil} options= {{headerShown: false }}/>

    </Stack.Navigator>
 
  );
}