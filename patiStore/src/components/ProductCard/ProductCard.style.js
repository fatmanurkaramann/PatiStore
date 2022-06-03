import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
      
        margin:5,
        flex:0.5,
        backgroundColor:"#e0e0e0",
        padding:10,
        borderRadius:10
    },
    image:{
        height:200,
       resizeMode:"contain",
       borderRadius:10


    },
    title:{
        fontSize:17,
        color:"black"
    },
    price:{
        fontWeight:"bold",
        color:"blue"
    },
    stock:{
        color:"red",
        fontWeight:"bold",
        fontSize:17
    }

})