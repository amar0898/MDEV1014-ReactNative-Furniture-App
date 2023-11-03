import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Button = ({title,onPress})=>{
    return(
<TouchableOpacity style={styles.btnStyle}>
    <Text style={styles.btnText}>{title}</Text>
</TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnText:{
        fontFamily:"bold",
        fontSize:18,
        color:COLORS.white
    },

    btnStyle:{
height:50,
width:'100%',
marginVertical:20,
backgroundColor:COLORS.primary,
alignItems:"center",
justifyContent:"center",
borderRadius:12
    }
})