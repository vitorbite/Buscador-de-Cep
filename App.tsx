import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import api from './services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [url, setUrl] = useState('');
  const [CEP, setCEP] = useState('');
  const [cidade, setCidade] = useState('');
  const [log, setLog] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Estado, setEstado] = useState('');

  useEffect(() => {
    async function recarregarDados() {
      let Cep = await AsyncStorage.getItem('Cep');
      let Logradouro = await AsyncStorage.getItem('Logradouro');
      let localidade = await AsyncStorage.getItem('Cidade');
      let bairro = await AsyncStorage.getItem('Bairro');
      let estado = await AsyncStorage.getItem('Estado');
      setCEP(Cep || '');
      setLog(Logradouro || '');
      setCidade(localidade || '');
      setBairro(bairro || '');
      setEstado(estado || '');
    }
    recarregarDados();
  }, []);

  async function Carregar() {
    let response = await api.get(`${url}/json`);
    let { cep, localidade, bairro, logradouro, estado } = response.data;
    setCEP(cep);
    setLog(logradouro);
    setCidade(localidade);
    setBairro(bairro);
    setEstado(estado);
    Keyboard.dismiss();

    await AsyncStorage.setItem('Cep', cep || '');
    await AsyncStorage.setItem('Logradouro', logradouro || '');
    await AsyncStorage.setItem('Cidade', localidade || '');
    await AsyncStorage.setItem('Bairro', bairro || '');
    await AsyncStorage.setItem('Estado', estado || '');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Digite o CEP desejado</Text>
      <TextInput
        keyboardType="numeric"
        maxLength={8}
        style={styles.input}
        placeholder="Ex:79003144"
        value={url}
        onChangeText={v => {
          setUrl(v);
        }}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.buscar} onPress={Carregar}>
          <Text style={styles.btn}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.limpar}>
          <Text style={styles.btn}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaBusca}>
        <Text style={styles.textoLocal}>CEP: {CEP}</Text>
        <Text style={styles.textoLocal}>Logradouro: {log}</Text>
        <Text style={styles.textoLocal}>Bairro: {Bairro}</Text>
        <Text style={styles.textoLocal}>Cidade: {cidade}</Text>
        <Text style={styles.textoLocal}>Estado: {Estado}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 7,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  areaBtn: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    fontSize: 16,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#fff',
    width: 100,
    height: 40,
  },
  buscar: {
    backgroundColor: 'blue',
    marginRight: 30,
    borderRadius: 5,
  },
  limpar: {
    backgroundColor: 'red',
    marginLeft: 30,
    borderRadius: 5,
  },
  areaBusca: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textoLocal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
