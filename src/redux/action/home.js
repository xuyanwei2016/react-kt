import * as Types from '../action-types';
import {getSliders} from '../../api/home';
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