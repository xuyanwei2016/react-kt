import React from 'react';
import ReactDOM from 'react-dom';
export default class Detail extends React.Component{
    componentWillMount(){
        if(!this.props.location.state){
            this.props.history.push('/');
        }
    }

    render(){
//如果没有此属性 对象属性默认undefined结构会出错
        console.log(this.props.location.state);
        let {url,price,lesson}=this.props.location.state||{};
        return(
            <div>
                {/*<img src={this.props.location.state.url} alt=""/>*/}
                <img src={url} alt=""/>
                <p>{lesson}</p>
                <span>{price}</span>
            </div>
        )
    }
}

