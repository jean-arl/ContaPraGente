import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';


export default function Home () {
    return (
      <ScrollView style={styles.container}>
          <SafeAreaView>
              <Text>Bem Vindo A Home</Text>
          </SafeAreaView>
      </ScrollView>

    );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#a2d2ff'
    }

});