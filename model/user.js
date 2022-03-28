const sequelize = require('../app/database');
// 用sequelize.define()定义Model时，传入名称user，默认的表名就是users
const user = sequelize.define('user', {

    id: {
        type: sequelize.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        comment: '用户ID'
    },

    name: {
        type: sequelize.Sequelize.TEXT,
        comment: '用户名'
    },

    password: {
        type: sequelize.Sequelize.TEXT,
        comment: '用户密码'
    },

}, {
    timestamps: false // 为了关闭Sequelize的自动添加timestamp
});

module.exports = user;