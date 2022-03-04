import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Cadastro (){

const [Nome,setNome] = useState('');
const [Sobrenome,setSobreNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

  const Cadastrar =() => {
    alert (Nome);
    alert (Sobrenome);
    alert (email);
    alert (senha);
  }

    return (
        <View style={styles.container}>
            <Text style={{textAlign:"center", marginTop: 50, textTransform: 'uppercase', fontSize: 20 }}>
                Informe Seus Dados
            </Text>

            <TextInput placeholder='Digite Seu Nome...' style={styles.InputCadastro} 
            onChangeText= { text=>setNome(text)} />
            <TextInput placeholder='Digite Seu Sobrenome...' style={styles.InputCadastro} 
            onChangeText= { text=>setSobreNome(text)} />
            <TextInput placeholder='Digite Seu E-mail...' style={styles.InputCadastro} 
            onChangeText= { text=>setEmail(text)} />
             <TextInput secureTextEntry='true' placeholder='Digite Sua Senha...' style={styles.InputCadastro} onChangeText= { text=>setSenha(text)} />
             <TouchableOpacity style= {styles.btnCadastrar} onPress= {()=> Cadastrar('')}>
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
      backgroundColor: '#a2d2ff'
},

InputCadastro: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: 15,    
},

btnCadastrar: {
    backgroundColor: '#5e60ce',
    width: '90%',
    height: 35,
    borderRadius: 20,
    justifyContent:'center',
    marginTop: 5,
    marginLeft: 15
}

})