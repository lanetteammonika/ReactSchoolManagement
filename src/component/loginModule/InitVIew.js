import React,{Component } from "react";
import {Alert, Button, TextInput, View, AsyncStorage} from "react-native";
import {loginUser} from "../../actions/LoginAction";
import {connect} from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

class InitView extends Component{

     //Mark : - During Mouting

    //All Init method declaration here 111
    constructor(props){
        super(props);

    }

    //Call second method will show 222
    componentWillMount(){

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: this.props.userDetail.user_type  &&
                    (this.props.userDetail.user_type == 'Teacher' &&
                        'TeacherTab' || (this.props.userDetail.user_type == 'ParentTab' &&
                            'ParentTab' || 'Tab')) || 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);

    }

    render() // 3333
    {
        return (
            <View>

            </View>
        );
    }
}

const mapStateToProps = state =>{
    return {
        userDetail: state.user.userDetail
    };
};

export default connect(mapStateToProps,{loginUser})(InitView);
