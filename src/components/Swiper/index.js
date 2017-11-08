import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './index.less';
export default class Swiper extends React.Component {
    constructor(){
        super();
        this.state={index:0};
    }
    render() {
        let opts={
            continuous: true,
            callback:(index)=>{
                this.setState({index:index})
            }
        }
        return (
            <div className='swipe'>
                {this.props.data.length?<ReactSwipe className="carousel" swipeOptions={opts}>

                    {this.props.data.map((item,index)=>(
                        <div key={index}>
                            <img src={item}/>
                        </div>
                    ))
                    }
                </ReactSwipe>:<div>正在加载</div>}
                <div className="dots">
                    {this.props.data.map((item,index)=>(
                        <span key={index} className={index===this.state.index?'active':''}></span>
                    ))}
                </div>
            </div>
        );
    }
}
