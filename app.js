const Koa = require('koa');
const app = new Koa();
// const Router = require('koa-router');
// const router = new Router();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
}); 


// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

const userRouter = require('./router/user.router');
const router = require('./router')

app.use(router.routes())
// 自动丰富response相应头，当未设置响应状态的时候自动设置，在所有路由中间件最后设置，也可以设置具体某一个路由，例如：router.get('/index', router.allowedMethods());这相当于当访问/index时才设置
.use(router.allowedMethods())

app.listen('3000',(res)=>{
    console.info('running')
})
