import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import _ from 'lodash';

import {STUDENT_DETAIL} from "./Type";

export const newStudent=(stud)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signIn,'post',stud,{}).then((res)=>{
            dispatch({
                type:STUDENT_DETAIL,
                payload:stud
            });
        }).catch((err)=>{
        })
    }

};

export const getStudents=()=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signIn,'get',{},{}).then((res)=>{
            dispatch({
                type:STUDENT_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
        })
    }
};
export const deleteStudent=(id)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signIn+`/${id}`,'delete',{},{}).then((res)=>{
            let studentData = getState().stud.studentDetail;
            let studObject = _.find(studentData, {student_id: id});
            // let studIndex = studentData.findIndex(studObject);
            let index = _.findIndex(studentData, studObject);
            studentData[index].state_temp=1;
            dispatch({
                type:STUDENT_DETAIL,
                payload:_.cloneDeep(studentData)
            });
            return Promise.resolve(studentData);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};

