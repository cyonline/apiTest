module.exports = {
    origin: function(ctx){
        try {
            // console.info(ctx.url+'---')
            let corsResult = '';
            if(ctx.header['sec-fetch-mode'] === 'navigate'){ // 设置允许来自指定域名的请求(这里允许直接在浏览器地址栏请求)
                return '*';  // 允许来自所有域名请求
            }
            const whiteList = [];
            let url = ctx.header.referer.substr(0,ctx.header.referer.length - 1);
            // console.info('ctx.header.referer:',ctx.header)
            console.info(url);
            if(whiteList.includes(url)){
                corsResult = url
                return corsResult  // 
            }
            corsResult = '*'
            console.info('跨域',corsResult)
            return corsResult // 默认本地
        } catch (error) {
            throw error
        }
        
    },
    maxAge: 5, // 指定本次预检请求的有效期,单位为秒
    credentials: true, // 是否允许发送cookies
    allowMethods: ['GET','POST','PUT','DELETE','OPTIONS'], // 设置允许的http请求方法
    allowHeaders: ['Content-Type','Authorization','Accept'], // 设置服务器支持的所有头部信息字段
    exposeHeaders: ['WWW-Authenticate','Server-Authorization'] // 设置获取其他自定义字段
}