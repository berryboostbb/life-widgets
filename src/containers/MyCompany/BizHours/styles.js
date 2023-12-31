import { StyleSheet,Dimensions } from 'react-native';
import colors from "../../../config/color/color";
import FontFamily from "../../../config/fonts/fontfamily";
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.white,
    },
    scrolledview:{
      paddingBottom:15,
      flex:1,
    },
    heading:{
      fontFamily:FontFamily.Medium,
      fontSize:16,
      color:colors.black
    },
    titleBold:{
      fontFamily:FontFamily.Medium,
      fontSize:16
    },
    textGray:{
      fontFamily:FontFamily.Regular,
      fontSize:14,
      color:colors.gray
    },
    text:{
      fontFamily:FontFamily.Regular,
      fontSize:14,
      color:colors.black
    },
    primarytext:{
      fontFamily:FontFamily.Regular,
      fontSize:16,
      color:colors.primary
    },
    dangertext:{
      fontFamily:FontFamily.Regular,
      fontSize:16,
      color:'red'
    },
    boxShadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
    DatePicker:{
      backgroundColor:colors.lightGray,
      borderRadius:6,
      flex:1,
      marginLeft:15
    },
    ListPanel:{
      marginBottom:13
    },
    ListPanelHeader:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:colors.lightGray,
      padding:5,
      paddingLeft:15,
      paddingRight:15,
      
    },
    ListPanelBody:{
      paddingLeft:15,
      paddingRight:15
    },
    noBorder:{
      borderBottomWidth:0
    },
    separator:{
      marginTop:13,
      marginBottom:13
    },
    listContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:13,
      borderBottomWidth:1,
      borderColor:colors.lightGray
    },
    listtitleContainer:{
      flex:1,
    },
    editOpacity:{
      padding:8,
      justifyContent:'center'
    },
    listContainerRight:{
      flex:1,
      flexDirection:'row',
      borderBottomWidth:1,
      borderColor:colors.lightGray,
    },
    timeListContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
    },
    timeList:{
      flexDirection:'row',
      alignItems:'center',
    },
    noPadding:{
      paddingBottom:0
    },
    noTopMargin:{
      marginTop:0
    },
    chipOpacity:{
      backgroundColor:colors.lightGray,
      width:25,
      height:25,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:4,
      borderWidth:1,
      borderColor:colors.gray
    },
    birthdayList:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:13,
      marginBottom:13
    },
    roundedtextinput:{
      backgroundColor:colors.white,
      borderRadius:6,
      paddingLeft:10,
      paddingRight:10,
      height: 40,
      flex:1,
      marginTop:13
    },
    timeInput:{
      flex:3
    },
    weakDays:{
      flex:1,
      textAlign:'right'
    },
    barSearchChips:{
      marginTop:13,
    },
    activecustomchip:{
      backgroundColor:colors.primary,
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      paddingLeft:15,
      paddingRight:15,
      borderRadius:20,
      marginRight:8
    },
    activecustomchiptext:{
      color:colors.white,
      fontFamily:FontFamily.Medium,
    },
    customchip:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:colors.lightGray,
      padding:10,
      paddingLeft:15,
      paddingRight:15,
      borderRadius:20,
      marginRight:8
    },
    customchiptext:{
      fontFamily:FontFamily.Medium,
    },
    headRightOpacity:{
      width:60,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    headRightText:{
      fontFamily:FontFamily.Medium,
      color:colors.primary,
      fontSize:15
    },
  });
  
export default styles;