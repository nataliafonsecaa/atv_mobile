import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#F5F5F5', 
      padding: 8, 
    }, 
    paragraph: {
      margin: 24, 
      fontSize: 26, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#9E9E9E', 
    }, 
    button: {
      backgroundColor: '#9E9E9E', 
      height: 60, 
      justifyContent: 'center', 
      width: 234
    }, 
    textButton: {
      fontSize: 20, 
      color: '#fff', 
      textAlign: 'center', 
    }, 
    programa: {
      borderWidth: 4, 
      borderColor: '#9E9E9E', 
      padding: 8,  
      marginTop: 8, 
      justifyContent: 'center', 
      alignItems: 'center'
    }, 
    textCounter: {
      fontSize: 32, 
      color: '#424242', 
      textAlign: 'center',    
      fontWeight: 'bold', 
      padding: 8, 
    }, 
    horizontal: {
      borderWidth: 2, 
      marginBottom: 8, 
      flexDirection: 'row', 
      justifyContent: 'center', 
      padding: 8, 
    },  
    buttonMaisMenos: {
      width: 60, 
      marginHorizontal: 40,
    }, 
  });

  export default styles;