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
      <Text style={styles.titulo}>App</Text>
      <TextInput style={styles.input} placeholder='Ex:79003144'/>

      <View style={styles.areaBtn}>
      
        <TouchableOpacity style={styles.btn}>
          <Text>Buscar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn}>
          <Text>Limpar</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 7,
  },
  areaBtn: {
    flexDirection: 'row',
    width: '90%',
  },
  btn:{
    flex: 1,
    margin: 50,
    width: 40,
    height: 40,
    backgroundColor: '#000',
  },
});
