import {ATTENDANCE_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    attendanceDetail: []
};

export default (state=INTIAL_STATE,action)=> {
    debugger;
    switch (action.type) {
        case ATTENDANCE_DETAIL:
            return {...state, attendanceDetail: action.payload};
        default:
            return state;
    }
}