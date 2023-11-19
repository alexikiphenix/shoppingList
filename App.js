/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {     
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';



const App = () => {

  return (
    <View style={styles.container}>
        <View style={ styles.inputContainer }>
            <TextInput 
                style={styles.textInput }
            />
            <Button
                title="Ajouter"
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 40,
            paddingTop: 60
        },
        inputContainer: {
            flexDirection: "row",

        },
        textInput :{
            borderColor: 'grey',
            borderWidth: 1,
            padding: 5,
            paddingLeft: 5,
            fontSize: 18,
        }
    }
)


export default App;
