const Router = require('koa-router');
const loginRouter = new Router();
const {login} = require('../controller/login.controller');

loginRouter.get('/login',login)

module.exports = loginRouter;