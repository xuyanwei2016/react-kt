export const get=(url)=>{
    return fetch(url,{
        method:'get',
        credentials:'include',//跨域携带cookie
        headers:{
            accept:'application/json'
        }
    }).then(res=>res.json())
};
export const post=(url,data)=>{
    return fetch(url,{
        method:'post',
        credentials:'include',
        header:{
            'Content-Tpye':'application/json',
            accept:'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
}