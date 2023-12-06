import { StyleSheet, FlatList, View, Button, Text } from "react-native";
import React from "react";
const CustomFlatList = ({ itemList, onSelectItemHandler }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.value}</Text>

          <Button
            title="X"
            color="#847e89"
            borderRadius="10"
            marginTop="10"
            padding="10"
            

            onPress={() => onSelectItemHandler(item.id)}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CustomFlatList;
const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 0,
    margin: 20,
    backgroundColor: "#BCEBCB",
    borderRadius: 10,
    borderWidth: 1,
  },

});
