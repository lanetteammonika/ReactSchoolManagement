import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import {Header} from './common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ApiConstant from '../services/ApiConstant';
var dataArray=[];
class Account extends Component{
    constructor(props){
        super(props);
        const imgname=ApiConstant.baseUrl+props.userDetail.profile_pic;
        dataArray=props.navigation.state.params.data;
        console.log(dataArray.username);
        this.state={
            imgPath:imgname || ''
        };
        //console.log("sdfwe",dataArray);
    }
    render(){
        const {viewStyle,viewTextStyle,viewIconStyle,
            imgStyle,childViewStyle,txtStyle,settingsStyle,
            settingsTextStyle,viewLinkStyle,profileIcon,profileTextStyle,textBottomStyle}=styles;
        return(

            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <ScrollView
                automaticallyAdjustContentInsets={false}>
                    <View>
                        <Header headerText="Account" headIcon="at"/>
                        <View style={viewStyle}>
                            {this.props.userDetail.profile_pic != null?<Image style={[imgStyle,{borderRadius:45,borderColor:'gray',borderWidth:1}]} source={{uri:this.state.imgPath}} resizeMode="cover"/>:
                            <Image style={imgStyle} source={require('./../image/userIcon.png')} resizeMode="contain"/>}
                            <View style={childViewStyle}>
                                <Text style={txtStyle}>{dataArray.username||"Test"}</Text>
                                <Text style={txtStyle}>+91 {dataArray.mobile_no||9898255612}</Text>
                            </View>
                        </View>
                        <View style={settingsStyle}>
                            <Text style={settingsTextStyle}>SETTINGS</Text>
                        </View>

                                <TouchableOpacity style={viewLinkStyle} onPress={()=>{this.props.navigation.navigate('Profile',{data:dataArray})}}>
                                    <View style={viewIconStyle}>
                                        <Icon name="user-circle" size={20}/>
                                    </View>
                                    <View style={viewTextStyle}>
                                        <Text style={profileTextStyle}>Manage Profile</Text>
                                        <Icon style={profileIcon} name="angle-right" size={20}/>
                                    </View>
                                </TouchableOpacity>
                        {dataArray.user_role === 'admin'&&
                            <TouchableOpacity style={viewLinkStyle} onPress={()=>{this.props.navigation.navigate('Student')}}>
                                <View style={viewIconStyle}>
                                    <Icon name="user-plus" size={20}/>
                                </View>
                                <View style={viewTextStyle}>
                                    <Text style={profileTextStyle}>Add Student</Text>
                                    <Icon style={profileIcon} name="angle-right" size={20}/>
                                </View>
                            </TouchableOpacity>}

                        <View style={settingsStyle}>
                            <Text style={settingsTextStyle}>HELP</Text>
                        </View>
                            <TouchableOpacity style={viewLinkStyle} onPress={()=>{this.props.navigation.navigate('Help')}}>
                                <View style={viewIconStyle}>
                                    <Icon name="question-circle" size={20}/>
                                </View>
                                <View style={viewTextStyle}>
                                    <Text style={profileTextStyle}>Help</Text>
                                    <Icon style={profileIcon} name="angle-right" size={20}/>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={viewLinkStyle} onPress={()=>this.props.navigation.navigate('Login')}>
                                <View style={viewIconStyle}>
                                    <Icon name="sign-out" size={20}/>
                                </View>
                                <View style={viewTextStyle}>
                                    <Text style={profileTextStyle}>Log Out</Text>
                                    <Icon style={profileIcon} name="angle-right" size={20}/>
                                </View>
                            </TouchableOpacity>
                        <View style={textBottomStyle}>
                            <Text>Made with <Icon name="heart" size={15} style={{color:'red'}}/> in India</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles={
    viewStyle:{
        flexDirection:'row',
        backgroundColor:'rgb(249,250,252)',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    imgStyle:{
        flex:1,
        height:90,
        width:90,
        marginLeft:10,
        marginTop:5
    },
    childViewStyle:{
        flex:3,
        flexDirection:'column'
    },
    txtStyle:{
        paddingLeft:5,
    },
    settingsStyle:{
        height:50,
        backgroundColor:'rgb(249,250,252)',
        justifyContent:'center',
    },
    settingsTextStyle:{
        flex:0.5,
        marginLeft:20,
        marginTop:10
    },
    viewLinkStyle:{
        flexDirection:'row',
        height:40,
        marginTop:5
    },
    viewIconStyle:{
        flex:0.3,
        borderRadius:5,
        marginLeft:10,
        borderWidth:1,
        borderColor:'#ddd',
        alignItems:'center',
        justifyContent:'center'
    },
    viewTextStyle:{
        borderBottomWidth:0.7,
        borderColor:'#ddd',
        flex:3,
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    profileTextStyle:{
        flex:0.9
    },
    profileIcon:{
        flex:0.1
    },
    textBottomStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'',
        marginTop:40
    }
};
const mapStateToProps=(state)=>{
    return{
        userDetail:state.user.userDetail
    };
};
export default connect(mapStateToProps)(Account);