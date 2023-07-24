import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from './Button';


const NftInfo = ({comments,price,views,love}) => {
  return (
    <View style={styles.container}>
        <View style={styles.wreber}>
        <Entypo name="eye" size={24} color="white"  style={{marginStart:5}}/>
        <Text style={styles.text}>{views}</Text>
        </View>
        <View style={styles.wreber}>
        <FontAwesome name="comments" size={24} color="white"  style={{marginStart:5}} />
        <Text style={styles.text}>{comments}</Text>
        </View>
        <View style={styles.wreber}>
        <FontAwesome5 name="ethereum" size={24} color="white"  style={{marginStart:5}}/>
        <Text style={styles.text}>{price}</Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    wreber:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.second,
        width:90,
        borderRadius:SIZES.xLarge,
        paddingVertical:3,
        gap:4
    },
    text:{
        fontFamily:FONTS.medium,
        fontSize:SIZES.medium,
        color:COLORS.white
    },
    ButtonHart:{
        backgroundColor:COLORS.bg,
        padding:5,
        borderRadius:20,
        borderWidth:1,
        borderColor:COLORS.second
    }
})

export default NftInfo