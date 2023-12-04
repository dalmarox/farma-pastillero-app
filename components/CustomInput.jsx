import { StyleSheet, TextInput, View, Button, StyleSheet, StyleSheet } from "react-native";
import React from 'react'

const CustomInput = ({
    placeholderProp,
    textItemProp,
    onChangeTextHandlerEvent,
    addItemToListEvent,
    
}
) => {
  return (
    <View style={styles.container}>

       <View style={styles.inputContainer}> 
      <TextInput 
      style={styles.textInput} placeholder={placeholderProp}
      onChangeText= {onChangeTextHandlerEvent}
      value={textItemProp}
/>
      <Button title="Agregar" color='#297373' 
      onPress={addItemToListEvent}
      />
      </View>
    </View>
  )
}

export default CustomInput

const StyleSheet = StyleSheet.create({
    
        inputContainer:{
          flexDirection:'row',
          justifyContent:'space-evenly'
        },
        textInput:{
        fontSize: 25,
        width: 200,
        borderBottomColor: "#39393A",
        borderBottomWidth: 1,
        },
        itemList:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          margin: 10,
          backgroundColor:'#BCEBCB',
          borderRadius: 10,

},
}
)