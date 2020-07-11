/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    // 前缀数组
    const xors = [0];
    for(let i=0;i<arr.length;i++){
        xors[i+1] = xors[i]^arr[i];
    }
    let result = 0;
    // 若i~k这个区间xor为0(利用前缀数组) 则任何一个长度>1的子数组都满足
    for(let i=0;i<arr.length;i++){
        for(let k=i+1;k<arr.length;k++){
            const xor = xors[i]^xors[k+1];
            if(xor === 0){
                result += k-i;
            }
        }
    }
    
    return result;
};