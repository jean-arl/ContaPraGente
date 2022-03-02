import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Entrar =() => {
    alert (email);
    alert (senha);
  }



  return (
    <View style={styles.container}>

     <Image style={styles.Logo} source={require('./assets/LogoContaPraGente.png')}/>

      <TextInput placeholder='Digite Seu E-mail...' style={styles.InputLogin} onChangeText= { text=>setEmail(text)} />
      <TextInput secureTextEntry='true' placeholder='Digite Sua Senha...' style={styles.InputLogin} onChangeText= { text=>setSenha(text)} />

      <TouchableOpacity style={styles.btnEntrar} onPress={()=>Entrar()}>

        <Text style={{color:'white', textAlign:'center'}}>Entrar</Text>

      </TouchableOpacity>

      <TouchableOpacity style= {styles.btnCadastrar}>
        <Text style= {{color:'white', textAlign:'center'}}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2d2ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  Logo:{
    position: 'relative',
    height: 300,
    width: 400,
    marginTop: -150,

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

  btnCadastrar: {
    backgroundColor: '#5e60ce',
    width: '90%',
    height: 35,
    borderRadius: 20,
    justifyContent:'center',
    marginTop: 10,
  }

});