import * as Types from '../action-types';

let initState={
    userInfo:{},//里面用户的信息 如名字、密码、头像
    err:''//可能是用户已存在
};
export default function (state=initState,action) {
    switch(action.type){
        case Types.SET_ERROR:
            return {...state,err:action.err}
        case Types.SET_USER_INFO:
            return {...state,userInfo:action.userInfo,err:''}

    }
    return state
}