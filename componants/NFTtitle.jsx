import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import NFTdate from './NFTdate'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from './Button';
const NFTtitle = ({_name,creaor,date}) => {
  return (
    <View>
    <View>
      <Text style={styles.textName}> {_name}</Text>
    </View>
    <View style={{
        flexDirection:"row-reverse",
        alignItems:"center",
        justifyContent:"space-between"
    }}>
         <View>
        <NFTdate date={date}/>
    </View>
    <View style={{
        flexDirection:"row-reverse",
        alignItems:"center",
        gap:SIZES.small
    }}>
        <MaterialCommunityIcons name="check-decagram" size={24} color="white" />
        <Text style={styles.textcreaor}>{creaor}</Text>
        
    </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    textName:{
        color:COLORS.white,
        fontFamily:FONTS.semiBold,
        fontSize:20
    },
    textcreaor:{
        color:COLORS.white,
        fontFamily:FONTS.regular,
        fontSize:16
    },
    button:{
        backgroundColor:COLORS.second,
        padding:16,
        width:150,
        borderRadius:20
    }
})
export default NFTtitle