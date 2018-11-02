import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {NEWS_DETAIL} from "./Type";

export const getAllNews=(note)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.getNews,'get',note,{"Authorization":getState().user.userDetail.token}).then((res)=>{

            return Promise.all([
                dispatch({
                    type:NEWS_DETAIL,
                    payload:res.data
                })
            ]).then(res=>{
                return Promise.resolve(res.data)
            });
        }).catch((err)=>{

            return Promise.reject(res.data)
        })
    }

};