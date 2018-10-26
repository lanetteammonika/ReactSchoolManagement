import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";

export const loginUser=(user)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+ApiConstant.login,'post',user,{}).then((res)=>{
            return Promise.all([
                dispatch({
                    type:USER_DETAIL,
                    payload:res.data
                })
            ]).then(r=>{
                return Promise.resolve(res.data)
            });
        }).catch((err)=>{
            debugger
        })
    }

};``