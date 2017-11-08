import * as Types from '../action-types';
export const setCurrentLesson=(val)=>{
    return{
        type:Types.SET_CURRENT_LESSON,
        val
    }
}