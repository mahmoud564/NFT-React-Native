import { View, Text, Image, SafeAreaView, Animated, BackHandler, Alert } from 'react-native'

import React, { useEffect, useRef } from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import nft08 from '../assets/images/nft08.jpg'
import nft04 from '../assets/images/nft04.jpg'
import nft06 from '../assets/images/nft06.jpg'
import { styles } from './style'
import Button from '../componants/Button'
import { useNavigation } from '@react-navigation/native'


const WellCome = () => {
  BackHandler.addEventListener('hardwareBackPress', function () {

  })
  const Navigation=useNavigation()
  const PressHandler=()=>{
   Navigation.navigate("Home")
  }
  const FadeImgesANmishan =useRef(new Animated.Value(0)).current
  const MoveImgesANmishan=useRef(new Animated.ValueXY({x:100 ,y:100})).current
  const MoveButtonANmishan=useRef(new Animated.Value(1)).current
 const FadeTextAnmishan =useRef(new Animated.Value(0)).current
 const TextAnmashanHandler=()=>{
Animated.timing(FadeTextAnmishan,{
  toValue:1,
  duration:1000,
  delay:1300,
  useNativeDriver:true,
}).start()
 }
 
  const ImgesANmishanHandler=()=>{
Animated.sequence( [
    Animated.timing(FadeImgesANmishan,{
  toValue:1,
  duration:1000,
  useNativeDriver:true
}),
Animated.spring(MoveImgesANmishan,{
  toValue:{x:0,y:0},
  duration:1000,
  useNativeDriver:true,
})]).start()
  }
  const ButtonAnmetedHandler=()=>{
    Animated.spring(MoveButtonANmishan,{
      toValue:0,
      friction:4,
      delay:1300,
      useNativeDriver:true
    }).start()
  }
  const ExetHandler=()=>{
    Alert.alert('Exet App','Are You Sure your exet App',[
      {
        text:"Cancel",
        onPress:()=>null,
        style:'cancel'
      },{
        text:"ok",
        onPress:()=>BackHandler.exitApp()
      }])
    return true
      }
  useEffect(() => {
         let backHandler = BackHandler.addEventListener('hardwareBackPress',ExetHandler)
    ImgesANmishanHandler()
    TextAnmashanHandler()

    ButtonAnmetedHandler()
    return()=> backHandler.remove()
  }, [ImgesANmishanHandler,TextAnmashanHandler,ButtonAnmetedHandler])
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.imgContainer,{opacity:FadeImgesANmishan,
          transform:MoveImgesANmishan.getTranslateTransform()}]}>
        <View style={styles.imageCard}>
        <Image style={styles.image} source={nft06}/>
        </View>
        <View style={[styles.imageCard,{top:SIZES.medium+17}]}>
        <Image style={styles.image} source={nft08}/>
        </View>
        <View style={styles.imageCard}>
        <Image style={styles.image} source={nft04}/>
        </View>
      </Animated.View>
      <Animated.View style={[styles.TextCntainer,{
        opacity:FadeTextAnmishan
      }]}>
         <Text style={styles.TextMain}>Find, Collect and Sell Amazing NFTs </Text>
         <Text style={styles.SupText}> Explore the top collection of NFTs and buy and sell your as well</Text>
      </Animated.View>
<Animated.View style={[styles.buttonContainer,{
  transform:[{
    translateY:MoveButtonANmishan.interpolate({
      inputRange:[0,1],
      outputRange:[0,200]
    })
  }]
}]}>
<Button
PressHandler={PressHandler} StylesButton={styles.button} StyLesText={styles.TextButton} title="Get Started"/>

</Animated.View>
    </SafeAreaView>
  )
}

export default WellCome


