import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput,FlatList, Modal} from 'react-native';
import {useState} from 'react';
import CustomModal from './components/CustomModal';
import CustomInput from'./components/CustomInput';

export default function App() {
  const[textItem,setTextItem] = useState('')
  const [itemList,setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete]= useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler= (text) => {
    setTextItem(text)
  }
  const addItemToList =() => {
    setItemList(prevItemList =>[...prevItemList,{id:Math.random().toString(),value:textItem}])
    console.log(itemList)
    setTextItem('')
  } 
  const onSelectItemHandler= (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find ((item)=>item.id===id))
  }
  const onDeleteItemHandler= () =>{
setItemList(itemList.filter((item)=>item.id!==itemSelectedToDelete.id))
setModalVisible(!modalVisible)
  }
  const  renderListItem= ({item})=>
  (
  <View style={styles.itemList}>
    <Text>{item.value}</Text>
    <Button title= "X" color="#847e89" onPress={()=>onSelectItemHandler(item.id)}/>
    </View>
    )
  


  return (
    <>
    {/*<View style={styles.container}>
      <Text style={styles.mainTitle}>PASTILLERO VIRTUAL</Text>
  
      <View style={styles.inputContainer}> 
        <TextInput 
        style={styles.textInput} placeholder=" Medicamento"
        onChangeText= {onChangeTextHandler}
        value={textItem}
/>
        <Button title="Agregar" color='#297373' 
        onPress={addItemToList}
        />
  </View>*/}
  <CustomInput
   placeholderProp="Medicamento"
   textItemProp={textItem}
   
   onChangeTextHandlerEvent={onChangeTextHandler}
   addItemToListEvent={addItemToList}

/>

      <FlatList
      data={itemList}
      renderItem={renderListItem}
      keyExtractor={item=>item.id}
      />
  
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
    backgroundColor: '#EFE9F4',
    
    padding: 40  
  },
  mainTitle:{
    fontSize: 25,
    marginBottom: 30,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#090c9b", 
    color: "white",
    borderRadius: 10,

  },
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
   
});
