const connection = require('../app/database');

const query = async function(){
    let sql = `select * from user`;
    let result = connection.query(sql,(err,row)=>{
        if(err){
            throw err;
        }
        console.log(res);
        return res;
    })
    console.log('result:',result);
}
const create = async function(){
    let sql = `insert into user (value text) `;
    let result = connection.query(sql);
}

module.exports = {
    query,
}