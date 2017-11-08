import {get,post} from './index';
let url='http://localhost:3001';
//注册接口
export const regs=(userInfo)=>{
    return post(url+'/reg',userInfo);
};