function dataHandle(data){
    let newData = [];
    console.info('dataHandle:',data)
    if(isArray(data)){
        data.forEach(val=>{
            newData.push(val.dataValues);
        })
    }else if(isObject(data)){
        newData.push(data.dataValues);
    } 

    return newData
}

function isArray(arg){
    return Object.prototype.toString.call(arg) === '[object Array]'

}
function isObject(arg){
    return Object.prototype.toString.call(arg) === '[object Object]'
}

function isFunction(arg){
    return Object.prototype.toString.call(arg) === '[object Function]'
} 

function isEmpty(arg){
    return Object.keys(arg).length === 0;
}

module.exports = {
    dataHandle,
    isArray,
    isObject,
    isFunction,
    isEmpty,
}

