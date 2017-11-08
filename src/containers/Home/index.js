import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';
import * as action from '../../../redux/action/home';
class Home extends React.Component{
    chooseLesson=(type)=>{
        this.props.setCurrentLesson(type);
    }
    render(){
        return(
            <div>
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content">

                </div>
            </div>
        )
    }
}

export default connect(state=>({...state}),action)(Home)