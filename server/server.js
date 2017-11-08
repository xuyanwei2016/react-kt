let express=require('express');
let app=express();
app.listen(3000);
app.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");//允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许的方法
    res.header("Access-Control-Allow-Credentials",' true');//允许跨域设置cookie
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);
    else next();
})
let slider=require=require('./mock/slider');
app.get('/slider',function (req,res) {
    res.json(slider)
})