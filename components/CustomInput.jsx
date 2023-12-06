import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const CustomInput = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholderProp}
          onChangeText={onChangeTextHandlerEvent}
          value={textItemProp}
        />
        <Button title="Agregar" color="#297373" onPress={addItemToListEvent} />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin:"10",
    paddingBottom:"20",

  },
  textInput: {
    fontSize: 24,
    width: 200,
    borderBottomColor: "#39393A",
    borderBottomWidth: 2,
    padding:"10",
    Margin:"10",
    
  },
});
