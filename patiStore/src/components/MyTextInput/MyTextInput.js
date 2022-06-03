import React,{useState} from "react"
import {View,TextInput} from "react-native"
import styles from "./MyTextInput.style"

const MyTextInput=({onChangeText})=>{
   return(<View>
    <TextInput
     style={styles.input}
     onChangeText={onChangeText}
     />

    </View>
 )
   
}
export default MyTextInput;