import { StyleSheet, Text, Modal, View, Button } from "react-native";
import React from "react";

const CustomModal = ({animationTypeProp, isVisibleProp, itemSelectedProp, onDeleteItemHandlerEvent, setModalVisibleEvent}
  ) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
      <View style={styles.modalMessageContainer}>
        <Text>Se eliminará:</Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button
          title="Cancelar"
          color="#32965d"
          onPress={() =>setModalVisibleEvent(!isVisibleProp)}
        />
        <Button
          title="Eliminar"
          color="#ff7733"
          onPress={onDeleteItemHandlerEvent}
        />
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalMessageContainer:{
    marginTop: 50,
    alignItems: 'center',
  },
  modalButtonContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingTop: 20, 
    borderRadius: 10,

  }
});
