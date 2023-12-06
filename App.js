import { StatusBar } from "expo-status-bar";

import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
  data,
} from "react-native";
import { useState } from "react";
import CustomModal from "./components/CustomModal";
import CustomInput from "./components/CustomInput";
import CustomFlatList from "./components/CustomFlatList";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextItem(text);
  };
  const addItemToList = () => {
    setItemList((prevItemList) => [
      ...prevItemList,
      { id: Math.random().toString(), value: textItem },
    ]);
    console.log(itemList);
    setTextItem("");
  };
  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelectedToDelete(itemList.find((item) => item.id === id));
  };
  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id));
    setModalVisible(!modalVisible);
  };
  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button
        title="X"
        color="#847e89"
        onPress={() => onSelectItemHandler(item.id)}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>PASTILLERO VIRTUAL</Text>

        <CustomInput
          placeholderProp="Medicamento"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <CustomFlatList
          itemList={itemList}
          onSelectItemHandler={onSelectItemHandler}
        />
      </View>

      <CustomModal
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abedc6",
    padding: 30,
  },
  mainTitle: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#084887",
    borderRadius: 10,
    color: "white",
  },
 


});
