import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";
import _ from 'lodash';
export const registerUser=(user)=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'post',user,{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:user
            })

        }).catch((err)=>{
            debugger
        })
    }

};

export const getUsers=()=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'get',{},{}).then((res)=>{
            debugger;
            dispatch({
                type:USER_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
            debugger
        })
    }
};
export const updateUserDetail=(id)=>{
    return(dispatch,getState)=>{
        debugger;
        let userData = getState().user.userDetail;
        let userObject = _.find(userData, {user_id: id});
        debugger;
        let val=userObject.status;
        if(val==0){
            debugger;
            val=1;
        }else{
            debugger;
            val=0;
        }
        let index = _.findIndex(userData, userObject);
        userData[index].status=val;
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+`/${id}`,'put',{},{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:_.cloneDeep(userData)
            });
            return Promise.resolve(userData);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};