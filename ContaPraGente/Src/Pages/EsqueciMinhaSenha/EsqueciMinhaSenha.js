import React from "react";
import {ScrollView, Text, style, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';

export default function EsqueciMinhaSenha (){
    return (
        <ScrollView style={styles.container} >

        <SafeAreaView>
                
            <Text style={styles.Title}>Resetar Senha</Text>

            <TextInput style={styles.btnInput} placeholder='Digite Seu E-mail...'/>

            <TouchableOpacity style={styles.btnReset}>

            <Text style={{color: '#fff', textAlign: 'center', marginTop: 7, fontWeight: 'bold'}}> Enviar </Text>

            </TouchableOpacity>   
        </SafeAreaView>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#a2d2ff'
    },

    Title:{
        marginTop: 150,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30, 
        
    },

    btnInput:{
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 10,
        height: 40,
        marginBottom: 30,
        alignSelf: 'center',
        paddingLeft: 15
    },

    btnReset:{
        backgroundColor: '#5e60ce',
        width: '70%',
        height: 35,
        borderRadius: 10,
        alignSelf: 'center'
    }
});