import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';
import * as action from '../../redux/action/home';
import Swiper from "../../components/Swiper/index";
import './index.less';
import ScrollList from "../../components/ScrollList/index";
import utils from '../../common/utils';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    chooseLesson=(type)=>{
        this.props.setCurrentLesson(type);//只改变类型
        this.props.getLesson();
    }
    componentDidMount(){
        //判断redux是否存放了数据
        if(this.props.home.lesson.lessonList.length===0){
            this.props.getSlider();
            console.log(this.props)
            this.props.getLesson();
        }
        //让组件强制更新
        if(this.props.home.lesson.lessonList.length>0){
            this.refs.scroll.scrollTop=utils.get('homeLocation');
            this.forceUpdate();
        }

    }
    componentWillUnmount(){//组件将要销毁的时候
        utils.set('homeLocation',this.refs.scroll.scrollTop);
    }
    loadMore=()=>{
        this.props.getLesson();
    }
    render(){
        let {hasMore,isLoading,lessonList}=this.props.home.lesson;
        return (
            <div>
                <HomeHeader chooseLesson={this.chooseLesson}/>
                <div className="content" ref='scroll'>
                    <ScrollList element={this.refs.scroll}
                     isLoading={isLoading}
                     hasMore={hasMore}
                     loadMore={this.loadMore}
                    >
                    <Swiper data={this.props.home.sliders}/>
                    {/*课程列表*/}
                    <h3><i className='iconfont icon-kecheng-copy'></i>全部课程</h3>
                    {lessonList.length?lessonList.map((item,index)=>(
                        //跳转详情页 并且带上数据
                        <Link to={{pathname:'/detail',state:item}} key={index}>
                            <div className='lesson'>
                            <img src={item.url}/>
                            <p>{item.lesson}</p>
                            <span>{item.price}</span>
                        </div>
                        </Link>
                    )):<div>正在加载...</div>}
                        <button onClick={this.loadMore}>获取更多</button></ScrollList>
                </div>
            </div>
        );
    }
}

export default connect(state=>({...state}),action)(Home)