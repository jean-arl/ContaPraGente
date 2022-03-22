import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function Perfil (){
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Perfil</Text>
                
            </SafeAreaView>
        </ScrollView>
    );
}


const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#a2d2ff'
    },

});