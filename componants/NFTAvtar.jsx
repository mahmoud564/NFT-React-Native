import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NFTAvtar = ({avtar}) => {
   
  return (
   
    <View style={style.container}>
        {avtar.map((img)=>{
            return (<Image
             key={img.id }
              source={img.image}
               style={style.avatar}
                resizeMode='contain'/>)})}
      
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        flexDirection:"row",paddingHorizontal:5
    },
    avatar:{
        width:40,
        height:40,
        marginLeft:-5,
        borderRadius:40
    }
})
export default NFTAvtar