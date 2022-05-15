import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const Denuncias = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ItemLeft}>
                <TouchableOpacity style={styles.clear}>
                <Image source={require('../../../assets/lixeira.png')}/>
                </TouchableOpacity>

                    <TouchableOpacity style={styles.edit}>
                    <Image source={require('../../../assets/editar50.png')}/>
                    </TouchableOpacity>

            </View>
                <Text style={styles.list}> {props.text}</Text>
        </View>

    );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginBottom: 25,
        alignItems: 'center'
    },

    
    ItemLeft:{
        flex:1,
        alignItems: 'center'
    },

    clear:{
        marginLeft: 280,
    },

    edit:{
     marginLeft: -280
    },

    list:{
        height: 25
    },
});


export default Denuncias