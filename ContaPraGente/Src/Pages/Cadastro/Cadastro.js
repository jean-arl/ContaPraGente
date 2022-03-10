import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';


export default function Cadastro (){

const [Nome,setNome] = useState('');
const [Sobrenome,setSobreNome] = useState('');
const [email, setEmail] = useState('');
const [confirmeEmail, setConfirmEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmeSenha, setConfirmSenha] = useState ('');

  const Cadastrar =() => {
    alert (Nome);
    alert (Sobrenome);
    alert (email);
    alert (confirmeEmail);
    alert (senha);
    alert (confirmeSenha);
  }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{backgroundColor: '#a2d2ff'}} keyboardVerticalOffset={100}>
          <ScrollView style= {{width: '100%'}}>

          <Image style={styles.Logo} source={require('../Login/LogoContaPraGente.png')}/>

            <Text style={{textAlign:"center", marginTop: -70, textTransform: 'uppercase', fontSize: 20, fontStyle:'italic', fontWeight: 'bold', marginBottom: 30 }}>
                Informe Seus Dados
            </Text>
            <TextInput placeholder='Digite Seu Nome...' style={styles.InputCadastro} 
            onChangeText= { text=>setNome(text)} />
            <TextInput placeholder='Digite Seu Sobrenome...' style={styles.InputCadastro} 
            onChangeText= { text=>setSobreNome(text)} />
            <TextInput placeholder='Digite Seu E-mail...' style={styles.InputCadastro} 
            onChangeText= { text=>setEmail(text)} />
            <TextInput placeholder='Confirme Seu E-mail...' style={styles.InputCadastro} 
            onChangeText= { text=>setConfirmEmail(text)} />
            <TextInput secureTextEntry='true' placeholder='Digite Sua Senha...' style={styles.InputCadastro} onChangeText= { text=>setSenha(text)} />
            <TextInput secureTextEntry='true' placeholder='Confirme Sua Senha...' style={styles.InputCadastro} onChangeText= { text=>setConfirmSenha(text)} />
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
      backgroundColor: '#a2d2ff'
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
  marginTop: -60
}

})