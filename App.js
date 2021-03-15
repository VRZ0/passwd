import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, } from 'react-native';
import Slider from '@react-native-community/slider';
import clipboard from 'expo-clipboard'

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '

export default function App() {
  const [passwd, setPasswd] = useState('');
  const [size, setSize] = useState(5)

  function generatePass(){
    
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswd(pass);
  }

  function copyPass(){
    clipboard.setString(passwd)
    alert('copiado')
  }
  
  return (
    <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./material-aula1/logo.png')}
        />
        <Text style={styles.title}> {size} caracteres</Text>

        <View style={styles.area}>
          <Slider
            style={{ height:50, }}
            minimumValue={5}
            maximumValue={15}
            value={size}
            onValueChange={ (value) => setSize(value.toFixed(0)) }
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={generatePass}>
          <Text style={styles.btntxt}> Gerar senha </Text>
        </TouchableOpacity>

      {passwd != '' && ( 
        <View style={styles.pass}>
          <Text style={{fontSize:20,}} onLongPress={copyPass}> {passwd} </Text>
        </View>)}
       
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    marginBottom:60,
  },
  title:{
    fontSize: 30,
    color: '#FFF',
    marginBottom:15,
  },
  area:{
    justifyContent:'center',
    margin:15,
    backgroundColor:'#FFF',
    width: '70%',
    height: 60,
    borderRadius: 15,
  },
  pass:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20,
    backgroundColor:'#FFF',
    width: '70%',
    height: 60,
    borderRadius: 15,
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFA200',
    fontSize: 20,
    width: '70%',
    height: 60,
    borderRadius: 15,
    marginBottom: 20,
  },
  btntxt:{
    color:'#FFF',
    fontSize: 20,
  },
});
