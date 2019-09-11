export const is = function(data, type){
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === type && type.toLowerCase();
}
