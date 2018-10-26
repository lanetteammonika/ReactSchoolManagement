import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {ATTENDANCE_DETAIL} from "./Type";

export const attendanceStudent1=(stud)=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.attendance,'post',stud,{}).then((res)=>{
            debugger;
            dispatch({
                type:ATTENDANCE_DETAIL,
                payload:stud
            });
        }).catch((err)=>{
            debugger
        })
    }

};
export const getAttendance=()=>{
    debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.attendance,'get',{},{}).then((res)=>{
            debugger;
            dispatch({
                type:ATTENDANCE_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
            debugger
        })
    }
};