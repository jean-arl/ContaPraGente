import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Reclama from "../Pages/Reclamações/Reclama";
import Minhas_Reclamações from "../Pages/Minhas_Reclamações/MyRec";
import NewRec from "../Pages/Reclamações/NewRec";



const Stack = createNativeStackNavigator ();

const Tab = createBottomTabNavigator ();

function Tabs (){
  return (

    <Tab.Navigator screenOptions={({route})=>({tabBarIcon: ({color,size})=> {
      let iconName;

      switch (route.name){
        case 'Reclamações': 
          iconName= 'edit';
            break;
              case 'Minhas Reclamações':
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
      
       <Tab.Screen name='Reclamações' component={Reclama} />

      <Tab.Screen name='Minhas Reclamações' component={Minhas_Reclamações} />    
      
    </Tab.Navigator>
  );
}

export default function Routes ( ) {
  return (
      <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen name='Login' component={Login} options= {{headerShown: false }} />

        <Stack.Screen name='Cadastro' component={Cadastro} options= {{headerShown: false }} />

        <Stack.Screen name='NewRec' component={NewRec} options= {{headerShown: false }} />
        
        <Stack.Screen name='Reclamações' component={Tabs} options= {{headerShown: false }}/>

        <Stack.Screen name='Minhas Reclamações' component={Tabs} options= {{headerShown: false }}/>
        

      </Stack.Navigator>
  );
}