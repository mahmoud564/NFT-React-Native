import { View, SafeAreaView,Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS, DATA, FONTS, SIZES } from '../constants'
import NFTCard from '../componants/NFTCard'
import HomeHeader from '../componants/HomeHeader'
import { StatusBar } from 'react-native'
import { FlashList } from "@shopify/flash-list";
const NotFoundNft = ()=>{
  return(
    <View style={style.NotFound}>
      <Text style={style.NotFoundText}>Opps... !</Text>
      <Text style={style.NotFoundText}>NOT Found The NFT </Text>
    </View>
  )
}

const Home = () => {
  const [isrefresh, setisrefresh] = useState(false)
  const refreshHandler=()=>{
    setisrefresh(true)
    setTimeout(()=>{
      setisrefresh(false)
    },1000)
  }

 
  const [Data, setData] = useState(DATA)
  const SearshHandler=(Value)=>{

    if (Value.nativeEvent.text) {
      const falterData=DATA.filter((nft)=>nft.name.toLowerCase().includes(Value.nativeEvent.text.toLowerCase()))
        setData(falterData)
        

      }else{setData(DATA)}
    
    
  }

  
  return <SafeAreaView style={style.container}>
    <StatusBar/>
      <View >
        
        <HomeHeader SearshHandler={SearshHandler}/>

        {!Data.length? <NotFoundNft/>:
        <>
        <FlatList
        onRefresh={refreshHandler}
        refreshing={isrefresh}
    data={Data}
    renderItem={({item})=>
    <NFTCard NftCarde={item}/>
    }
    estimatedItemSize={200}
    keyExtractor={(item)=>item.id}
    />
        </>
        }
    
      </View>
    </SafeAreaView>
    
}
const style=StyleSheet.create({
  container:{
    paddingTop:40,
    flex:1,
    backgroundColor:COLORS.bg
  },
  NotFound:{
   
    alignItems:"center",
    paddingVertical:SIZES.xLarge+100,
    justifyContent:"center"
  },
  NotFoundText:{
    color:COLORS.white,
    fontFamily:FONTS.bold,
    fontSize:SIZES.xLarge,

  }
})

export default Home