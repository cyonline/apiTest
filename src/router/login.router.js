const Router = require('koa-router');
const loginRouter = new Router();
const {login} = require('../controller/login.controller');

loginRouter.get('/login',login)
loginRouter.get('/auth', async (ctx, next) => {
    // debugger;
    console.info(ctx);
    ctx.body = '1'
    // ctx.body = ctx.state.user; // 该中间件将验证后的用户数据直接返回给浏览器
    next();
});
module.exports = loginRouter;