/* 
    controller 用来负责serivce和请求的交互(请求相关配置,报错处理)
*/
const userSevice = require('../services/user.service')
// const { logger } = require('../middleware/log')
const urllib = require('url');

const register = async function (ctx) {
    try {
        let params = ctx.req.body;
        // console.info('req:',req);
        let data = await userSevice.createUser(params);
        // console.info('user', data)
        ctx.response.status = 200;
        ctx.body = {
            code: '200',
            msg: 'success',
            data
        };
    } catch (err) {

    }

}

const getUser = async function (ctx, next) {
    try {
        // let params = ctx.req.url;
        let obj = urllib.parse(ctx.req.url, true);
        console.info('query', JSON.stringify(obj.query))
        let params = JSON.stringify(obj.query) !== '{}' ? {
            name: obj.query.username || '',
            password: obj.query.password || ''
        } : {};
        console.info(params);
        // console.info(p.query);
        // console.info(p.query.sex);
        // logger.error(ctx)
        let data = await userSevice.query(params);
        // console.info('user', data)
        ctx.response.status = 200;
        ctx.body = {
            code: '200',
            msg: 'success',
            data
        };
    } catch (err) {
        ctx.response.status = 400;
        // logger.error(err);
        // console.info(err);
        ctx.body = {
            code: '400',
            msg: 'error',
            data: err,
        };
    }

}





module.exports = {
    register: register,
    getUser: getUser
};