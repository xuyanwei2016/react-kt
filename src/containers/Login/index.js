import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Mheader from "../../components/Mheader/index";
import profile from '../../../resource/images/profile.png';
import {Link} from 'react-router-dom';
export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <Mheader title={"首页"}/>
                <img src={profile} alt=""/>
                <ul>
                    <li><input type="text" placeholder="请输入用户名"/></li>
                    <li><input type="text" placeholder="请输入密码"/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li><a href="" className="login_btn">登录</a></li>
                </ul>
            </div>
        )
    }
}

