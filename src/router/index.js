const Router = require('koa-router');
const router = new Router();

const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const config = require('../config/config')
const authorization = require('../middleware/authorize')


router.use(authorization.verifyAuth())

router.use(userRouter.routes());
router.use(loginRouter.routes());

module.exports = router;
