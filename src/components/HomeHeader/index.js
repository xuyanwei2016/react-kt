import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import logo from '../../../resource/images/logo.png';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends React.Component{
    constructor(){
        super();
        this.state={isShow:false}
    }
    changeShow=()=>{
        this.setState({isShow:!this.state.isShow})
    }
    choose=(e)=>{

        this.props.chooseLesson(e.target.getAttribute('type'))
        this.changeShow();
    }
    render() {
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img src={logo}/>
                    <div onClick={this.changeShow}>
                        {this.state.isShow?<i className="iconfont icon-uilist"></i>:<i className="iconfont icon-guanbi"></i>}
                    </div>
                </div>
                <TransitionGroup>
                    {this.state.isShow?<CSSTransition timeout={1000} classNames="fadeIn">
                            <ul className="menu-list" onClick={this.choose}>
                                <li type="1">nodeke培训</li>
                                <li type="2">html培训</li>
                                <li type="3">视频课程</li>
                                <li type="4">文档课件</li>
                            </ul>
                        </CSSTransition>:null}
                </TransitionGroup>



            </div>
        )
    }
}
