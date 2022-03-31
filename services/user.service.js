/* 
    service文件,负责与数据库交互
*/
const userModel = require('../model/user')
const query = async function(ctx){
    try{
        let result = await userModel.findAll();
        // console.info(typeof result)
        console.info(result);
        return result
    }catch(err){
        console.info(err);
        throw err;
    }
    
}
// const create = async function(){
//     let sql = `insert into user (value text) `;
//     let result = connection.query(sql);
// }

module.exports = {
    query,
}