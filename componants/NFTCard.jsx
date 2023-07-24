import { View, Text, SafeAreaView, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styleCard'
import { SIZES } from '../constants'
import NFTImg from './NFTImg'
import NFTAvtar from './NFTAvtar'
import NFTtitle from './NFTtitle'
import NftInfo from './NftInfo'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native'







export default function NFTCard({NftCarde}) {
  const navigator=useNavigation()
  const pressHandler=()=>{
    navigator.navigate("nft",{NftCarde})
  } 
  return (
    <TouchableWithoutFeedback>
        <SafeAreaView  style={styles.container}>
    <TouchableOpacity onPress={pressHandler}>
      <NFTImg image={NftCarde.image} style={styles.imgeStyle} />
    </TouchableOpacity>
    <View style={styles.cardTop}>
     <NFTAvtar avtar={NftCarde.avatars}/>
    </View>
    <View style={styles.CardButtom}>
      <NFTtitle
      _name={NftCarde.name}
      creaor={NftCarde.creator}
      date={NftCarde.date}
      />
      <View style={{marginTop:SIZES.small+5}}>
          <NftInfo
          comments={NftCarde.comments}
          price={NftCarde.price}
          views={NftCarde.views}
          love
          />
      </View>
    </View>
  </SafeAreaView>
    </TouchableWithoutFeedback>
   )
   
  
}
const style=StyleSheet.create({
    imageCard:{
        width:"100%",
        height:300,
        borderRadius:30
    }
})


