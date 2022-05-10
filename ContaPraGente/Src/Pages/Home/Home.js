import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollViewBase, Keyboard, ScrollView } from 'react-native';

import Denuncias from '../components/denuncias';



export default function Home () {
  const [reclama, setReclama] = useState();
  const [reclamaLista, setReclamaLista] = useState([]);

  const addReclama = () => {
    Keyboard.dismiss();
    setReclamaLista([...reclamaLista, reclama])
    setReclama(null);
  }

  const apagarDenuncia = (index) => {
    let itemsDel = [...reclamaLista];
    itemsDel.splice(index, 1);
    setReclamaLista(itemsDel)
  }

    return (
    
      <View style={styles.container}>
        <View style={styles.ListaDenuncias}>
          <Text style={styles.Tittle}>Denuncias</Text>
          <View style={styles.List}>
            {
              reclamaLista.map((item, index) => {
                return <Denuncias key={index} text={item} />
              })
            }
          </View> 
            <KeyboardAvoidingView style={styles.escNewReclama} behavior={Platform.OS === 'ios' ? 'padding': 'height'}>

              <TextInput style={styles.input} placeholder={'Faça Sua Denuncia'} value={reclama} onChangeText={text => setReclama(text)} />

              <TouchableOpacity onPress={() => addReclama()}>
                <View style={styles.add}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>

            </KeyboardAvoidingView>

        </View>

      </View>

    );
}


const styles = StyleSheet.create ({
  container:{
      flex: 1,
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
  },

  ListaDenuncias:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  Tittle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -220,
    marginTop: -10
  },

  List:{
    fontWeight: 'bold',
    padding: 50,
    width: 430
  },

  escNewReclama:{
    backgroundColor: '#fff',
    padding: 30,
    width: '80%',
    borderRadius: 20,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    marginLeft: -55,
    marginTop: 450
  },

  add:{
    width: 50,
    height: 50,
    marginTop: -50,
    marginLeft: 280,
    backgroundColor: '#fff',
    borderRadius: 30
  },  

  addText:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    fontSize: 25
  },

});