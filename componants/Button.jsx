import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({PressHandler,Icon,StyLesText,title,StylesButton }) {
  const RenderIconOrText=()=>{
      if (!Icon){
        return( <Text style={StyLesText}>{title}</Text>)
      }else{
        return Icon
      }
  }
  return (
    <TouchableOpacity style={StylesButton} onPress={PressHandler && PressHandler}>
      <RenderIconOrText/>
    </TouchableOpacity>
  )
}