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

connection.query('select * from user',(err,res)=>{
    console.log('查询结果',res);
})
connection.query('insert into user value("cy","123456","0")',function(a,b){
    console.log(a)
    console.log(b)
})
connection.end();

module.exports = connection;