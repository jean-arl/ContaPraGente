import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function Login ( { navigation } ) {
  
  return (
  
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
    <View style={styles.container}>
    
    <Image style={styles.Logo} source={require('../Login/LogoContaPraGente.png')}/>
    
      <TextInput placeholder='Digite Seu E-mail...' style={styles.InputLogin}/>
      <TextInput secureTextEntry='true' placeholder='Digite Sua Senha...' style={styles.InputLogin} returnKeyType="done"/>

      <View style={styles.forgotContainer}>
        <TouchableOpacity onPress= {()=> navigation.navigate('EsqueciMinhaSenha')}>
          <Text style={styles.forgotText}>Esqueceu sua Senha ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}>

        <Text style={{color:'white', textAlign:'center', fontWeight: 'bold'}} 
        onPress= {()=> navigation.navigate('Home')}>Acessar</Text>

      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
          <Text style={{flex:1, left: 6}}>Ou</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={{flex: 1 ,flexDirection:'row', marginTop: '10%'}}>

        <Text style= {{ color:'#001219', textAlign:'center', paddingRight: 20, fontWeight: 'bold', fontSize:'14', marginTop: 50}}>

          Não Possui Uma Conta?</Text>

        <TouchableOpacity onPress= {()=> navigation.navigate('Cadastro')}>
          <Text style= {styles.btnCadastrar}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
      </View>

      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
    minHeight: '100%',
    backgroundColor: '#a2d2ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  Logo:{
  flex:1,
  marginTop: Platform.OS === 'android' ? '-13%' : '20%',
  width: Platform.OS === 'android' ? '100%' : '100%',
  height: Platform.OS === 'android' ? '50%' : '50%',
  marginBottom: Platform.OS === 'android' ? '-10%' : '10%',
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
    flex: 1,
    color: '#072ac8',
    fontWeight: 'bold',
    marginTop: 50
  },
 

  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: '10%',
    fontWeight: 'bold',
  },

  forgotText:{
    color: '#001219',
    fontWeight: 'bold',
    color: 'red'
  },

  divisor:{
    flex: 1,
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