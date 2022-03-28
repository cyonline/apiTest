const userModel = require('../model/user')
const query = async function(ctx){
    let result = await userModel.findAll('xxx');
    console.info(typeof result)
    console.info(result);
    return result
}
// const create = async function(){
//     let sql = `insert into user (value text) `;
//     let result = connection.query(sql);
// }

module.exports = {
    query,
}