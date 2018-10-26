import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity} from 'react-native';
import {Header} from './common/Common';
import Color from './../helper/theme/Color';
class Help extends Component{
    constructor(props){
        super(props);
        this.state={
            isBack:true,
            iName:'chevron-left'
        }
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={styles.viewStyle}>
                <Header
                    headerText="Help"
                    headIcon="question-circle"
                    onBackButtonPress={this.onBackButtonPress}
                    isBack={this.state.isBack}
                    iName={this.state.iName}
                />
                <Text style={styles.textStyle}>For any help contact on:</Text>
                <Text style={styles.textHeadStyle}>+91 7600923449</Text>
            </View>


        )
    }
};

const styles={
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        color:Color.extraDark,
        marginTop:30

    },
    textHeadStyle:{
        alignSelf:'center',
        fontSize:18,
        color:Color.darkColor
    }
};
export default Help;