const Router = require('koa-router');
const loginRouter = new Router();
const loginController = require('../controller/login.controller');

// loginRouter.get('/login',login)
loginRouter.post('/public/authorize', loginController.authorize);
loginRouter.post('/public/register', loginController.register);
module.exports = loginRouter;