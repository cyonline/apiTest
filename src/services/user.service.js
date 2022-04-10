/* 
    service文件,负责与数据库交互
*/
const userModel = require('../model/user')
// const { logger } = require('../middleware/log')

const query = async function(user){
    try{
        console.info('user:',user);
        let filters = {}
        if(user){
            filters = {
                where: user
            }
        }
        let result = await userModel.findAll(filters);
        // console.info(typeof result)
        // console.info(result);
        return result
    }catch(err){
        // logger.error(err);
        throw err;
    }
    
}

const createUser = async function(user){
    try {
        console.info(user);
        let res = await userModel.create({
            name: user.userName,
            password: user.password,
            id: user.userId
        })
        return res;
    } catch (error) {
        // logger.error(error);
        throw error;
    }
}

module.exports = {
    query,
    createUser
}