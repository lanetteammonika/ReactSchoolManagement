import React, {Component} from 'react';
import {Text, View, FlatList,Image,TouchableOpacity,Alert,Switch} from 'react-native';
import {connect} from 'react-redux';
import {getUsers,updateUserDetail} from './../../actions/RegistrationAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
class DisplayUser extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:0,
            activeState:'false'
        }
    }

    displayUser=()=>{
        debugger;
        this.props.getUsers();
    };

    componentDidMount=()=>{
        this.displayUser();
    };

    updateUserData=(id)=>{
        debugger;
        this.props.updateUserDetail(id).then((r)=>{
            console.log("Done");
        }).catch(err=>{
            console.log(err);
        })
    };
    renderRow = ({item, index}) => {
        return(
            <View style={{height:50,marginTop:10}} key={index}>
                {item &&
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{item.username}</Text>
                        {item.status==1?
                            <Switch value={true}
                                onValueChange={(value)=>{
                                    this.setState({activeState:value});
                                    this.updateUserData(item.user_id);
                                }}/>:
                            <Switch value={false}
                                    onValueChange={(value)=>{
                                    this.setState({activeState:value});
                                    this.updateUserData(item.user_id);
                                }}/>}
                    <View style={{paddingRight:5}}></View>
                </View>

                }
            </View>)
    };

    render() {
        let userData = _.filter(this.props.userDetail, {user_role:this.props.role});
        debugger;
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <FlatList
                    data={userData}
                    renderItem={this.renderRow}
                    keyExtractor={item=>item.username}
                />
            </View>

        )
    }

}
const mapStateToProps=(state)=>{
    return{
        userDetail:state.user.userDetail
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
    getUsers,updateUserDetail
})(DisplayUser);