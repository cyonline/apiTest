module.exports = {
    origin: function(ctx){
        console.info(ctx.url+'---')
        let corsResult = '';
        // if(ctx.url === '/user/list'){ // 设置允许来自指定域名的请求
        //     return '*';  // 允许来自所有域名请求
        // }
        const whiteList = ['http://cyonline.club','http://localhost:3000','http://localhost:8001'];
        let url = ctx.header.referer.substr(0,ctx.header.referer.length - 1);
        if(whiteList.includes(url)){
            corsResult = url
            return corsResult  // 
        }
        corsResult = '*'
        console.info('corsResult',corsResult)
        return corsResult // 默认本地
    },
    maxAge: 5, // 指定本次预检请求的有效期,单位为秒
    credentials: true, // 是否允许发送cookies
    allowMethods: ['GET','POST','PUT','DELETE','OPTIONS'], // 设置允许的http请求方法
    allowHeaders: ['Content-Type','Authorization','Accept'], // 设置服务器支持的所有头部信息字段
    exposeHeaders: ['WWW-Authenticate','Server-Authorization'] // 设置获取其他自定义字段
}