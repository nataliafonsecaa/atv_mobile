import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import styles from '../apostila_05/styles';

export default function Index (){
        const [n1, setN1] = useState(0);
        const [n2, setN2] = useState(0);
        const [total, setTotal] = useState(0);

    function Soma(){
        const conta = parseInt(n1) + parseInt(n2);
        setTotal (conta.toString());
    }

    function Menos(){
        const conta = parseInt (n1) - parseInt(n2);
        setTotal (conta.toString());
    }
    function Multi(){
        const conta = parseInt (n1) * parseInt(n2);
        setTotal (conta.toString());
    }
    function Div(){
        const conta = parseInt (n1) / parseInt(n2);
        setTotal (conta.toString());
    }
    function Zerar(){
        setN1(0);
        setN2(0);
        setTotal(0);
    }

return (
    <View style={styles.container}>
    <Text style ={styles.paragraph}>
                Exemplo 5 
    </Text>    
    <Text style ={styles.txtSaida}> Calculadora Básica</Text>
    
    <Text style={styles.textLabel}> 1º Número: </Text>
    <TextInput
     style={styles.txtEntrada}
     onChangeText={(entrada) => setN1(entrada)}
     value={n1}
    />

    <Text style={styles.txtSaida}> + </Text>

    <Text style={styles.textLabel}> 2º Número: </Text>
    <TextInput 
    style={styles.txtEntrada}
    onChangeText={(entrada) => setN2(entrada)}
    value={n2}
    />

    <Text style ={[styles.txtSaida, {margin:0}]} > = </Text>

    <Text style={styles.textLabel}> Total </Text>
    <TextInput
     style={styles.txtEntrada}
     editable={false}
     value={total}
    />

    <TouchableOpacity style={styles.button} onPress={() => Soma()}>
        <Text style={styles.textButton}> + </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => Menos()}>
        <Text style={styles.textButton}> - </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => Multi()}>
        <Text style={styles.textButton}> * </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => Div()}>
        <Text style={styles.textButton}> / </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => Zerar()}>
        <Text style={styles.textButton}> Zerar </Text>
    </TouchableOpacity>

    </View>
);
}


  