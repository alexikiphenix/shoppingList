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
  Button,
  ScrollView,
  FlatList
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
    // spread operator pour créer un tableau à la voléee
    const id = Date.now().toString();
    setProductsList(currentProductsList => 
      [{key: id, name: product }, ...currentProductsList]
      )      
    setProduct('');
    console.log(productsList);
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
        {/* <FlatList
          data={ productsList }
          renderItem={ ({item}) => <Text style= { styles.element }> { product } </Text>}
        /> */}
        <ScrollView>
          <View style={ styles.items }>
            {
              productsList.map((product, index) => 
              <Text style= { styles.element } key={ index }> { product } </Text>)
            }
          </View>
        </ScrollView>
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
      marginBottom: 12,
    },
    textInput :{
      flexGrow: 1,
      borderColor: 'grey',
      borderWidth: 1,
      padding: 6,
      paddingLeft: 8,
      fontSize: 15,
    },
    items: {
      marginTop: 12,
      color: 'red'
    },
    element: {
      backgroundColor: '#E06F12',
      marginVertical: 5,
      padding: 18,
      fontSize: 15,
    }

  }
)

export default App;
