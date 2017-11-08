/*home里放的都是首页的信息*/
import * as Types from '../action-types';
let initState={
    currentLesson:0,
    sliders:[],//轮播图的数据
    lesson:{
        lessonList:[],
        hasMore:true,
        limit:5,
        
    }
}
export default  function (state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.val}
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders};

    }
    return state;

}