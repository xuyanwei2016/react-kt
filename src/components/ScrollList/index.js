import React from 'react';
import ReactDOM from 'react-dom';
//element：表示滚动元素
//isLoading：是否正在加载
//hasMore：是否有更多
//loadMore：获取更多的方法
export default class ScrollList extends React.Component{
    constructor(){
        super();
        this.state={flag:false}
    }
    //等待接收的属性有element是在绑定事件
    componentWillReceiveProps(nextProps){
        //当父组件加载完成之后 再加载子组件 用其他声明周期都是子组件先加载
console.log('1111')
        if(nextProps.element&&!this.state.flag){

            nextProps.element.addEventListener('scroll', () => {
                //节流
                clearTimeout(this.timer);
                this.timer=setTimeout(()=>{
//判断 scrollTop，offsetHeight，scrollHeight
                    let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;
                    if(scrollTop+offsetHeight+20>scrollHeight&&this.props.hasMore&&!this.props.isLoading){
                        this.props.loadMore();
                    }
                },50)

            });
            this.setState({flag:true})
        }

    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

