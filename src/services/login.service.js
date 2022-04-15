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
module.exports = {
    authorize
}