const mysql = require('mysql');

// const config = require('./config');

// 建立连接池,与数据库进行连接
const connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    database: 'cykoa',
    root: 'root',
    user: 'root',
    password: '123456'
});

connection.connect();

connection.query('select * from user',(res)=>{
    console.log(res);
})

connection.end();

module.exports = connection;