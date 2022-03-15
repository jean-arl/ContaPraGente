import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function Login ( { navigation } ) {
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
    <View style={styles.container}>

    <Image style={styles.Logo} source={require('../Login/LogoContaPraGente.png')}/>

      <TextInput placeholder='Digite Seu E-mail...' style={styles.InputLogin} />
      <TextInput secureTextEntry='true' placeholder='Digite Sua Senha...' style={styles.InputLogin} />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua Senha ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}>

        <Text style={{color:'white', textAlign:'center'}}>Entrar</Text>

      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
          <Text>Ou</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={{flexDirection:'row', marginTop: '10%'}}>
        <Text style= {{ color:'#001219', textAlign:'center', paddingRight: 20}}>Não Possui Uma Conta?</Text>
        <TouchableOpacity onPress= {()=> navigation.navigate('Cadastro')}>
          <Text style= {styles.btnCadastrar}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style= {{marginTop: '10%'}} onPress= {()=> navigation.navigate('Home')}>
        <Text style= {{color:'white', textAlign:'center'}}>
          Home
        </Text>
      </TouchableOpacity>


    </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '-1%', 
    maxHeight: '100%',
    minHeight: '101%',
    backgroundColor: '#a2d2ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  Logo:{
   marginTop: Platform.OS === 'android' ? '-13%' : '-20%',
   width: Platform.OS === 'android' ? '100%' : '100%',
   height: Platform.OS === 'android' ? '50%' : '50%',
   marginBottom: Platform.OS === 'android' ? '-20%' : '-30%',
  },

  InputLogin: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 15,
    
  },

  btnEntrar: {
    backgroundColor: '#5e60ce',
    width: '90%',
    height: 35,
    borderRadius: 20,
    justifyContent:'center'
  },

  btnCadastrar:{
    color: '#072ac8',
    fontWeight: 'bold',
  },
 

  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: '10%'
  },

  forgotText:{
    color: '#001219'
  },

  divisor:{
    marginTop: '50%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

 divisorLine:{
   width: '45%',
   height: 2,
   backgroundColor:'#efeded',
   borderRadius: 5,
 } 

});