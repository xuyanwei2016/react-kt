/*home里放的都是首页的信息*/
import * as Types from '../action-types';
let initState={
    currentLesson:0,
    sliders:[],//轮播图的数据
    lesson:{
        lessonList:[],
        hasMore:true,
        limit:5,
        offset:0,
        isLoading:false,

    }
}
export default  function (state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,
                currentLesson:action.val,
                lesson:{
                    ...state.lesson,
                    lessonList:[],
                    offset:0,
                }
            }
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders};
        case Types.GET_LESSONS:
            return {...state,
                lesson:{
                ...state.lesson,
                    hasMore:action.hasMore,
                    lessonList:[...state.lesson.lessonList,...action.lessons],
                    offset:state.lesson.offset+action.lessons.length,
                    isLoading:false
                }}
        case Types.SET_LOADING_STATUS:
            return {
                ...state,lesson:{
                    ...state.lesson,
                    isLoading:true,
                }
            }

    }
    return state;

}