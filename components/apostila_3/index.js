import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 

import styles from './styles';

export default function Index() {

    const [numero, setNumero] = useState(0);

    function addNumber(){
        setNumero(numero + 1);
    } 

    function subNumber(){
        setNumero(numero - 1);
    }

    function zerar(){
        setNumero(0);
    }

  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>            

        <View style={styles.programa}>

            <View style={styles.horizontal}>

                <TouchableOpacity 
                    style={[styles.button, styles.buttonMaisMenos]} 
                    onPress={() => subNumber()}
                >
                    <Text style={styles.textButton}>
                        -
                    </Text>
                </TouchableOpacity>

                <Text style={styles.textCounter}>{numero}</Text>

                <TouchableOpacity 
                    style={[styles.button, styles.buttonMaisMenos]} 
                    onPress={() => addNumber()}
                >
                    <Text style={styles.textButton}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity 
            style={[styles.button, {borderRadius: 30}]} 
            onPress={() => zerar()}
            >
                <Text style={styles.textButton}>
                    Zerar
                </Text>
            </TouchableOpacity>        

        </View>                

    </View>
  );
}