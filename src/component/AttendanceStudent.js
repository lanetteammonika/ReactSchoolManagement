import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {connect} from 'react-redux';
import {attendanceStudent1} from './../actions/AttendanceAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudentCommon from './common/StudentCommon';
import {getAttendance} from './../actions/AttendanceAction';
import _ from 'lodash';
const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const day=date+"/"+month+"/"+year;
class AttendanceStudent extends Component {

    constructor(props){
        super(props);
        this.state={
            sid:0,
            colorCheck:'black',
            color:'black',
            studIdC:0,
            studIdW:0,
            flag:0,
            text:'',
            press:0
        };
    }
    getData=()=>{
        this.props.getAttendance().then((r)=>{
            if(r.msg == 'Done'){
                this.setState({flag:1});
                console.log("1");
            }else {
                this.setState({flag:0});
                console.log("0 fxgd");
            }
        }).catch(err=>{
            console.log(err);
        })
    };
    componentWillMount(){
        this.getData();
    }
    attendanceData=(id,val)=>{

        const data={
            status:val,
            student_id:id,
            date:day
        };
        this.props.attendanceStudent1(data).then((r)=>{
                console.log("Done");
        }).catch(err=>{
            console.log(err);
        })
    };
    renderRow = ({item, index}) => {

        console.log('attendancedata')
        console.log(item)
        return(
            <View style={{height:50,marginTop:10}} key={index}>
                {item && this.state.flag==0 &&
                <View style={styles.viewStyle}>
                    {item.Gender === true ?<Image style={styles.imgStyle} source={require(`./../image/Profile.png`)}/>
                        :<Image style={styles.imgStyle} source={require(`./../image/Profile2.png`)}/>}
                    <Text style={styles.textStyle}>{item.student_name}</Text>
                    <TouchableOpacity onPress={()=>{
                                    this.setState({colorCheck:'green',studIdC:item.student_id,color:'black',press:1});
                                    this.attendanceData(item.student_id,1);
                                    }
                                }>
                        {this.state.colorCheck == 'green' && this.state.studIdC == item.student_id?
                        <Icon  style={[styles.iconStyle,{color:this.state.colorCheck}]} name="check" size={25}></Icon>:
                            <Icon  style={[styles.iconStyle,{color:'black'}]} name="check" size={25}></Icon>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                                     this.setState({color:'red',studIdW:item.student_id,colorCheck:'black'});
                                     this.attendanceData(item.student_id,2);
                                  }
                                }>
                        {this.state.color == 'red' && this.state.studIdW == item.student_id?
                        <Icon  style={[styles.iconStyle,{color:this.state.color}]} name="times" size={25}></Icon>:
                        <Icon  style={[styles.iconStyle,{color:'black'}]} name="times" size={25}></Icon>}
                    </TouchableOpacity>
                </View>
                }

            </View>)
    };

    render() {
        let studentData = _.filter(this.props.studentDetail, {state_temp:0});
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const day=date+"/"+month+"/"+year;
        console.log('data---'+studentData);
        return (
            <StudentCommon
                data={studentData}
                renderItem={this.renderRow}
                keyExtractor={item=>item.student_name}
                date={day}
                done={this.state.flag}
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
        paddingRight:5
    }
};
export default connect(mapStateToProps,{
    attendanceStudent1,getAttendance
})(AttendanceStudent);