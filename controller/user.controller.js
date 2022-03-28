const userSevice = require('../services/user.service')

const getUser = async function (ctx, next) {
    try {
        let res = await userSevice.query();
        console.info('user', res)
        ctx.response.status = 200;
        ctx.body = res;
    } catch (err) {
        ctx.response.status = 400;
        ctx.body = res;
    }

}





module.exports = {

    getUser: getUser
};