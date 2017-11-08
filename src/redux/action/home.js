import * as Types from '../action-types';
import {getLessons, getSliders} from '../../api/home';
export const setCurrentLesson=(val)=>{
    return{
        type:Types.SET_CURRENT_LESSON,
        val
    }
}
//如果使用reduxThunk actionCreator可以返回一个函数 函数中有dispatch参数
export const getSlider=()=>(dispatch)=>{ //异步的 用rudexThunk解决
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        })
    })
};

export const getLesson=()=>(dispatch,getState)=>{
    //从redux中取出limit type offset getState=store.getState
    let {currentLesson,lesson:{hasMore,limit,offset}}=getState().home;
    if(!hasMore){return}//没有就不要获取
    //将isLoading状态改成true
    dispatch({
        type:Types.SET_LOADING_STATUS
    })
    getLessons(currentLesson,offset,limit).then(lesson=>{
        dispatch({
            type:Types.GET_LESSONS,
            ...lesson
        })
    })
}