import React from "react";

import { View, styles, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Home from "../Pages/Home/Home";
import EsqueciMinhaSenha from "../Pages/EsqueciMinhaSenha/EsqueciMinhaSenha";
import Perfil from "../Pages/Perfil/Perfil";
import Config from '../Pages/Config/config';


const Stack = createNativeStackNavigator ();
const Tab = createBottomTabNavigator ();

function Tabs (){
  return (

    <Tab.Navigator screenOptions={({route})=>({tabBarIcon: ({color,size})=> {
      let iconName;

      switch (route.name){
        case 'Home': 
          iconName= 'home';
            break;
              case 'Perfil':
                iconName= 'user';
                  break;
                    case 'Config':
                      iconName= 'settings';
                        break;
      }

      return <Icon name={iconName} size={size} color={color} />;

    },
    })}

    tabBarOptions={{
      activeTintColor: '#9C27B0',
      inactiveTintColor: '#777'   
    }}>
      
      <Tab.Screen name='Home' component={Home} />

      <Tab.Screen name='Perfil' component={Perfil} />

      <Tab.Screen name='Config' component={Config} />      
      
    </Tab.Navigator>
  );
}

export default function Routes ( ) {
  return (
      <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen name='Login' component={Login} options= {{headerShown: false }} />

        <Stack.Screen name='Cadastro' component={Cadastro}options= {{headerShown: false }} />
        
        <Stack.Screen name='Home' component={Tabs} options= {{headerShown: false }}/>

        <Stack.Screen name='EsqueciMinhaSenha' component={EsqueciMinhaSenha} options= {{headerShown: false }}/>

        <Stack.Screen name='Perfil' component={Tabs} options= {{headerShown: false }}/>

        <Stack.Screen name='Config' component={Tabs} options= {{headerShown: false }}/>

      </Stack.Navigator>
  );
}