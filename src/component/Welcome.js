import React,{Component} from 'react';
import {Text,View,Image,Dimensions,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import connect from "react-redux/es/connect/connect";
import {logout} from "../actions/LoginAction";

class Welcome extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {loginImageStyle,childViewStyle,buttonStyle,textStyle,imgTextStyle}=styles;
        return(
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <Header headerText="Home" headIcon="home"/>
            <Text style={imgTextStyle}>Welcome {this.props.userDetail && this.props.userDetail.response.first_name}..!</Text>
            <ScrollView
                horizontal={true}
                style={styles.viewStyle}
                automaticallyAdjustContentInsets={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >

                <View style={childViewStyle}>
                    <View style={{flex:3}}>
                        <Image source={require('./../image/SHome.jpg')} style={loginImageStyle} resizeMode="contain"/>
                        <Text style={imgTextStyle}>Teacher</Text>
                        <Text style={imgTextStyle}>
                            Motivate students to do better in class.
                        </Text>
                    </View>
                </View>
                <View style={childViewStyle}>
                    <View style={{flex:3}}>
                        <Image source={require('./../image/SHome2.jpeg')} style={loginImageStyle} resizeMode="contain"/>
                        <Text style={imgTextStyle}>Parent</Text>
                        <Text style={imgTextStyle}>
                            Know what your child is upto in classroom.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        fontSize:16,
        color:'white'
    },
    imgTextStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignSelf:'center'
    },
    loginImageStyle:{
        height:350,
        backgroundColor:'white'
    },
    childViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        alignItems:'center',
        flex:1
    },
    buttonStyle:{
        backgroundColor:Color.darkColor,
        borderRadius:20,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:Color.lightColor,
        height:40,
        width:Dimensions.get('window').width-20,
        justifyContent:'center',
        alignItems:'center',
    }
};
// export default Welcome;



const mapStateToProps = (state) => {
    return {
        userDetail: state.user.userDetail
    };
};

export default connect(mapStateToProps)(Welcome);