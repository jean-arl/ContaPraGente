import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';


export default function Home ({navigation}) {
    return (
      <ScrollView style={styles.container}>
         <SafeAreaView>
         <TouchableOpacity onPress= {()=> navigation.navigate('Perfil')}>
          <Text style={{textAlign:'center', marginTop: 250, fontSize: 25, fontWeight:'bold'}}>Home</Text>
        </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>

    );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#a2d2ff'
    },

});