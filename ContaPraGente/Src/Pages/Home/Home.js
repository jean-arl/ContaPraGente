import React from 'react';
import { Container, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-web';


export default function Home () {
    return (
      <ScrollView style={styles.container}>
         <SafeAreaView>
            
        </SafeAreaView>
      </ScrollView>

    );
}


const styles = StyleSheet.create ({
  container:{
      backgroundColor: '#a2d2ff'
  },

  BtnAdd:{
    position: 'absolute',
    backgroundColor: '#ff5a5f',
    borderRadius: 50,
    padding: 15,
    width: 60,
    height: 60,
    bottom:-620,
    left: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },

  IconAdd:{
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});