import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite o CPF desejado</Text>
      <TextInput style={styles.input} placeholder='Ex:79003144'/>

      <View style={styles.areaBtn}>
      
        <TouchableOpacity style={styles.buscar}>
          <Text style={styles.btn}>Buscar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.limpar}>
          <Text style={styles.btn}>Limpar</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  input:{
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 7,
    margin: 10,
    padding: 10,
  },
  areaBtn: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  btn:{
    fontSize: 16,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#fff',
    width: 100,
    height: 40,
  },
  buscar:{
    backgroundColor: 'blue',
    marginRight: 30,
    borderRadius: 5,
  },
  limpar:{
    backgroundColor: 'red',
    marginLeft: 30,
    borderRadius: 5,
  },

});
