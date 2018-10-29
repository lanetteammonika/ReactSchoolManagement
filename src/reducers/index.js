import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
import FileReducer from './FileReducer';
import NotesReducer from './NotesReducer';
import NewsReducers from './NewsReducers';

export default combineReducers({
    user:UserReducer,
    stud:StudentReducer,
    file:FileReducer,
    notes:NotesReducer,
    news:NewsReducers
})
