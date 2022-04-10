const Router = require('koa-router');
const router = new Router();
const userRouter = require('./user.router');
const loginRouter = require('./login.router');

router.use(userRouter.routes());
router.use(loginRouter.routes());

module.exports = router;
