import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'


const NFTdate = ({date}) => {
  return (
    <View>
      <Text style={style.textdate}>{date}</Text>
    </View>
  )
}
const style=StyleSheet.create({
    textdate:{
        fontFamily:FONTS.semiBold,
        fontSize:SIZES.medium,
        color:COLORS.gray
    }
})

export default NFTdate