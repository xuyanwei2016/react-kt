import React from 'react';
import ReactDOM from 'react-dom';
import Tab from '../components/Tab/index';
export default class Add extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
                <Tab></Tab>
            </div>
        )
    }
}