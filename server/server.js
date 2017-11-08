//模拟后台
let express = require ('express');
let app=express();

let bodyParser = require('body-parser');//解析请求体的
app.use(bodyParser.json());//将数据转化成对象放到req.body上
let session = require('express-session'); //session中间件
let mongoStore = require('connect-mongo')(session);//把session存到数据库中
app.use(session({
    resave:true,//每次是否从新保存
    saveUninitialized:true,//每次保存未初始化的session
    secret:'zfpx',//给cookie加密
    store:new mongoStore({
         url:'mongodb://localhost:27017/ketang',
        /* host: 'localhost',    //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
         port: 27017,          //数据库的端口号
         db: 'test-app'        //数据库的名称。*/
    })
}));
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
});

//实现注册功能
let crypto = require('crypto');
//md5摘要算法
//1.任意字符串转换出来的大小都相同
//2.不同内容转化出来的值不同
//3.不可逆
let md5 = (val)=>{
    return crypto.createHash('md5').update(val).digest('hex')
};
let User = require('./model');
app.post('/reg',function (req,res) {
    //加密密码
    req.body.password=md5(req.body.password);
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
            //当前已经注册过了
            res.json({err:'用户存在了'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user=doc;//将当亲用户存到session中
                res.json(req.session.user);
            })
        }
    })

})
/*app.post('/reg',function(req,res){
    req.body.password=md5(req.body.password);
    console.log(req.body);
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
            res.json({err:'用户已经存在'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user=doc;//将当前用户信息存入到session中
                res.json(req.session.user)
            })
        }
    })

});*/
//用户是否是登录状态
/*app.get('/auth',function (req,res) {
    if(){}
})*/
