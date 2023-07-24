import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import avtar from '../assets/images/avatars/avatar02.jpg'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native'

const HomeHeader = ({SearshHandler}) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
          source={avtar}
          resizeMode='contain'
          style={{width:44,height:44,borderRadius:30}}
          />

        </View>
        <View>
          <View style={{flexDirection:"row", alignItems:"center",gap:4}}>
            <Text style={style.userText}>
              Mahmoud Mohamed
            </Text>
            <MaterialCommunityIcons name="check-decagram" size={24} color="white" />
          </View>
          <View>
            <Text style={{color:COLORS.white}}>
              Creator
            </Text>
          </View>
          
        </View>
      </View>
      <View style={{marginTop:SIZES.small,paddingHorizontal:10}}>
          <View style={style.SearshContainer}>
          <EvilIcons name="search" size={24} color="white" />
          <TextInput
          placeholder='Searsh By NFT Name'
          placeholderTextColor={COLORS.white}
          style={{flex:1,color:COLORS.white}}
          onChange={SearshHandler}
          />
          </View>
        </View>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    padding:SIZES.small
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    gap:16,
    paddingHorizontal:10
  },
  userText:{
    color:COLORS.white,
    fontFamily:FONTS.semiBold,
    fontSize:SIZES.xLarge,

 }
 ,
 SearshContainer:{
  width:"100%",
  borderRadius:SIZES.small,
  backgroundColor:COLORS.cardBg,
  flexDirection:"row",
  paddingVertical:8,
  alignItems:"center",
  paddingHorizontal:10,
  marginVertical:20,

 }
})

export default HomeHeader