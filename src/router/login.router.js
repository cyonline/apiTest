const Router = require('koa-router');
const loginRouter = new Router();
const {authorize} = require('../controller/login.controller');

// loginRouter.get('/login',login)
loginRouter.get('/authorize', authorize);
module.exports = loginRouter;