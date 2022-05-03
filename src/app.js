const Koa = require('koa');
// 跨域资源共享
const cors = require('koa2-cors');
// 解析post请求参数
const bodyParser = require('koa-bodyparser');
const {accessLogger,logger} = require('./middleware/log')
const errorHandle = require('./middleware/error-handle')

const app = new Koa();
// const Router = require('koa-router');
// const router = new Router();

// 注意顺序,必须在router之前被注册到app上
app.use(bodyParser());
app.use(errorHandle);


// 允许跨域访问
const CORS_CONF = require('./config/cors-config')
app.use(cors(CORS_CONF));


                                                                                            
// 全局使用日志中间件
app.use(accessLogger);
app.on('error',async (err,ctx)=>{
    logger.error(err);
    // console.info('捕捉报错:',err)

    
})


// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// const userRouter = require('./router/user.router');
const router = require('./router')

app.use(router.routes())
// 自动丰富response相应头，当未设置响应状态的时候自动设置，在所有路由中间件最后设置，也可以设置具体某一个路由，例如：router.get('/index', router.allowedMethods());这相当于当访问/index时才设置
.use(router.allowedMethods());



app.listen('8001',(res)=>{
    console.info('running')
})
