/**
 * @param {string} address
 * @return {string}
 */
// 水题
var defangIPaddr = function(address) {
    const result = [];
    for(let i=0;i<address.length;i++){
        if(address[i] === '.'){
            result.push('[.]')
        }else{
            result.push(address[i])
        }
    }
    return result.join('');
};