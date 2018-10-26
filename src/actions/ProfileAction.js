import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";
import _ from 'lodash';
// export const updateUser=(user)=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp+`/${user.user_id}`,'put',user,{}).then((res)=>{
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:res
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };
export const updateUser=(user)=>{
    return(dispatch,getState)=>{
        const data= new FormData();
        data.append('user_id',user.user_id);
        data.append('username',user.username);
        data.append('email',user.email);
        data.append('mobile_no',user.mobile_no);
        data.append('profile_pic',user.profile_pic);

        debugger;
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+"/fileupload"+`/${user.user_id}`,'put',data,{'Content-Type': 'multipart/form-data'}).then((res)=>{
            let userData = getState().user.userDetail;
            let userObject = _.find(userData,{user_id:user.user_id});
            let index = _.findIndex(userData, userObject);
            userData[index].profile_pic=user.profile_pic;
            userData[index].username=user.username;
            userData[index].email=user.email;
            userData[index].mobile_no=user.mobile_no;
            dispatch({
                type:USER_DETAIL,
                payload:_.cloneDeep(userData)
            });
            return Promise.resolve(userData);

        }).catch((err)=>{
            debugger
        })

    }

};
// export const getUser=()=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'get',{},{}).then((res)=>{
//             const data=res;
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:data
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };