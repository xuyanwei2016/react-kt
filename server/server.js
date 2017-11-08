//模拟后台
let express = require ('express');
let app=express();

app.listen(3001);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");//允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许的方法
    res.header("Access-Control-Allow-Credentials",' true');//允许跨域设置cookie
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回 如果发的是options请求 响应ok 即可*/
    else  next();
});
//获取轮播图数据 当访问/slider是把数据返回
let sliders=require('./mock/slider');
app.get('/slider',function(req,res){
    res.json(sliders)
});
let lessonList=require('./mock/lessonList')
app.get('/lessonlist/:type/:limit/:offset',function (req,res) {
    res.json(lessonList)
})