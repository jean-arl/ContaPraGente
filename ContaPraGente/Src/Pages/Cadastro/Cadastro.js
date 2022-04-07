import React, {useState} from "react";
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function Cadastro (){

const [Nome,setNome] = useState('');
const [Telefone,setTelefone] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

  const Cadastrar =() => {
    alert (Nome);
    alert (Telefone);
    alert (email);
    alert (senha);
  }

    return (

      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={10}>
          <ScrollView style= {{width: '100%'}}>

          <Image style={styles.Logo} source={require('../Login/LogoContaPraGente.png')}/>

            <Text style={{textAlign:"center", marginTop: -70, textTransform: 'uppercase', fontSize: 20, fontStyle:'italic', fontWeight: 'bold', marginBottom: 30 }}>
                Informe Seus Dados
            </Text>

            <TextInput placeholder='Digite Seu Nome...' 
            style={styles.InputCadastro} 
            onChangeText= { text=>setNome(text)} />


            <TextInput placeholder='Digite Seu Telefone...' 
            style={styles.InputCadastro} 
            onChangeText= { text=>setTelefone(text)} 
            keyboardType='phone-pad' returnKeyType="done" />


            <TextInput placeholder='Digite Seu E-mail...' 
            style={styles.InputCadastro} 
            onChangeText= { text=>setEmail(text)} 
            keyboardType='email-address'/>


            <TextInput secureTextEntry='true' 
            placeholder='Digite Sua Senha...' 
            style={styles.InputCadastro} 
            onChangeText= { text=>setSenha(text)}/>


            <TouchableOpacity style= {styles.btnCadastrar} onPress= {()=> Cadastrar('')}>
              <Text style= {{color:'white', textAlign:'center'}}>
              Cadastrar
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