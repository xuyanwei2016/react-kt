import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Mheader from "../../components/Mheader/index";
import profile from '../../../resource/images/profile.png';
import {connect} from 'react-redux';
import * as action from '../../redux/action/user';
class Reg extends React.Component{
    reg=()=>{
        //console.log(this.username.value,this.password.value);
        this.props.reg({username:this.username.value,password:this.password.value})

    }
    render(){
        return(
            <div className="login">
                <Mheader title={"注册"}/>
                <img src={profile} alt=""/>
                <ul>
                    <li><input type="text" placeholder="用户名" ref={(element)=>{
                        this.username=element;
                        //通过this.username.value就可以拿到里面的内容
                    }}/></li>
                    <li><input type="text" placeholder="密码" ref={(element)=>{
                        this.password=element;
                    }}/></li>
                    <li><button className="login_btn" onClick={this.reg}>注册</button></li>
                    <li>{this.props.user.err}</li>
                </ul>
            </div>
        )
    }
}

export default connect(state=>({...state}),action)(Reg)
