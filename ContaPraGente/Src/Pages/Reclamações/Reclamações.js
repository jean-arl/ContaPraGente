import React from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView, Text, TextInput } from "react-native";



export default function Reclamações (){
    return(
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style= {{width: '100%'}}>
          
                   

        </ScrollView>
      </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a2d2ff',
      maxHeight: '100%',
      minHeight:'100%'
  },

  Tittle:{
    marginTop: 10,
    marginLeft: 55,
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    width: '70%'
  },
})