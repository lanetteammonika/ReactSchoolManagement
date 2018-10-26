import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
import FileReducer from './FileReducer';

export default combineReducers({
    user:UserReducer,
    stud:StudentReducer,
    file:FileReducer
})
