import * as Types from '../action-types';
import {regs} from '../../api/user';
export const reg=(userInfo)=>(dispatch)=>{

    regs(userInfo).then(data=>{
        if(data.err){
            dispatch({
                type:Types.SET_ERROR,
                err:data.err
            })
        }else{
            dispatch({
                type:Types.SET_USER_INFO,
                userInfo:data
            })
        }
    })
}