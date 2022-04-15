const Router = require('koa-router');
const router = new Router();
// JSON Web Tokens 的中间件
const jwt = require('koa-jwt');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const config = require('../config/config')
const secret = 'privatekeytest' // 定义一个密钥,测试用;应放在配置文件里
router.use(
    jwt({
        secret:config.JWT_SECRET,
        cookie: 'token',
        debug: true
    }).unless({
        path: [/\/authorize/]
    })
)



router.use(userRouter.routes());
router.use(loginRouter.routes());

module.exports = router;
