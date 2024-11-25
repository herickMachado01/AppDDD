import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js';
import CardCidade from './components/card_cidade.js';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [emFoco, setEmFoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2) {
      obj_DDD.buscarDDDCallBack(ddd, (dados) => {
        if (dados && dados.state && Array.isArray(dados.cities)) {
          setUf(dados.state);
          setCities(dados.cities);
        } else {
          console.error("Dados inválidos recebidos:", dados);
          setUf('');
          setCities([]);
        }
      });
    }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor: emFoco ? '#05e7e7' : '#018080' }]}
        placeholder="Enter DDD"
        keyboardType="numeric"
        maxLength={2}
        value={ddd}
        onChangeText={(text) => setDDD(text.replace(/[^0-9]/g, ''))}
        onFocus={() => setEmFoco(true)}
        onBlur={() => setEmFoco(false)}
      />

      <View style={styles.View_lista}>
        <FlashList
          data={cities}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => <CardCidade nome={item} uf={uf} />}
          estimatedItemSize={200}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 60,
    marginVertical: 20,
    fontSize: 16,
    
  },
  View_lista: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
});
