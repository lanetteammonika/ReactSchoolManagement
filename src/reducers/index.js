import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
import FileReducer from './FileReducer';
import {LOGOUT} from '../actions/Type'

const appReducer = combineReducers({
    user:UserReducer,
    stud:StudentReducer,
    file:FileReducer
});

export default function rootReducer(state,action) {
    let finalstate = appReducer(state,action)
    if (action.type  == LOGOUT){
        finalstate = {
            user:UserReducer,
            stud:StudentReducer,
            file:FileReducer
        }
    }
    return finalstate;

}