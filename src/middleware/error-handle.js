


const errorHandle = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        console.info('handleerror',error)
        ctx.response.status = 400;
        ctx.body = {
            code: 401,
            msg: error.message,
            data: error,
        };
        return
    }
}

module.exports = errorHandle;