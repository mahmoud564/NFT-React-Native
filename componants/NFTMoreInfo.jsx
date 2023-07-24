import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const NFTMoreInfo = (
    {Address,tokenId,blockchain,tokenSt}
) => {
  return (
    <SafeAreaView style={{paddingHorizontal:15 ,marginTop:10}}>
     <View style={style.Details}>
        <Text style={style.title}>Contract Address</Text>
        <Text style={style.value}>{Address}</Text>
     </View>
     <View style={style.Details}>
        <Text style={style.title}>Token ID</Text>
        <Text style={style.value}>{tokenId}</Text>
     </View>
     <View style={style.Details}>
        <Text style={style.title}>Token Standerd</Text>
        <Text style={style.value}>{tokenSt}</Text>
     </View>
     <View style={style.Details}>
        <Text style={style.title}>Block Chain</Text>
        <Text style={style.value}>{blockchain}</Text>
     </View>
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
    Details:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor:COLORS.cardBg,
        borderBottomWidth:1,
        marginVertical:SIZES.small-4
    },
    title:{
        color:COLORS.white
    },
    value:{
        color:COLORS.gray,
        marginBottom:SIZES.small-2
    }
})

export default NFTMoreInfo