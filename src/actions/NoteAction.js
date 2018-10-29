import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {NOTE_DETAIL} from "./Type";

export const insertNote=(note)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.insertNote,'post',note,{"Authorization":getState().user.userDetail.token}).then((res)=>{
            return Promise.all([
                dispatch({
                    type:NOTE_DETAIL,
                    payload:res.data
                })
            ]).then(r=>{
                return Promise.resolve(res.data)
            });
        }).catch((err)=>{
            debugger
            return Promise.reject(res.data)
        })
    }

};