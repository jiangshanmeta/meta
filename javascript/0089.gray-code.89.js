/**
 * @param {number} n
 * @return {number[]}
 */

function getCode(n){
    if(n === 1){
        return ["0","1"];
    }
    
    const arr = getCode(n-1);
    const rst = [];
    
    for(let i=0;i<arr.length;i++){
        rst.push("0"+arr[i]);
    }
    
    for(let i=arr.length-1;i>-1;i--){
        rst.push("1" + arr[i]);
    }
    
    return rst;
}

var grayCode = function(n) {
    if(n === 0){
        return [0];
    }
    
    return getCode(n).map((str)=>parseInt(str,2));
};