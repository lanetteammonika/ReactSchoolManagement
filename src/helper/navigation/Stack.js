import React from 'react';
import Login from './../../component/Login';
import Registration from './../../component/Registration';
import Tab from './Tab';
import ParentTab from './ParentTab';
import TeacherTab from './TeacherTab';
import Profile from './../../component/Profile';
import Student from './../../component/Student';
import Help from './../../component/Help';
import Lecture from './../../component/Lecture';
import {createStackNavigator} from 'react-navigation';
import Report from './../../component/Report';
import Timetable from './../../component/Timetable';
import GetStart from './../../component/getStarted';
import NotesList from './../../component/NotesList';
import NewsList from './../../component/NewsList';

const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Registration:{
            screen:Registration
        },
        Tab:{
            screen:Tab
        },
        ParentTab:{
            screen:ParentTab
        },
        TeacherTab:{
            screen:TeacherTab
        },
        Profile:{
            screen:Profile
        },
        Student:{
            screen:Student
        },
        Help:{
            screen:Help
        },
        Lecture:{
            screen:Lecture
        },
        Report:{
            screen:Report
        },
        Timetable:{
            screen:Timetable
        },
        GetStart:{
            screen:GetStart
        },
        NotesList:{
            screen:NotesList
        },
        NewsList:{
            screen:NewsList
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;