import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";



export default function Details (){
    return(
     <View style={styles.container}>
       <FlatList/>

       <Text style={styles.ButtonIcon}>+</Text>

     </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2d2ff',
      maxHeight: '100%',
      minHeight:'100%'
  },

  ButtonIcon:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  ButtonNew:{
    position:"absolute",
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: '#ff8fa3',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
})