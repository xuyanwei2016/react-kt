 import React from 'react';
import ReactDOM from 'react-dom';
import profile from '../../../resource/images/profile.png';
import './index.less';
import {Link} from 'react-router-dom';
export default class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <div className="profile_bg">
                    <img src={profile} alt=""/>
                    <Link to={'/login'} className="login_btn">登录</Link>
                </div>
            </div>
        )
    }
}

