const userModel = require('../model/user')

const authorize = async function (user) {
    try {
        // console.info('user:', user);
        let filters = {
            where: {
                name: user.name
            },
            raw: true,
        }
        let result = await userModel.findOne(filters);  
        console.info('serviceuserLogin:', result);  // {} [] null
        return result 
    } catch (error) {
        throw error;
    }

}

const register = async function (user) {
    try {
        // console.info('register:', user);
        // 先查询是否有重复
        let filters = {
            where:{
                name: user.name
            },
            raw: true,
        }
        let isUserExist = await userModel.findOne(filters)
        // console.info('isUserExist',isUserExist)
        if(isUserExist){
            return null
        }
        let res = await userModel.create({
            name: user.name,
            password: user.password,
            email: user.email
        })
        return res;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    authorize,
    register
}