const loginService = require('../services/login.service')
const utils = require('../utils/utils')
const config = require('../config/config')
const authorization = require('../middleware/authorize')
const JSEncrypt = require('node-jsencrypt')
const fs = require('fs');
const path = require('path');
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../static/key/private.pem')).toString();

const login = async function(ctx,next){
    ctx.body = 'this is login'
}

const authorize = async function(ctx){
    try {
        const decrypt = new JSEncrypt()
        decrypt.setPrivateKey(PRIVATE_KEY)
        let username = decrypt.decrypt(ctx.request.body.username)
        let password = decrypt.decrypt(ctx.request.body.password)
        let params = {
            name: username || '',
            password: password || ''
        };
        console.info('userLogin:',params);
        let data = await loginService.authorize(params);

        // let data = utils.dataHandle(res);  
        console.info('登录结果;',data);
        let msg = '';
        let code = 200;
        if(!utils.isEmpty(data)){
            if(data.password == params.password){
                msg = '登录成功!'
                // 根据用户名和密码生成token,传回前端
                let payload = {
                    // iss：Issuer，发行者
                    // sub：Subject，主题
                    // aud：Audience，观众
                    // exp：Expiration time，过期时间
                    // nbf：Not before
                    // iat：Issued at，发行时间
                    // jti：JWT ID
                    name: data.name
                }
                let token = authorization.newToken(payload)
                // console.info('token:',token);
                data = {
                    access_token: token,
                    expiresTime: new Date().getTime()+1000*60,
                    username: data.name,
                    userid: data.id
                }
            }else{
                code = 201;
                msg = '用户名密码不匹配!';
                data = null
            }
        }else{
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
}
const register = async function (ctx){
    try {
        let params = {
            name: ctx.request.body.username,
            password: ctx.request.body.password,
            email: ctx.request.body.email,
        };
        // console.info('register:',ctx.request.body);
        let data = await loginService.register(params);
        // console.info('xx',data)
        let code = 200;
        let msg = '注册成功!'
        if(!data){
            code = 203
            msg = '用户已存在,请勿重复添加';
        }
        
        ctx.response.status = 200;
        ctx.body = {
            code: code,
            msg: msg,
            data:null
        };
    } catch (error) {
        throw error
    }
}
module.exports = {
    authorize,
    register,
    login
}