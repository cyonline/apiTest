const log4js = require('koa-log4');

// Log config
log4js.configure({
    replaceConsole: true,
    appenders: {
        console:{
            type: 'console'
        },
        access:{
            type: 'dateFile', // 日志名带日期
            maxLogSize: 5*1000*1000,
            backups: 50,
            // compress: true, // 压缩成 .gz 
            filename: 'logs/access.log',
            pattern: '-yyyy-MM-dd',
            keepFileExt: true, // 保留文件拓展名
        },
        error: {
            type: 'file',
            filename: 'logs/error.log'
        }
    },
    categories: {
        default: {
            appenders: ['access'],
            level: 'info'
        },
        error: {
            appenders: ['error'],
            level: 'error'
        }
    },
    // pm2: true, // (可选, boolean) pm2环境下则这里必须设置为true，否则日志将不会工作
});

const accessLogger = log4js.koaLogger(log4js.getLogger('access'),{level:'info'});
const logger = log4js.getLogger('error')
// Open logger
// logger.level = 'all';
// logger.debug("Logger已经开启！");

module.exports = {
    accessLogger,
    logger
};