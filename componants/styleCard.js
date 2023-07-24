import { COLORS, SIZES } from "../constants";
import {StyleSheet } from 'react-native'
export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.cardBg,
        borderRadius:SIZES.medium,
        marginBottom:SIZES.xLarge,
        marginHorizontal:SIZES.small-5,
        padding:12,
        marginHorizontal:14
    },
    cardTop:{
        width:"100%",
        paddingHorizontal:SIZES.medium,
        marginTop:-30,
        flexDirection:"row",
        justifyContent:"space-between"
    }
    ,
    CardButtom:{
        padding:SIZES.medium,
        width:"100%"
    },
    imgeStyle:{
        width:"100%",
        height:300,
        borderRadius:30
    }
})