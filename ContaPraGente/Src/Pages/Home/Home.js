import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, SafeAreaView, ScrollView} from 'react-native';

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
    
      <SafeAreaView style={styles.container}>
        <ScrollView style={{width: '100%'}}>
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

              <TextInput placeholder={"Faça Sua Denuncia"} value={reclama} onChangeText={text => setReclama(text)} />

              <TouchableOpacity onPress={() => addReclama()}>
                <View style={styles.add}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>

            </KeyboardAvoidingView>

          </View>
        </ScrollView>
      </SafeAreaView>

    );
}


const styles = StyleSheet.create ({
  container:{
      flex: 1,
      backgroundColor: '#a2d2ff'
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
  }

});