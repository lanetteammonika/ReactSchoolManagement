import React,{Component} from 'react';
import {Text,View,Image,Dimensions,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Color from './../helper/theme/Color';
import {Header} from './common/Common';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { getAllNews } from '../actions/NewsAction';
import {loginUser} from "../actions/LoginAction";
import {connect} from "react-redux";

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: {}
        };
    }

    componentDidMount() {
        this.props.getAllNews().then((res)=>{
            debugger;
        }).catch((err)=>{
            debugger
        })
        console.log(this.props.news);
        debugger
    }
    componentWillReceiveProps() {
        console.log(this.props.news);
        debugger
    }
    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={'2018-10-16'}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#666'},
                    //    '2017-05-09': {textColor: '#666'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                    // monthFormat={'yyyy'}
                    // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                />
            </SafeAreaView>
        )
    }
}

const styles={
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        fontSize:16,
        color:'white'
    },
    imgTextStyle:{
        fontSize:16,
        color:'black',
        justifyContent:'center',
        alignSelf:'center'
    },
    loginImageStyle:{
        height:350,
        backgroundColor:'white'
    },
    childViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        alignItems:'center',
        flex:1
    },
    buttonStyle:{
        backgroundColor:Color.darkColor,
        borderRadius:20,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:Color.lightColor,
        height:40,
        width:Dimensions.get('window').width-20,
        justifyContent:'center',
        alignItems:'center',
    }
};
const mapStateToProps=(state)=>{
    return{
        news: state.newsDetail
    };
};
export default connect(mapStateToProps,{getAllNews})(NewsList);
