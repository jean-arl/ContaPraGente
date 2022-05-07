import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Denuncias from '../components/denuncias';



export default function Home () {
    return (
      <View style={styles.container}>
        
        <View style={styles.Denuncias}>
          <Text style={styles.Tittle}>Minhas Denuncias</Text>

          <View style={styles.List}>
            < Denuncias text={'Rua Sem Iluminação'} />
            < Denuncias text={'Ciclovia Sem Condições de Uso'} />
            < Denuncias text={'Bueiro Sem Tampa'} />
            < Denuncias text={'Ponto de Onibus Sem cobertura'} />
            < Denuncias text={'Arvore Caida na via'} />
          </View>

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

  Denuncias:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  Tittle:{
    fontSize: 25,
    fontWeight: 'bold'
  },

  List:{
    fontWeight: 'bold',
    padding: 50,
    width: 430
  },

});