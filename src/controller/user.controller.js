/* 
    controller 用来负责serivce和请求的交互(请求相关配置,报错处理)
*/
const userService = require('../services/user.service')
// const { logger } = require('../middleware/log')
const urllib = require('url');
const utils = require('../utils/utils')

module.exports = {
    userLogin: async function (ctx) {
        try {
            console.info('query:', ctx.request.query)
            // let obj = urllib.parse(ctx.req.url, true);
            let params = {
                name: ctx.request.query.username || '',
                password: ctx.request.query.password || ''
            };
            console.info('userLogin:', params);
            let res = await userService.userLogin(params);
    
            let data = utils.dataHandle(res);
            console.info('结果;', data);
            let msg = '';
            let code = '200'
            if (data.length > 0) {
                if (data[0].password == params.password) {
                    msg = '登录成功!'
                    data = data[0]
                    delete data.password;
                } else {
                    code = 201;
                    msg = '用户名密码不匹配!';
                    data = null
                }
            } else {
                code = 202;
                msg = '用户不存在!';
                data = null
            }
            ctx.response.status = 200;
            ctx.body = {
                code,
                msg,
                data
            }
        } catch (error) {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: 'error',
                data: error,
            };
            throw error
        }
    },
    register: async function (ctx) {
        try {
            let params = ctx.req.body;
            // console.info('req:',req);
            let data = await userService.createUser(params);
            console.info('user', data)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            };
        } catch (error) {
            throw error
        }
    
    },
    getUser: async function (ctx, next) {
        try {
            // let params = ctx.req.url;
            let obj = urllib.parse(ctx.req.url, true);
            // console.info('query', JSON.stringify(obj.query))
            let params = JSON.stringify(obj.query) !== '{}' ? {
                name: obj.query.username || '',
                password: obj.query.password || ''
            } : {};
            // console.info(params);
            // console.info(p.query);
            // console.info(p.query.sex);
            // logger.error(ctx)
            let data = await userService.query(params);
            console.info('user', data)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            };
        } catch (error) {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: 'error',
                data: error,
            };
        }
    
    },
    getUserInfo: async function (ctx, next) {
        try {
            let uid = ctx.request.query.userId || '';
            console.info(uid);
            let data = await userService.getUserInfo(uid);
            delete data.password
            console.info('user', data)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success',
                data
            };
        } catch (error) {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: 'error',
                data: error,
            };
        }
    },
    updateUserInfo: async function (ctx, next) {
        try {
            
        } catch (error) {
            
        }
    }
};