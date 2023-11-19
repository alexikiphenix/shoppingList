/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {     
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';



const App = () => {
  const [product, setProduct] = useState('');
  const [productsList, setProductsList] = useState([]);
  const inputHandler = (value) =>
  {
    setProduct(value)
  }

  const submitHandler = () =>
  {
    console.log(product);
  }
  return (
    <View style={styles.container}>
        <Text>{ product }</Text>
        <View style={ styles.inputContainer }>
            <TextInput 
                style={styles.textInput }
                placeholder='nom produit'
                onChangeText={ inputHandler }
                value= { product }
            />
            <Button 
              color='green'             
              title="Ajouter"
              onPress={ submitHandler }
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      padding: 38,
      paddingTop: 55
    },
    inputContainer: {
      flexDirection: "row",
    },
    textInput :{
      flexGrow: 1,
      borderColor: 'grey',
      borderWidth: 1,
      padding: 6,
      paddingLeft: 8,
      fontSize: 15,
    },
  }
)

export default App;
