/* 
    controller 用来负责serivce和请求的交互(请求相关配置,报错处理)
*/
const userSevice = require('../services/user.service')
const {logger} = require('../middleware/log')

const getUser = async function (ctx, next) {
    try {
        let data = await userSevice.query();
        console.info('user', data)
        ctx.response.status = 200;
        ctx.body = {
            code: '200',
            msg: 'success',
            data
        };
    } catch (err) {
        ctx.response.status = 400;
        logger.error(err);
        // console.info(err);
        ctx.body = {
            code: '400',
            msg: 'error',
            data: null,
        };
    }

}





module.exports = {

    getUser: getUser
};