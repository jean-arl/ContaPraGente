import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Home from "../Pages/Home/Home";
import Perfil from "../Pages/Perfil/Perfil";



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
      
    </Tab.Navigator>
  );
}

export default function Routes ( ) {
  return (
      <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen name='Login' component={Login} options= {{headerShown: false }} />

        <Stack.Screen name='Cadastro' component={Cadastro} options= {{headerShown: false }} />
        
        <Stack.Screen name='Home' component={Tabs} options= {{headerShown: false }}/>

        <Stack.Screen name='Perfil' component={Tabs} options= {{headerShown: false }}/>

      </Stack.Navigator>
  );
}