//这里存放的是公用的js方法
export default {
    set(key,value){
        if(typeof value==='object'){
            value=JSON.stringify(value)
        }
        sessionStorage.setItem(key,value)
    },
    get(key){
        //如果是object类型 返回JSON.parse的结果
        let value=sessionStorage.getItem(key)||'';
        if(value.startsWith('{')||value.startsWith('[')){
            value=JSON.parse(value)
        }
        return value;
    }
}



