import React, {useState} from "react";


import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TextInput} from "react-native";

export default function Perfil (){


    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={{width: '100%'}}>
        <Image style={styles.UserIcon} source={require('../Perfil/UserIcon.png')}/>
        
        <Text style={{textAlign: 'center', alignItems: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 20}}>Nome Do Usúario</Text>
        

        </ScrollView>
        </SafeAreaView>  
    );
}


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#a2d2ff',
    },

    UserIcon: {
        flex: 1,
        height: 150,
        width: 150,
        marginTop: 25,
        alignSelf: 'center',
    }
    

});