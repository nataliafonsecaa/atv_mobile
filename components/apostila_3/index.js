import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {
    
    const [numero, setNumero] = useState(0);


    function addNumber (){
      setNumero(numero + 1)
    }

    function removeNumber(){
      setNumero(numero - 1)
    }

    function zeroNumber(){
      setNumero(numero - numero)
    }

  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            EXEMPLO 3
        </Text>   
          
        <Text style={styles.textCounter}>{numero}</Text>

        <TouchableOpacity 
         style={styles.button1}
         onPress={() => addNumber()}
        >
          
            <Text style={styles.textButton}> 
                +1
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.button2}
         onPress={() => removeNumber()}
        >
          
            <Text style={styles.textButton}> 
                -1
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
         style={styles.button3}
         onPress={() => zeroNumber()}
        >
          
            <Text style={styles.textButton}> 
                0
            </Text>
        </TouchableOpacity>


    </View>
  );
}