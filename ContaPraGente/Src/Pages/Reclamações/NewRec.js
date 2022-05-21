import React, {useState} from "react";
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function MyRec (){

const [tittle,setTittle] = useState('');
const [description, setDescription] = useState('');
const [denuncia, setDenuncia] = useState('');

  async function Denunciar() {
    
  };

    return (

      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={10}>
          <ScrollView style= {{width: '100%'}}>

          <Image style={styles.Logo} source={require('../Login/LogoContaPraGente.png')}/>

            <Text style={{textAlign:"center", marginTop: -70, textTransform: 'uppercase', fontSize: 20, fontStyle:'italic', fontWeight: 'bold', marginBottom: 30 }}>
                Cadastre Sua Denúncia
            </Text>

            <TextInput 
            placeholder='Insira o Titulo Da sua Denúncia...' 
            placeholderTextColor={'#ced4da'}
            value={tittle}
            style={styles.InputCadastro} 
            onChangeText= { value => setTittle (value)} />


            <TextInput 
            placeholder='Informe o Endereço da Ocorrência...'
            placeholderTextColor={'#ced4da'} 
            value={description}
            style={styles.InputCadastro} 
            onChangeText= { value => setDescription (value) } 
            />

            <Text style={{marginLeft: 30, fontSize: 15, fontWeight: 'bold'}}>Descreva Sua Denúncia</Text>
            <TextInput
            style={styles.InputDenuncia} 
            multiline
            numberOfLines={30}
            placeholderTextColor={'#ced4da'}
            value={denuncia} 
            onChangeText= { value =>setDenuncia(value)}/>


            <TouchableOpacity style= {styles.btnCadastrar} 
            onPress= {()=> Denunciar()}>
              <Text style= {{color:'white', textAlign:'center'}}>
              Realizar Denúncia
              </Text>
            </TouchableOpacity>
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

InputCadastro: {
    position: 'relative',
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 10
},

InputDenuncia:{
  backgroundColor: 'white',
  width: '90%',
  height: 200,
  borderRadius: 20,
  marginLeft: 15,
  marginBottom: 10,
  marginTop: 10
},

btnCadastrar: {
    backgroundColor: '#5e60ce',
    width: '90%',
    height: 35,
    borderRadius: 20,
    justifyContent:'center',
    marginTop: 10,
    marginLeft: 15
},

Logo:{
  height: 300,
  width: 400,
  marginTop: 10,
  marginLeft: -15
},

})