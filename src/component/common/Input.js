import React from 'react';
import {TextInput, Text, View, Image, ImageBackground} from 'react-native';
import Color from './../../helper/theme/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Input =({...props})=>{
    return(
     <View style={inputStyles.containerStyle}>
         {/*<Image source={selectedIcon} resizeMode="contain"/>*/}

         {props.imageType == 'MaterialCommunityIcons' && <MaterialCommunityIcons name={props.selectedIcon} size={30} color={props.textcolor} /> ||
         (props.imageType == 'AntDesign' && <AntDesign name={props.selectedIcon} size={30} color={props.textcolor} /> ||
             (props.imageType == 'Octicons' && <Octicons name={props.selectedIcon} size={30} color={props.textcolor} /> ||
             (props.imageType == 'Entypo' && <Entypo name={props.selectedIcon} size={30} color={props.textcolor} /> ||
                 (props.imageType == 'MaterialIcons' && <MaterialIcons name={props.selectedIcon} size={30} color={props.textcolor} /> ||
                     <MaterialIcons name={props.selectedIcon} size={30} color={props.textcolor} />))))}

         {/*<Icon name={selectedIcon} size={30} color="white" />*/}


         {/*<Text style={inputStyles.textStyle}>{label}</Text>*/}
         <TextInput
             secureTextEntry={props.secureTextEntry}
             placeholder={props.placeholder}
             autoCorrect={false}
             value={props.value}
             onChangeText={props.onChange}
             style={[inputStyles.inputStyle,{color: props.textcolor}]}
             keyboardType={props.keyboardType||'default'}
             editable={props.editable||true}
             placeholderTextColor={props.textcolor}
         />
     </View>
    )
};

const inputStyles={
    textStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        color:Color.lightColor
    },
    inputStyle:{
        fontSize:18,
        paddingRight:5,
        paddingLeft:15,
        lineHeight:23,
        flex:2
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
};
export {Input}