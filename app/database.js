const Sequelize = require('sequelize')
const config = require('./config');

// 建立连接池,与数据库进行连接
// const connection = mysql.createConnection({
//     host:'localhost',
//     port: '3306',
//     database: 'cykoa',
//     root: 'root',
//     user: 'root',
//     password: '123456'
// });
const sequelize = new Sequelize('cykoa', 'root', '123456', {
    host: config.dev.host,
    port: '3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
// 测试链接是否成功
sequelize.authenticate().then(() => {
    console.log('Databese connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
// 根据 model自动创建表
sequelize
    .sync()
    .then(() => {
        console.log('init db ok')
    })
    .catch(err => {
        console.log('init db error', err)
    })

// connection.connect();

// connection.query('select * from user',(err,res)=>{
//     console.log('查询结果',res);
// })
// connection.query('insert into user value("cy","123456","0")',function(a,b){
//     console.log(a)
//     console.log(b)
// })
// connection.end();

module.exports = sequelize;