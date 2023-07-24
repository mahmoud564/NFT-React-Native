import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from './Button'
import { StatusBar } from 'react-native'
import { COLORS } from '../constants'
import { Feather } from '@expo/vector-icons';
const NFTImg = ({image,style,arrow,PressHandler}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={style}/>
      {arrow&& <Button StylesButton={styles.arrow}
      Icon={<Feather name='arrow-left' size={20} color={COLORS.second}/>}
      PressHandler={PressHandler&&PressHandler}
      />}
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:"100%",
        position:"relative",

    }
    ,
    arrow:{
      position:"absolute",
      top:StatusBar.currentHeight+10,
      left:10,
      backgroundColor:COLORS.white,
      padding:10,
      borderRadius:40
    }
})

export default NFTImg