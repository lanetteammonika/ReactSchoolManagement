import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import {TabView,TabBar,SceneMap} from 'react-native-tab-view';
import Student from './StudentDetail';
import AttendanceStudent from './AttendanceStudent';
class StudentsDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0,
            routes: [
                { key: 'Students', title: 'Students' },
                { key: 'AttendanceStudent', title: 'Attendance' ,getAccessible:false}
            ]
        }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.viewStyle}>
                <TabView navigationState={this.state}
                         onIndexChange={index=>this.setState({index})}
                         renderScene={SceneMap({
                             Students:Student,
                             AttendanceStudent:AttendanceStudent
                         })}
                         style={styles.tabStyle}
                         tabStyle={{backgroundColor:"red"}}
                />
            </View>
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
        color:Color.lightColor,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:4,
        margin:10
    },
    tabStyle:{
        backgroundColor:Color.lightColor,
    }
};
export default StudentsDisplay;