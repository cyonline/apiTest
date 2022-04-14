/* 
    service文件,负责与数据库交互
*/
const userModel = require('../model/user')
const query = async function (user) {
    try {
        console.info('user:', user);
        let filters = {}
        if (user) {
            filters = {
                where: user,
                // raw:true  // 以json格式返回结果
            }
        }
        let result = await userModel.findAll(filters);
        console.info('query:',result);
        return result
    } catch (err) {
        throw err;
    }

}

const userLogin = async function (user) {
    try {
        // console.info('user:', user);
        let filters = {
            where: {
                name: user.name
            },
            
        }
        let result = await userModel.findOne(filters);  
        console.info('serviceuserLogin:', result);  // {} [] null
        return result 
    } catch (error) {
        throw error;
    }

}

const createUser = async function (user) {
    try {
        console.info(user);
        let res = await userModel.create({
            name: user.userName,
            password: user.password,
            id: user.userId
        })
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    query,
    userLogin,
    createUser
}