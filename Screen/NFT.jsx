import { View, Text, SafeAreaView, StyleSheet ,Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import NFTImg from '../componants/NFTImg'
import NFTAvtar from '../componants/NFTAvtar'
import NFTtitle from '../componants/NFTtitle'
import NftInfo from '../componants/NftInfo'
import NFTMoreInfo from '../componants/NFTMoreInfo'
import Button from '../componants/Button'
import { FontAwesome } from '@expo/vector-icons';


const NFT = ({route,navigation}) => {
const moveanmichan=useRef(new Animated.Value(0)).current
const moveButon=useRef(new Animated.Value(0)).current
const duration=1000
const delay =300

const moveanmichanHandler=()=>{
  Animated.spring(moveanmichan,{
    toValue:1,
    friction:6,
    tension:80,
    useNativeDriver:true
  }).start()
}
const moveButonHandler=()=>{
  Animated.timing(moveButon,{
    toValue:1,
    duration,
    delay,
    useNativeDriver:true
  }).start()
}

  const PressHandler=()=>{
    navigation.goBack()
  }
  const {NftCarde}=route.params

  useEffect(() => {
    moveanmichanHandler()
    moveButonHandler()
   
  }, [moveButonHandler,moveanmichanHandler])
  
  return (
    <SafeAreaView style={style.container}>
     <Animated.View style={{flex:1,transform:[{translateY:moveanmichan.interpolate({
      inputRange:[0,1],
      outputRange:[200,0]
     })}]}}>
<NFTImg
image={NftCarde.image}
style={style.imgStyle}
arrow
PressHandler={PressHandler}
 />
  <View style={{marginTop:-SIZES.xLarge ,marginLeft:SIZES.medium}}>
      <NFTAvtar avtar={NftCarde.avatars}
      key={NftCarde.avatars.id}
      />
     </View>
     <View style={{padding:15}}>
     <NFTtitle
     _name={NftCarde.name}
     creaor={NftCarde.creator}
     date={NftCarde.date}
     />
     </View>
     <View style={{paddingHorizontal:15}}>
     <NftInfo
     price={NftCarde.price}
     views={NftCarde.views}
     comments={NftCarde.comments}
     />
     </View>
     <View>
      <NFTMoreInfo
      Address={NftCarde.address}
      tokenId={NftCarde.tokenId}
      tokenSt={NftCarde.tokenSt}
      blockchain={NftCarde.blockchain}
      />
     </View>
     </Animated.View>
     <Animated.View style={[style.ButtonContainer,{opacity:moveButon}]}>
    <View style={style.wrebber }>
<View style={{alignItems:"center"}}>

  <Text style={style.Text}>Top bid</Text>
  <View style={{flexDirection:"row" ,
  alignItems:"center",
  gap:2,
  padding:SIZES.small-4
}}>
  <FontAwesome name="dollar" size={15} color="white"  style={{marginStart:5}}/>
  <Text style={style.Text}>{NftCarde.topBid}</Text>
  </View>
</View>
<View>
<View>
        <Button
        title={"Place a bid"}
        StylesButton={style.button}
        StyLesText={style.textName}
        />
    </View>
</View>
    </View>
     </Animated.View>
    
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.bg
  },
  imgStyle:{
    width:400,
    height:400,
    borderRadius:20
  },
  ButtonContainer:{
    width:"100%",
    position:"absolute",
    bottom:SIZES.small,
    justifyContent:"center",
    alignItems:"center",
    zIndex:1 
    
  },
  wrebber:{
    width:300,
    backgroundColor:COLORS.cardBg,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20,
    borderRadius:20 
  },
  Text:{
    fontFamily:FONTS.semiBold,
    fontSize:SIZES.medium,
    color:COLORS.white
  },  button:{
    backgroundColor:COLORS.second,
    padding:16,
    width:150,
    borderRadius:20,
    textAlign:"center"
},
textName:{
  color:COLORS.white,
  fontFamily:FONTS.semiBold,
  fontSize:18,
  textAlign:"center"

},
})
export default NFT