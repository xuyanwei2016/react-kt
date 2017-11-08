//封装一个fecth方法 是为了获取数据

export const get=(url)=>{
    return fetch(url,{
        method:'get',//获取的方法
        credentials:'include',//跨域携带cookie
        headers:{
            accept:'application/json'//返回数据的类型
        }
    }).then(res=>res.json())
};
export const post=(url,data)=>{
    return fetch(url,{
        method:'post',
        credentials:'include',
        headers:{
            //告诉发送的请求是什么格式
            'Content-Type':'application/json',
            accept:'application/json'//拿到的也是json
        },
        body:JSON.stringify(data),//传数据的时候不能是对象
    }).then(res=>res.json())
}






