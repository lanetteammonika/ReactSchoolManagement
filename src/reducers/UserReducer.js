import {USER_DETAIL,LOGOUT} from '../actions/Type';
const INTIAL_STATE={
    userDetail: [],
    userData:[]
};

export default (state=INTIAL_STATE,action)=> {
    debugger;
    switch (action.type) {
        case USER_DETAIL:
            // console.log("Data"+action.payloa);
            return {...state, userDetail: action.payload,userData:action.payload};
        case LOGOUT:
            return state=INTIAL_STATE;
        default:
            return state;
    }
}