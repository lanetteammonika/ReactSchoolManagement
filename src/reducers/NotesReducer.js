import {NOTE_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    noteDetail: []
};

export default (state=INTIAL_STATE,action)=> {
    debugger;
    switch (action.type) {
        case NOTE_DETAIL:
            return {...state, noteDetail: action.payload};
        default:
            return state;
    }
}