import { COLORS, FONTS, SIZES } from '../constants'
import {StyleSheet} from 'react-native'


export const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:SIZES.small+10,
          alignItems:"center",
          justifyContent:"center",  
      backgroundColor:COLORS.bg
    },
    imgContainer:{
      top:-SIZES.medium,
      flexDirection:"row",
      gap:SIZES.small
    },
    image:{
      width:200,
      height:200,
      borderRadius:SIZES.medium
    },
    imageCard:{
      borderRadius:SIZES.medium,
      padding:SIZES.small,
      backgroundColor:COLORS.cardBg
    },
    TextCntainer:{
      padding:SIZES.small,
      margin:SIZES.small,
      marginVertical:SIZES.xLarge+6
    },
    TextMain:{
      fontFamily:FONTS.bold,
      fontSize:SIZES.xLarge+6,
      textAlign:"center",
      color:COLORS.white
    },
    SupText:{
      fontFamily:FONTS.light,
      textAlign:"center",
      marginTop:SIZES.large,
      color:COLORS.gray
    },
    buttonContainer:{
        position:"absolute",
        bottom:SIZES.xLarge+10,
        marginVertical:SIZES.xLarge
    },
    button:{
     backgroundColor:COLORS.second,
     padding:SIZES.small+4,
     width:240,
     alignItems:"center",
     borderRadius:SIZES.medium
    },
    TextButton:{
        color:COLORS.white,
        fontFamily:FONTS.semiBold,
        fontSize:SIZES.large 
    }
  
  })