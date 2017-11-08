import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';
import * as action from '../../redux/action/home';
import Swiper from "../../components/Swiper/index";
class Home extends React.Component{
    chooseLesson=(type)=>{
        this.props.setCurrentLesson(type);
    }
    componentDidMount(){
        this.props.getSlider();
    }
    render(){
        return(
            <div>
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content">
                    <Swiper data={this.props.home.sliders}/>
                </div>
            </div>
        )
    }
}

export default connect(state=>({...state}),action)(Home)