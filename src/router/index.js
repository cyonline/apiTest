const Router = require('koa-router');
const router = new Router();
// JSON Web Tokens 的中间件
const jwt = require('koa-jwt');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const config = require('../config/config')
// router.use(
//     jwt({
//         secret:config.JWT_SECRET,
//         cookie: 'token',
//         debug: true
//     }).unless({
//         path: [/\/public/]
//     })
// )

// koa2管道调用是基于promise的,所以在use里自定义函数的时候必须 加上async 然后 await next()
router.use(async (ctx,next)=> {
    // 如果是本地调试,就不验证token
        // console.info('router',ctx.header)
        if(ctx.header['host'] !== 'localhost:8001'){
            jwt({
                secret:config.JWT_SECRET,
                cookie: 'token',
                debug: true
            }).unless({
                path: [/\/public/]
            })
        }
        await next();
})


router.use(userRouter.routes());
router.use(loginRouter.routes());

module.exports = router;
