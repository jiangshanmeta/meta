/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((sum,item)=>{
        return sum+item;
    },0);
    // 和不能整除3 不能分割
    if(sum%3 !== 0){
        return false;
    }
    
    sum = sum/3;

    // 找第一个分割点
    let index = 0;
    let sum1 = 0;
    while(index<A.length){
        sum1 += A[index++];
        if(sum1 === sum){
            break;
        }
    }

    if(index === A.length){
        return false;
    }
    // 找第二个分割点
    let sum2 = 0;
    while(index<A.length){
        sum2 += A[index++];
        if(sum2 === sum){
            break;
        }
    }
    
    if(index === A.length){
        return false;
    }
    
    return true;
};