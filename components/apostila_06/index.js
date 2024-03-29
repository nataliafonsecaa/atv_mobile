import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import styles from '../apostila_06/styles';

export default function Index(){
    const[massa, setMassa] = useState(0);
    const[altura, setAltura] = useState(0);
    const[resultado, setResultado] = useState(0);
    const[texto, setTexto]= useState(0);

    function Calcular(){
        const valor = massa / (altura * altura);
      setResultado(valor)
      if (valor < 18.5) {
        setTexto('Abaixo do peso')
      } else if (valor < 24.9) {
        setTexto('Peso normal')
      } else if (valor < 29.9) {
        setTexto('Sobrepeso')
      } else if (valor < 34.9) {
        setTexto('Obesidade grau 1')
      } else if (valor < 39.9) {
        setTexto('Obesidade grau 2')
      } else {
        setTexto('Obesidade grau 3')
      }
  };
    return (
        <View style={styles.container}>
               <Text style={styles.paragraph}>Exemplo 6 </Text>
        <View style={styles.entradaImc}>
               <TextInput
                placeholder='Massa' 
                placeholderTextColor='lightgray' 
                keyboardType='numeric' 
                style={styles.input} 
                onChangeText={(entrada) => setMassa(entrada)}
                />
                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='lightgray'
                 keyboardType='numeric' 
                 style={styles.input} 
                 onChangeText={(entrada) => setAltura(entrada)}
                 />
        </View>
              <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
                <Text style={styles.buttonText}>Calcular </Text>
              </TouchableOpacity> 
                <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
                <Text style={styles.resultados}>
                  {texto}
                </Text>
        </View>
    );
}

