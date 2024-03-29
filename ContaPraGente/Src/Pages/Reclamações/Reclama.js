import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";




export default function Reclama ({navigation}){

  return(
     <View style={styles.container}>
       <FlatList/>
       <TouchableOpacity style={styles.ButtonNew}
       onPress={()=> navigation.navigate('NewRec')}>

         <Text style={styles.ButtonIcon}>+</Text>

       </TouchableOpacity>
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