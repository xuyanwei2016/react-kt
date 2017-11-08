import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {withRouter} from 'react-router-dom';
class Mheader extends React.Component{
    back=()=>{
        //goBack是在this.props.history上的 但是必须是路由点击才能有
        this.props.history.goBack();

    }
    render(){
        return(
            <div className="Mheader">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
}

export default withRouter(Mheader)
