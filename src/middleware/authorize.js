const jwt = require('jsonwebtoken')
const fs = require('fs');
const path = require('path');
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../static/key/private.pem'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../static/key/public.pem'))

const newToken = (payload) => {
    // sign() params: payload(token的具体内容,有标准字段,也可添加自定义的) secret(密钥),options(其他选项) expiresIn "1d", "20h", 60
    let token = jwt.sign(payload, PRIVATE_KEY, { expiresIn: 60*60, algorithm: 'RS256' })
    console.info('newToken', token)
    return token;
}
const verifyAuth = function () {
    return async (ctx, next) => {
        try {
            // ctx.header['host'] !== 'localhost:8001'
            if (!/\/public/.test(ctx.request.url)) {
                const authorization = ctx.header.authorization
                if (!authorization) {
                    throw Error('没有token')
                }
                const token = authorization.replace('Bearer ', '');
                // console.info('tk', token)
                const res = jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] })
                // console.info('verify:', res)    
            }
            await next();
        } catch (error) {
            throw error;
        }

    }
}

module.exports = {
    newToken,
    verifyAuth,
}