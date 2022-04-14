const Router = require('koa-router');
const router = new Router();
// JSON Web Tokens 的中间件
const jwt = require('koa-jwt');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');

const secret = 'privatekeytest' // 定义一个密钥,测试用;应放在配置文件里
router.use(
    jwt({
        secret,
        cookie: 'token',
        debug: true
    }).unless({
        path: [/\/auth/]
    })
)



router.use(userRouter.routes());
router.use(loginRouter.routes());

module.exports = router;
