/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const dpOdd = new Array(arr.length+1).fill(0);
    const dpEven = new Array(arr.length+1).fill(0);
    const mod = 10**9+7;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 1){
            dpOdd[i+1] = dpEven[i]+1;
            dpEven[i+1] = dpOdd[i];
        }else{
            dpOdd[i+1] = dpOdd[i];
            dpEven[i+1] = dpEven[i]+1;
        }
    }
    let result = 0;
    for(let i=1;i<dpOdd.length;i++){
        result = (result+dpOdd[i])%mod;
    }
    return result;
};