import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from "../constants";

const BackBtn = ({onPress})=>{
    return(
<TouchableOpacity onPress={onPress} style={styles.backBtn}>
   <Ionicons
   name = 'chevron-back-circle'
   color={COLORS.primary}
   size={30}
   />

</TouchableOpacity>
    )
}


export default BackBtn

const styles = StyleSheet.create({
    backBtn:{
        alignItems:"center",
        zIndex:999,
        position:"absolute",
        top:SIZES.large-10

    }
})