const login = async function(ctx,next){
    ctx.response.body = 'this is login'
}

module.exports = {
    login:login
}