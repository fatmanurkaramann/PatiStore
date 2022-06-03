import React, { useState } from "react"
import {View,Text,FlatList,StyleSheet} from "react-native"
import ProductCard from "./components/ProductCard"
import product_data from "./product_data.json"
import MyTextInput from "./components/MyTextInput"

const App=()=>{
  const renderItem=({item})=> <ProductCard product={item}></ProductCard>
  const keyExtractor=(item)=>item.id
  const [products,setProducts]=useState(product_data);
  const applyFilter = (text) =>{
    const filteredProducts = product_data.filter(product=>{
      var title = product.title.toLowerCase();
      var filterText = text.toLowerCase();
      return title.indexOf(filterText) > -1
    })
    setProducts(filteredProducts)
  }

  return(
    <View style={styles.container}>
      
      <FlatList
      ListHeaderComponent={<MyTextInput onChangeText={(text)=>applyFilter(text)}></MyTextInput>}
      numColumns={2}
      keyExtractor={keyExtractor}
      data={products}
      renderItem={renderItem}></FlatList>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default App