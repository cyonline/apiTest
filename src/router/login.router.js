const Router = require('koa-router');
const loginRouter = new Router();
const {authorize,register} = require('../controller/login.controller');

// loginRouter.get('/login',login)
loginRouter.get('/public/authorize', authorize);
loginRouter.post('/public/register', register);
module.exports = loginRouter;