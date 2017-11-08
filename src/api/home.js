//所有home的接口都放在这里
import {get,post} from './index';
//所有的接口都加s
//最终我们调用的是getSliders方法 调用这个方法之后就可以拿到数据
let url='http://localhost:3001';
//获取轮播图
export const getSliders=()=>{
    return get(url+'/slider');
}
