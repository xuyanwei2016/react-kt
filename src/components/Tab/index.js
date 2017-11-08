import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './index.less';
export default class Tab extends React.Component{
    render() {
        return (
            <div className="footer">
                <NavLink exact to="/" activeClassName='selected'><i className="iconfont icon-xingqiu"></i><span>首页</span></NavLink>
                <NavLink to="/lesson" activeClassName='selected'><i className="iconfont icon-react"></i><span>我的课程</span></NavLink>
                <NavLink to="/profile" activeClassName='selected'><i className="iconfont icon-xiaolian"></i><span>个人中心</span></NavLink>
            </div>
        )
    }
}
