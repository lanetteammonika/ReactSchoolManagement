import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {Header} from './common/Common';
import {connect} from 'react-redux';
import {deleteStudent} from './../actions/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentCommon from './common/StudentCommon';
import _ from 'lodash';
class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            sid:0
        }
    }


    deleteStud=(id)=>{
      this.props.deleteStudent(id).then((r)=>{
          console.log("Done");
      }).catch(err=>{
          console.log(err);
      })
    };
    alertDelete=()=>{
        Alert.alert(
            'Are you sure?',
            'This student will be removed from your profile ',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () =>{
                    this.deleteStud(this.state.sid);
                }},
            ]
        )
    };
    renderRow = ({item, index}) => {
        return(
            <View style={{height:50,marginTop:10}} key={index}>
                {item &&
                            <View style={styles.viewStyle}>
                                {item.Gender === true ?<Image style={styles.imgStyle} source={require(`./../image/Profile.png`)}/>:<Image style={styles.imgStyle} source={require(`./../image/Profile2.png`)}/>}
                                <Text style={styles.textStyle}>{item.student_name}</Text>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({sid:item.student_id});
                                    this.alertDelete();}
                                }>
                                    <Icon  style={styles.iconStyle} name="trash" size={25}></Icon>
                                </TouchableOpacity>
                            </View>

              }
            </View>)
    };

    render() {
        let studentData = _.filter(this.props.studentDetail, {state_temp:0});
        return (
           <StudentCommon
                data={studentData}
                renderItem={this.renderRow}
                keyExtractor={item=>item.student_name}
           />
        )
    }

}
const mapStateToProps=(state)=>{
  return{
      studentDetail:state.stud.studentDetail
  }
};
const styles={
    viewStyle:{
        borderWidth:0.5,
        borderRadius:5,
        shadowColor:'gray',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.2,
        borderColor:'#ddd',
        margin:5,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        flex:1
    },
    imgStyle:{
        height:25,
        width:30
    },
    textStyle:{
        paddingLeft:10,
        fontSize:16,
        flex:1
    },
    iconStyle:{
        color:'red',
        paddingRight:5
    }
};
export default connect(mapStateToProps,{
    deleteStudent
})(StudentDetail);