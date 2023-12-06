import { StyleSheet,FlatList } from 'react-native'
import React from 'react'


const CustomFlatList = ({
 itemListProp,
renderListItemEvent,


}) =>{

  return (
         <FlatList
          style={styles.flatList}
          data={itemListProp}
          renderItem={renderListItemEvent}
          keyExtractor={(item) => item.id}
          
        />
      
  )
}

export default CustomFlatList
const styles = StyleSheet.create({


itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
   backgroundColor: "#BCEBCB",
    borderRadius: 10,
  }
});